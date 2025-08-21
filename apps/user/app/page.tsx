import { NextResponse } from "next/server";
import { PrismaClient } from "@repo/db/client";
// const prisma = new PrismaClient();
import { Button } from "@repo/ui/button"
import { Login } from '@repo/ui/login'
import { Dashboard } from "./components/dashboard";

export default function Home(){
  return (
    <div >
      <div className=" max-h-lvh text-8xl text-cyan-700 capitalize text-center whitespace-pre-line ">
        finaaly started ! 
      </div>
    </div>
  );
}

