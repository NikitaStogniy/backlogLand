import { mailOptions, transporter } from "@/app/api/mail/nodemailer";
import { NextResponse, NextRequest } from "next/server";

export  async function POST(req:NextRequest,res:NextResponse){

        const data = await req.json();
        console.log(data)
        let requ = await transporter.sendMail({
            ...mailOptions,
            subject: "Заявка с сайта Backlog",
            text: `Заявка от ${JSON.stringify(data.name)}`,
            html: `<h1>${JSON.stringify(data.name)}</h1><p>${JSON.stringify(data.phone)}</p><p>${JSON.stringify(data.email)}</p>`
        })
        .then(console.log)
        .catch(console.error)


}
