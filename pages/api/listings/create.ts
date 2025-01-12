import { supabase } from "@/app/lib/supabase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function createListing(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res
      .setHeader("Allow", ["POST"])
      .status(405)
      .end(`Method ${req.method} Not Allowed`);
  }

  try {
    const {
      userId,
      generalData,
      interiorExterior,
      multimediaExtras,
      safetyExtras,
      comfortExtras,
      additionalExtras,
    } = req.body;

    const { data, error } = await supabase
      .from("listings")
      .insert({
        userId,
        category: generalData.category,
        brand: generalData.brand,
        model: generalData.model,
        modification: generalData.modification,
        tuning: generalData.tuning,
        engine: generalData.engine,
        gearbox: generalData.gearbox,
        vin: generalData.vin,
        price: generalData.price,
        currency: generalData.currency,
        mileage: generalData.mileage,
        location: generalData.location,
        date_year: parseInt(generalData.dateYear),
        date_month: generalData.dateMonth,
        coupe: generalData.coupe,
        exterior_color: interiorExterior.exteriorColor,
        interior_material: interiorExterior.interiorMaterial,
        interior_color: interiorExterior.interiorColor,
        multimedia_extras: multimediaExtras,
        safety_extras: safetyExtras,
        comfort_extras: comfortExtras,
        additional_extras: additionalExtras,
      })
      .select("*")
      .single();

    if (error) {
      console.error("Supabase error:", error.message);
      return res.status(400).json({ error: error.message });
    }

    res.status(201).json(data);
  } catch (error: any) {
    console.error("API error:", error.message);
    res.status(500).json({ error: error.message });
  }
}
