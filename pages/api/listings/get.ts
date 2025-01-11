import { supabase } from "@/app/lib/supabase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getListings(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res
      .setHeader("Allow", ["GET"])
      .status(405)
      .end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { id } = req.query;

    const { data, error } = id
      ? await supabase.from("listings").select("*").eq("id", id).single()
      : await supabase.from("listings").select("*");

    if (error) throw error;

    return res.status(200).json(data);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}
