import { prisma } from "@/utils/connect";
import { auth } from "@/utils/auth";
import { NextRequest, NextResponse } from "next/server";

// get single product
export const GET = async (req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    try {
        const products = await prisma.product.findUnique({
            where: {
                id: id
            },
        })

        return new NextResponse(JSON.stringify(products), { status: 200 })

    } catch (err) {
        console.log(err);
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 })
    }
}

// delete single product
export const DELETE = async (req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const session = await auth();

    if (session?.user.isAdmin) {


        try {
            await prisma.product.delete({
                where: {
                    id: id
                },
            })

            return new NextResponse(JSON.stringify("Product has been deleted!"), { status: 200 })

        } catch (err) {
            console.log(err);
            return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 })
        }
    }
    return new NextResponse(JSON.stringify({ message: "You are not allowed!" }), { status: 403 })
}