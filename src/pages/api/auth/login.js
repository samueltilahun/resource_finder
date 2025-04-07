import { adminAuth } from "@/lib/firebaseAdmin";  // Updated import

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { token } = req.body;
  if (!token) return res.status(400).json({ message: "Token required" });

  try {
    const decodedToken = await adminAuth.verifyIdToken(token);

    const uid = decodedToken.uid;
    console.log("User authenticated with UID:", uid);

    return res.status(200).json({ message: "Logged in successfully", uid });
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(401).json({ message: "Invalid token or expired" });
  }
}
