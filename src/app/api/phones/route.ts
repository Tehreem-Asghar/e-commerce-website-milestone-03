import {  NextResponse } from "next/server";
import products from "@/mydb/mydb";

export function GET(){
 
   const data = products
   return NextResponse.json(data,{status : 200})
 
}