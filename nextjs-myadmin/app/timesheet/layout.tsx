// app/dashboard/layout.tsx

import Sidebar from "../sidebar/page";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar/>
      <main className="flex-grow p-4 ml-80">{children}</main>
    </div>
  );
}
