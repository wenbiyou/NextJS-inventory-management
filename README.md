# Next.js Inventory Management

基于 Next.js 和 PostgreSQL 构建的现代化全栈库存管理系统。通过直观的仪表板，您可以轻松跟踪产品、监控库存水平并获取库存洞察。

## 功能特性

- **🔐 Authentication**: 使用 Stack Auth 提供安全的用户认证
- **📊 Dashboard**: 可视化概览关键指标，包括总产品数、库存总价值、低库存警报
- **📈 Analytics**: 每周新增产品图表和库存分布统计
- **📦 Inventory Management**: 支持添加、查看、搜索和删除产品
- **⚠️ Low Stock Alerts**: 可配置自定义低库存阈值，避免意外断货
- **🔍 Search**: 按名称快速搜索产品
- **📄 Pagination**: 内置分页处理大型产品目录
- **🎨 Modern UI**: 使用 Tailwind CSS 构建简洁响应式设计

## 技术栈

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **Auth**: [Stack Auth](https://stackauth.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **React**: 19

## 快速开始

### 环境要求

- Node.js 18+
- PostgreSQL 数据库
- Stack Auth 账户 (用于用户认证)

### 环境变量

在项目根目录创建 `.env` 文件，添加以下变量:

```env
DATABASE_URL="你的-postgresql-连接地址"
NEXT_PUBLIC_STACK_PROJECT_ID="你的-stack-项目-id"
NEXT_PUBLIC_STACK_CLIENT_ID="你的-stack-客户端-id"
STACK_SECRET_SERVER_KEY="你的-stack-密钥"
```

### 安装运行

1. Clone the repository:

```bash
git clone https://github.com/wenbiyou/NextJS-inventory-management.git
```

2. Install dependencies:

```bash
pnpm install
# 或者
npm install
# 或者
yarn install
```

3. Set up the database:

```bash
npx prisma generate
npx prisma db push
```

4. Run the development server:

```bash
pnpm dev
# 或者
npm run dev
# 或者
yarn dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 即可查看应用。

## 项目结构

```
├── app/
│   ├── add-product/     # 添加产品页面
│   ├── dashboard/       # 数据分析仪表板
│   ├── inventory/       # 库存列表页面
│   ├── settings/        # 设置页面
│   ├── sign-in/         # 登录认证页面
│   ├── layout.tsx       # 根布局
│   └── page.tsx         # 着陆页
├── components/          # React 组件
│   ├── pagination.tsx   # 分页组件
│   ├── products-chart.tsx # Recharts 图表可视化
│   └── sidebar.tsx      # 侧边栏导航
├── lib/                 # 工具函数和服务端操作
│   ├── actions/         # 产品操作的服务端 Actions
│   ├── auth.ts          # 认证工具
│   └── prisma.ts        # Prisma 客户端单例
├── prisma/
│   └── schema.prisma    # 数据库 Schema
└── public/              # 静态资源
```

## 功能说明

### Dashboard

- 查看总产品数量
- 查看库存总价值
- 监控低库存商品
- 使用交互式图表追踪每周新增产品
- 查看最近添加的产品，使用颜色编码标示库存水平
- 查看库存分布 (有货、低库存、缺货)

### Inventory Management

- 列出所有产品，支持搜索功能
- 查看产品详情，包括名称、SKU、价格、数量和低库存阈值
- 直接从库存列表中删除产品
- 分页浏览大量产品

### Add Products

- 简洁表单添加新产品
- 必填字段: 名称、数量、价格
- 可选字段: SKU、低库存阈值
- 服务端验证和处理

## 数据库模型

### Product Model

- `id`: 唯一标识符 (cuid)
- `userId`: Stack Auth 用户 ID (支持多租户)
- `name`: 产品名称
- `sku`: 库存单位 (可选，唯一)
- `price`: 产品价格
- `quantity`: 当前库存数量
- `lowStockAt`: 低库存警报阈值 (可选)
- `createdAt`: 创建时间戳
- `updatedAt`: 最后更新时间戳

## 生产构建

```bash
pnpm build
pnpm start
```

## 代码检查

```bash
pnpm lint
```

## 部署

部署此应用最简单的方式是使用 Next.js 创始人提供的 [Vercel 平台](https://vercel.com/new)。更多详情请查看 [Next.js 部署文档](https://nextjs.org/docs/app/building-your-application/deploying)。

确保在 Vercel 项目中配置所有环境变量，并配置 PostgreSQL 数据库连接。

## 贡献

欢迎贡献代码！请随时开启 Issue 和 Pull Request。

## 许可证

MIT
