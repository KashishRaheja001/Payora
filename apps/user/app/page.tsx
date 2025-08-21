import { NextResponse } from "next/server";
import { PrismaClient } from "@repo/db/client";

export default function Home(){
  return (
    <div >
      <div className=" max-h-lvh text-8xl text-cyan-700 py-12 capitalize text-center whitespace-pre-line ">
        finaaly started ! 
      </div>
    </div>
  );
}

