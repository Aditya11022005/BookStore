import { success } from "zod";

export const response = (success,statusCode,message,data ={}) =>{

    return NextResponse.json({

        success,
        statusCode,
        message,
        data
})
}