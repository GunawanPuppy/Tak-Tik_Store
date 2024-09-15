import ProductModel from "@/Db/models/Product"
import { NextResponse } from "next/server"

export async function GET(){
    // bagaimana cara implementasi mendapatkan datanya
    try {
        const data = await ProductModel.findAll()
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({
            message: "Internal server error"
        },{
            status:500
        })
        
    }
}