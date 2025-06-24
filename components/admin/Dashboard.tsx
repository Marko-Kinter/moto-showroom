"use client"

import { useEffect, useState } from "react"
import { ChartBarIcon, CogIcon, UsersIcon, TruckIcon } from "@heroicons/react/24/outline"
import { Product } from "@/types/product"
import MotorcyclesTable from "./MotorcyclesTable"
import MotorcycleInquiries from "./MotorcycleInquiries"

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
    fetch("/api/products")
        .then((res) => res.json())
        .then(setProducts)
        .catch((err) => console.error("Error fetching products", err));
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
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Admin Users</h2>
              <button className="btn-primary">Add Admin User</button>
            </div>

            <div className="card">
              <div className="space-y-4">
                {["admin@mkmgarage.com", "manager@mkmgarage.com", "sales@mkmgarage.com"].map((email, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                    <div>
                      <p className="font-medium">{email}</p>
                      <p className="text-sm text-gray-400">Administrator</p>
                    </div>
                    <button className="text-red-500 hover:text-red-400">Remove</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Inquiries Tab */}
        {activeTab === "inquiries" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Recent Inquiries</h2>

            <div className="card">
              <div className="space-y-4">
                {[
                  {
                    name: "John Doe",
                    email: "john@example.com",
                    motorcycle: "Harley Davidson Street 750",
                    date: "2024-01-15",
                  },
                  { name: "Jane Smith", email: "jane@example.com", motorcycle: "Yamaha MT-07", date: "2024-01-14" },
                  { name: "Mike Johnson", email: "mike@example.com", motorcycle: "BMW R1250GS", date: "2024-01-13" },
                ].map((inquiry, index) => (
                  <div key={index} className="p-4 bg-gray-700 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{inquiry.name}</h4>
                        <p className="text-sm text-gray-400">{inquiry.email}</p>
                        <p className="text-sm text-orange-500">{inquiry.motorcycle}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-400">{inquiry.date}</p>
                        <button className="text-orange-500 hover:text-orange-400 text-sm">View Details</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
