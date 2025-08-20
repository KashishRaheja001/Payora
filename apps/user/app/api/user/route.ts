import { NextResponse } from "next/server";
import { PrismaClient } from "@repo/db/client";

const client = new PrismaClient();

export const GET = async()=>{
     await client.User.create({
        data: {
            email: " asd",
            username : "asdasd"
        }
     })
     return NextResponse.json({
        message: " hi there!"
     })
} 