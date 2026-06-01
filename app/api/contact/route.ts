import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    // const { name, email, phone, message } = await req.json();

    // 1. Create Person in Copper
    // const copperRes = await fetch(
    //   "https://api.copper.com/developer_api/v1/people",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "X-PW-AccessToken": process.env.COPPER_API_KEY!,
    //       "X-PW-Application": "developer_api",
    //       "X-PW-UserEmail": process.env.COPPER_USER_EMAIL!,
    //     },
    //     body: JSON.stringify({
    //       name,
    //       emails: [{ email }],
    //       phone_numbers: phone ? [{ number: phone }] : [],
    //     }),
    //   }
    // );

    // const person = await copperRes.json();

    // // 2. Add message as Note
    // await fetch("https://api.copper.com/developer_api/v1/notes", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "X-PW-AccessToken": process.env.COPPER_API_KEY!,
    //     "X-PW-Application": "developer_api",
    //     "X-PW-UserEmail": process.env.COPPER_USER_EMAIL!,
    //   },
    //   body: JSON.stringify({
    //     parent: {
    //       id: person.id,
    //       type: "person",
    //     },
    //     content: message,
    //   }),
    // });

    return NextResponse.json({ message:"data",success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}