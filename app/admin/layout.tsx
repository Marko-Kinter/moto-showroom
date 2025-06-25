
import AdminPanelWrapper from "@/components/admin/AdminWrapper";


export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminPanelWrapper>
      {children}
    </AdminPanelWrapper>
  );
}
