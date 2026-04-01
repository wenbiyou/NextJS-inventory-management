import Sidebar from "@/components/sidebartemp";

export default async function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar currentPath="/dashboard" />
      <main className="ml-64 p-8"></main>
    </div>
  );
}
