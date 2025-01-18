import { supabase } from "@/lib/supabase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function deleteListing(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "DELETE") {
    return res
      .setHeader("Allow", ["DELETE"])
      .status(405)
      .end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { id } = req.query;
    if (!id) throw new Error("Listing ID is required");

    const { error } = await supabase.from("listings").delete().eq("id", id);
    if (error) throw error;

    return res.status(204).end();
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
  }
}
