import { supabase } from "@/lib/supabase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getUserListings(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res
      .setHeader("Allow", ["GET"])
      .status(405)
      .end(`Method ${req.method} Not Allowed`);
  }

  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ error: "User ID is required." });
  }

  try {
    const { data, error } = await supabase
      .from("listings")
      .select("*")
      .eq("userId", userId);

    if (error) throw error;

    return res.status(200).json(data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching listings:", error.message);
      return res.status(500).json({ error: error.message });
    }
  }
}
