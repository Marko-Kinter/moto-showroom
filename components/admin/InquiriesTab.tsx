"use client";
import useInquiry from "@/hooks/useInquiry";
import { Button, Card, Skeleton } from "@heroui/react";
import { useState } from "react";

export default function InquiriesTab() {
  const { data: inquiries, isLoading, error } = useInquiry();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (isLoading) {
    return (
      <Card className="p-4 space-y-4">
        <Skeleton classNames={{ base: "h-6 w-1/3 rounded" }} />
        {Array.from({ length: 3 }).map((_, idx) => (
          <div key={idx} className="p-4 bg-gray-700 rounded-lg animate-pulse">
            <Skeleton classNames={{ base: "h-5 w-1/2 rounded mb-1" }} />
            <Skeleton classNames={{ base: "h-4 w-1/3 rounded mb-1" }} />
            <Skeleton classNames={{ base: "h-4 w-1/4 rounded mb-1" }} />
            <Skeleton classNames={{ base: "h-4 w-full rounded" }} />
          </div>
        ))}
      </Card>
    );
  }

  if (error) {
    return <p className="text-red-500 p-4">Error loading inquiries</p>;
  }

  if (!inquiries || inquiries.length === 0) {
    return <p className="p-4">No inquiries yet.</p>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Recent Inquiries</h2>
      <div className="space-y-4">
        {inquiries.map((inq, index) => (
          <Card key={inq.id} className="p-4 bg-gray-700 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">{inq.name}</h4>
                <p className="text-sm text-gray-400">{inq.email}</p>
                <p className="text-sm text-gray-200">Phone: {inq.phone}</p>
                <p className="text-sm text-orange-500">{inq.slug}</p>
                {openIndex === index && (
                  <p className="text-gray-200 mt-2">{inq.message}</p>
                )}
              </div>
              <div className="text-right flex flex-col items-end space-y-2">
                <p className="text-sm text-gray-400">{inq.createdAt}</p>
                <Button
                  variant="light"
                  color="warning"
                  size="sm"
                  onPress={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  {openIndex === index ? "Hide Details" : "View Details"}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
