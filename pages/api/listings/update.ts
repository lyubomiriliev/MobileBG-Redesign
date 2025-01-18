import { supabase } from "@/lib/supabase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function updateListing(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "PUT") {
    return res
      .setHeader("Allow", ["PUT"])
      .status(405)
      .end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { id } = req.query;
    if (!id) throw new Error("Listing ID is required");

    const { data, error } = await supabase
      .from("listings")
      .update(req.body)
      .eq("id", id);
    if (error) throw error;

    return res.status(200).json(data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
  }
}
