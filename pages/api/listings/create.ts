import { supabase } from "@/lib/supabase";
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
      description,
      imageUrls,
      phoneNumber,
      isPromoted,
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
        litres: generalData.litres,
        euro: generalData.euro,
        horsePower: generalData.horsePower,
        exterior_color: interiorExterior.exteriorColor,
        interior_material: interiorExterior.interiorMaterial,
        interior_color: interiorExterior.interiorColor,
        safety_extras: safetyExtras,
        comfort_extras: comfortExtras,
        multimedia_extras: multimediaExtras,
        additional_extras: additionalExtras,
        phoneNumber,
        description,
        imageUrls,
        isPromoted,
      })
      .select("*")
      .single();

    if (error) {
      console.error("Supabase error:", error.message);
      return res.status(400).json({ error: error.message });
    }

    res.status(201).json(data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("API error:", error.message);
      res.status(500).json({ error: error.message });
    }
  }
}
