import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { email, password } = req.body;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    res.status(201).json({ message: "User created", user });
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      return res.status(400).json({ message: "📧 This email is already in use." });
    }

    return res.status(500).json({ message: error.message });
  }
}
