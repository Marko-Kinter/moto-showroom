import { PrismaClient } from "@/lib/prisma/generated/prisma";
import { Admin } from "@/types/product";

const prisma = new PrismaClient();

export async function getAllAdmins() {
    const admins = await prisma.admin.findMany({})

    return admins.map((admin) => ({
        id: admin.id,
        name: admin.name,
        email: admin.email,
    }))
};

interface CreateAdminInput {
    name: string;
    email: string;
}
export async function createAdmin(data:CreateAdminInput): Promise<Admin> {
    const newAdmin = await prisma.admin.create({
        data: {
            name:data.name,
            email:data.email,
        },
    });
    
    return {
        id: newAdmin.id,
        name: newAdmin.name,
        email: newAdmin.email,
    }
}

export async function deleteAdmin(email: string) {
  try {
    await prisma.admin.delete({
      where: { email: email },
    });

  } catch (error) {
    console.error("Error deleting admin:", error);
    throw new Error("Failed to delete admin");
  }
}
