// app/layout.tsx

import Sidebar from "./page"; // Adjust the import path if necessary

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <main className="flex-grow p-4 ml-64">{children}</main>
      </body>
    </html>
  );
}
