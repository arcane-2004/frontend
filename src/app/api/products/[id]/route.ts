import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// get single product
export const GET = async (req: NextRequest, {params} : {params : Promise<{ id: string }>}) => {
    const {id} = await params;

    try{

        const body = await req.json()

        await prisma.order.update({
            where:{
                id: id
            },
            data : {status: body},
        })

        return new NextResponse(JSON.stringify({message: "Order updated!"}), {status: 200})

    }catch(err){
        console.log(err);
        return new NextResponse(JSON.stringify({message: "Something went wrong"}), {status: 500})
    }
}