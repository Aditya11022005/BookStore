import { connectDB } from "@/lib/databaseConnection";
import { response } from "@/lib/helperFunction";
import { zSchema } from "@/lib/zodSchema";


export async function POST(request){

    try{
        await  connectDB();

        // validation schema
        const validationSchema = zSchema.pick({

            name: true,
            email: true,
            password: true
             
        })

        const payload = await request.json();

        const validateData = validationSchema.safeParse(payload);

        //check alredy user rgistrastion
        if(!validateData.success){

            return response(false,401,"Invalid or missing input field.",validateData.error);
       

    }

    const {name,email,password} = validateData.data;


    const  checkUser = await UserModel.exists({email})

    if(checkUser){

        return response(true,409,"User with this email already exists.");
    }


    const NewRegistration = new UserModel({

        name,
        email,
        password
    })

    await NewRegistration.save()

}
    catch(error){



    }

}