import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";


// fetch categorie
export const GET = async () => {
    try{
        const categorie = await prisma.category.findMany();

        return new NextResponse(JSON.stringify(categorie), {status: 200});
    }catch(err){
        console.log(err)
        return new NextResponse(JSON.stringify(
            {message: "Something went wrong"},
        ), {status: 500})
    };
};    

export const POST = () => {
    return new NextResponse("hello", {status: 200})
}