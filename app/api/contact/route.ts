import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    const res=await fetch('https://api.copper.com/developer_api/v1/leads', {
        method: 'POST',
        headers: {
          'X-PW-AccessToken': 'a673da1bb658fe05f991609b1352c917',
          'X-PW-Application': 'developer_api',
          'X-PW-UserEmail': '34898@gcslahore.edu.pk',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: { email: email, category: 'work' },
          phone_numbers: phone ? [{ number: phone, category: 'work' }] : [],
          details: message,
          source: 'Shopify Contact Form'
        })
      });

      console.log('✅ Lead sent to Copper CRM');

    const result = await res.json();

    return NextResponse.json({data: result, success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}