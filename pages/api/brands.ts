import { supabase } from "@/app/lib/supabase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { data, error } = await supabase.from("brands").select("*");

    if (error) {
      console.error("Supabase Error:", error.message);
      return res.status(500).json({ error: error.message });
    }

    if (!data) {
      console.error("No data found");
      return res.status(404).json({ error: "No data found" });
    }

    console.log("Fetched Data:", data);
    res.status(200).json(data);
  } catch (err: any) {
    console.error("Unexpected Error:", err.message);
    res.status(500).json({ error: err.message });
  }
}
