"use client";
import { Admin } from '@/types/product';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import AdminAccessButton from './CreateAdminButton';
import DeleteAdminButton from './DeleteAdminButton';

const UsersTab = () => {
    const [admins, setAdmins] = useState<Admin[]>([]);
    
        useEffect(() => {
          const fetchAdmins = async () => {
            try {
              const res = await fetch("/api/admins");
    
              if (!res.ok) {
                const errorText = await res.text();
                throw new Error(`Fetch failed: ${res.status} - ${errorText}`);
              }
    
              const data = await res.json();
              setAdmins(data);
            } catch (error) {
              console.error("Error fetching admins", error);
            }
          };
    
          fetchAdmins();
        }, []);
  return (
    <div className="space-y-6">
        <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Admin Users</h2>
            <AdminAccessButton />
        </div>

        <div className="card">
            <div className="space-y-4">
            {admins.map((admin, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                <div>
                    <p className="font-medium">{admin.email}</p>
                    <p className="text-sm text-gray-400">{admin.name}</p>
                </div>
                <DeleteAdminButton email={admin.email} />
                </div>
            ))}
            </div>
        </div>
    </div>
    );
}

export default UsersTab