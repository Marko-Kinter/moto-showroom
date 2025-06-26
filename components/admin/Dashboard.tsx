"use client"

import { useEffect, useState } from "react"
import { ChartBarIcon, CogIcon, UsersIcon, TruckIcon } from "@heroicons/react/24/outline"
import { Product } from "@/types/product"
import MotorcyclesTable from "./MotorcyclesTable"
import MotorcycleInquiries from "./MotorcycleInquiries"
import InquiriesTab from "./InquiriesTab"
import UsersTab from "./UsersTab"

// Mock data - replace with actual DB data
const dashboardStats = [
  {
    title: "Total Inquiries",
    value: "247",
    change: "+12%",
    icon: ChartBarIcon,
  },
  {
    title: "Active Motorcycles",
    value: "18",
    change: "+2",
    icon: TruckIcon,
  },
  {
    title: "Admin Users",
    value: "3",
    change: "0",
    icon: UsersIcon,
  },
  {
    title: "Pending Reviews",
    value: "8",
    change: "+3",
    icon: CogIcon,
  },
]



export function AdminDashboard() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const res = await fetch("/api/products");

          if (!res.ok) {
            const errorText = await res.text();
            throw new Error(`Fetch failed: ${res.status} - ${errorText}`);
          }

          const data = await res.json();
          setProducts(data);
        } catch (error) {
          console.error("Error fetching products", error);
        }
      };

      fetchProducts();
    }, []);


    console.log(products)

  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="light:text-gray-800 dark:text-gray-400 mt-2">Manage your motorcycle showroom</p>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: "overview", label: "Overview" },
              { id: "motorcycles", label: "Motorcycles" },
              { id: "users", label: "Admin Users" },
              { id: "inquiries", label: "Inquiries" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? "border-orange-500 text-orange-500"
                    : "border-transparent light:text-gray-700 dark:text-gray-400 hover:text-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dashboardStats.map((stat, index) => (
                <div key={index} className="card">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <stat.icon className="h-8 w-8 text-orange-500" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium light:text-gray-700 dark:text-gray-400">{stat.title}</p>
                      <div className="flex items-baseline">
                        <p className="text-2xl font-semibold">{stat.value}</p>
                        <p className="ml-2 text-sm text-green-400">{stat.change}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Motorcycle Inquiries Chart */}
            <MotorcycleInquiries products={products} />
          </div>
        )}

        {/* Motorcycles Tab */}
        {activeTab === "motorcycles" && (
          <MotorcyclesTable products={products}/>
        )}

        {/* Users Tab */}
        {activeTab === "users" && (
          <UsersTab />
        )}

        {/* Inquiries Tab */}
        {activeTab === "inquiries" && (
          <InquiriesTab />
        )}
      </div>
    </div>
  )
}
