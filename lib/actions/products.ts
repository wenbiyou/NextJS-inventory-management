import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function deleteProduct(formData: FormData) {
  const user = await getCurrentUser();
  const id = String(formData.get('id') || "");

  await prisma.product.deleteMany({
    where: {id: id, userId: user.id}
  })

}