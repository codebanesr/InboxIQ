import { NextApiRequest, NextApiResponse } from "next";
import watchEmail from "./watchEmail";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Retrieve the user's session from NextAuth
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  //   Check if the user is an admin (optional)
  //   const isAdmin = session.userRole === "admin";

  //   if (!isAdmin) {
  //     return res.status(403).json({ error: "Forbidden" });
  //   }

  // Call the watchEmail function
  return watchEmail(req, res);
}
