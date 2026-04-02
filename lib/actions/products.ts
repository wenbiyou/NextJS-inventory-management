"use server";

import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const ProductSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.coerce.number().nonnegative("Price must be non-negative"),
  quantity: z.coerce.number().int().min(0, "Quantity must be non-negative"),
  sku: z.string().optional(),
  lowStockAt: z.coerce.number().int().min(0).optional(),
})

export async function createProduct(formData: FormData) {
  // 👇 强制打印所有信息
  try {
    const user = await getCurrentUser();

    if (!user) {
      throw new Error("用户未登录");
    }

    const parsed = ProductSchema.safeParse({
      name: formData.get("name"),
      price: formData.get("price"),
      quantity: formData.get("quantity"),
      sku: formData.get("sku") || undefined,
      lowStockAt: formData.get("lowStockAt") || undefined,
    });

    if (!parsed.success) {
      throw new Error("验证失败");
    }

    console.log("👉 准备写入数据库：", parsed.data);

    const result = await prisma.product.create({
      data: {
        ...parsed.data,
        userId: user.id,
      },
    });
    console.log("👉 创建成功：", result);
    
  } catch (error: any) {
    // 🟥 这里会把【完整错误】打出来
    console.error("=====================================");
    console.error("🚨 真实错误信息：", error);
    console.error("🚨 错误堆栈：", error.stack);
    console.error("=====================================");

    throw new Error("Failed to create product");
  }

  redirect("/inventory");
}

export async function deleteProduct(formData: FormData) {
  const user = await getCurrentUser();
  const id = String(formData.get('id') || "");

  await prisma.product.deleteMany({
    where: {id: id, userId: user.id}
  })

}

