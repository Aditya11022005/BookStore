import { success } from "zod";

export const response = (success,statusCode,message,data ={}) =>{

    return NextResponse.json({

        success,
        statusCode,
        message,
        data
})
}


export const catchError = (error, customMessage) =>{

    // handaling duplicate key error

    if(error.code === 11000){

        const Keys = Object.keys(error.keyPattern).join(", ");

        error.message = `Duplicate field:${Keys}.This value already exists. Please use another value.`;

    }

    let errorObj = {}


    if(process.env.NODE_ENV === "development"){


        errorObj = {

            message : error.message,
            error

        }

    }
    else{

        
        errorObj = {

            message : customMessage ||'Internal Server Error',
            

        }
    }

    return response(false,error.code,...Obj)

}