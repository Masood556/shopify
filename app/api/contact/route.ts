export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  const { name, email, phone, message } = req.body;

  try {
    const copperResponse = await fetch(
      "https://api.copper.com/developer_api/v1/people",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-PW-AccessToken": process.env.COPPER_API_KEY,
          "X-PW-Application": "developer_api",
          "X-PW-UserEmail": process.env.COPPER_USER_EMAIL,
        },
        body: JSON.stringify({
          name: name,
          emails: [
            {
              email: email,
            },
          ],
          phone_numbers: [
            {
              number: phone,
            },
          ],
          details: message,
        }),
      }
    );

    const result = await copperResponse.json();

    if (!copperResponse.ok) {
      return res.status(500).json(result);
    }

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error:unknown) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: (error as Error).message,
    });
  }
}