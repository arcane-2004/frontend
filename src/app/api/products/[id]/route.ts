import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// get single product
export const GET = async (req: NextRequest, {params} : {params : Promise<{ id: string }>}) => {
    const {id} = await params;

    try{ 
        const products = await prisma.product.findUnique({
            where:{
                id: id
            },
        })

        return new NextResponse(JSON.stringify(products), {status: 200})

    }catch(err){
        console.log(err);
        return new NextResponse(JSON.stringify({message: "Something went wrong"}), {status: 500} )
    }
}