"use client";
import { Inquiry } from '@/types/product';
import React, { useEffect, useState } from 'react'

const InquiriesTab = () => {
    const [inquiries, setInquiry] = useState<Inquiry[]>([]);
    
      useEffect(() => {
        fetch("/api/products/inquiry")
          .then((res) => res.json())
          .then(setInquiry)
          .catch((err) => console.error("Error fetching inquiries", err));
      }, []);

  return (
    <div className="space-y-6">
        <h2 className="text-2xl font-bold">Recent Inquiries</h2>

        <div className="card">
            <div className="space-y-4">
            {inquiries.map((inquiry, index) => (
                <div key={index} className="p-4 bg-gray-700 rounded-lg">
                <div className="flex justify-between items-start">
                    <div>
                    <h4 className="font-medium">{inquiry.name}</h4>
                    <p className="text-sm text-gray-400">{inquiry.email}</p>
                    <p className="text-sm text-gray-200">Phone: {inquiry.phone}</p>
                    <p className="text-sm text-orange-500">{inquiry.slug}</p>
                    </div>
                    <div className="text-right">
                    <p className="text-sm text-gray-400">{inquiry.createdAt}</p>
                    <button className="text-orange-500 hover:text-orange-400 text-sm">View Details</button>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default InquiriesTab