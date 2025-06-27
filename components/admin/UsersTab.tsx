"use client";

import { Card, Skeleton } from "@heroui/react";
import AdminAccessButton from "./CreateAdminButton";
import DeleteAdminButton from "./DeleteAdminButton";
import useAdmins from "@/hooks/useAdmins";
import { Admin } from "@/types/product";

export default function UsersTab() {
  const { data: admins, error, isLoading, mutate } = useAdmins();

  const handleDeleted = (email: string) => {
    // Eliminamos del cache local sin refetch
    mutate(admins?.filter(a => a.email !== email), false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Admin Users</h2>
        <AdminAccessButton />
      </div>

      {/* Lista de Admins */}
      <div className="card p-4 space-y-4">
        {isLoading && (
          <>
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex justify-between items-center space-x-4">
                <div className="flex-1">
                  <Skeleton classNames={{ base: "h-5 w-40 rounded mb-1" }} />
                  <Skeleton classNames={{ base: "h-4 w-32 rounded" }} />
                </div>
                <Skeleton classNames={{ base: "h-8 w-20 rounded" }} />
              </div>
            ))}
          </>
        )}

        {error && <p className="text-red-500">Error loading admins</p>}

        {!isLoading && admins?.length === 0 && (
          <p>No admin users found.</p>
        )}

        {!isLoading && admins?.map((admin: Admin) => (
          <Card key={admin.email} className="flex items-center justify-between p-4 rounded-lg">
            <div>
              <p className="font-medium">{admin.email}</p>
              <p className="text-sm text-gray-400">{admin.name}</p>
            </div>
            <DeleteAdminButton
              email={admin.email}
              onDeleted={() => handleDeleted(admin.email)}
            />
          </Card>
        ))}
      </div>
    </div>
  );
}
