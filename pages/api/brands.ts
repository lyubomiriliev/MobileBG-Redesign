import { supabase } from "@/lib/supabase";
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
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Unexpected Error:", error.message);
      res.status(500).json({ error: error.message });
    } else {
      console.error("Възникна неочаквана грешка", error);
    }
  }
}
