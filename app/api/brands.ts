import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../lib/supabase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await supabase.from("brands").select("*");

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json(data);
};
