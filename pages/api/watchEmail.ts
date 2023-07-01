import { NextApiRequest, NextApiResponse } from "next";

import axios from "axios";
import { getServerSession } from "next-auth";
import prisma from "../../utils/prisma";
import { authOptions } from "./auth/[...nextauth]";

export default async function watchEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Extract the access token from the NextAuth session
    const session = await getServerSession(req, res, authOptions);
    let accessToken = (session?.user as any).accessToken;
    const email = session?.user?.email;
    if(email) {
      const user = await prisma.user.findFirst({where: {email}});
      accessToken = accessToken || user?.accessToken;
    }

    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 7);    

    const userId = "me";

    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    };

    // Define the watch request parameters
    const request = {
      "topicName": process.env.GOOGLE_TOPIC_NAME,
      labelIds: ["INBOX"],
      labelFilterBehavior: "INCLUDE",    
    };

    const watchUrl = `https://gmail.googleapis.com/gmail/v1/users/${userId}/watch`;
    const watchResponse = await axios.post(watchUrl, request, { headers });

    console.log("Watch Response:", watchResponse.data);

    // Return a success response
    res.status(200).json({ message: "Email watch set up successfully" });
  } catch (error) {
    // Handle any errors
    console.error("Error setting up email watch:", error);
    res.status(500).json({ error: "Failed to set up email watch" });
  }
}
