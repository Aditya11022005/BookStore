import { emailVerificationLink } from "@/email/emailVerificationLink";
import { connectDB } from "@/lib/databaseConnection";
import { catchError, response } from "@/lib/helperFunction";
import { sendMail } from "@/lib/sendMail";
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

    const secret = new TextEncoder().encode(process.env.SECRET_KEY)
    const token = await new SignJWT({userId: NewRegistration._id})
    .setIssuedAt()
    .setExpirationTime("1h")
    .setProtectedHeader({alg: "HS256"})
    .sign(secret)


await sendMail('Email Verification request from Pustak Maza',email,emailVerificationLink(`${process.env.NEXT_PUBLIC_BASE_URL}/verify-email/${token}`))


    return response(true,200,"User registered successfully. Please verify your email address to activate your account.");

    
}
    catch(error){

        catchError(error)


    }

}