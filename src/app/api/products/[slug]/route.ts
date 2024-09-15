import { NextResponse } from "next/server";

export async function GET(){
    //memanggil model untuk ngambil data slug
    return NextResponse.json({
        message: "Success Slug"
    },
{
    status: 200
})
}