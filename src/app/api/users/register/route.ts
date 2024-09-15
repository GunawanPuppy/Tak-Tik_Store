import UserModel from "@/Db/models/User";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

//cara memanggil model untuk create user
export async function POST(request: NextRequest) {
  try {
    //cara mendapatkan body
    const body = await request.json();
    //perlu validasi apakah email dan password ada?
    const result = await UserModel.create(body);
    return NextResponse.json(
      {
        message: "success register",
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.log(error);
    if(error instanceof z.ZodError){
       return NextResponse.json({
        message: error.errors[0].message
       },{
        status: 400
       })

    }
    return NextResponse.json({
        message: "Internal server error"
    },
{
    status: 500
})
    
  }
}
