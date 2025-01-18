import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export const runtime = "edge"; // Use the edge runtime

export default async function getAveragePrice(request: Request) {
  try {
    const body = await request.json();

    const { brand, model, year, engine, gearbox } = body;

    let query = supabase.from("listings").select("price");

    if (brand) query = query.eq("brand", brand);
    if (model) query = query.eq("model", model);
    if (year) query = query.eq("date_year", parseInt(year));
    if (engine) query = query.eq("engine", engine);
    if (gearbox) query = query.eq("gearbox", gearbox);

    const { data, error } = await query;

    if (error) {
      console.error("Error fetching listings:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const prices = data.map((listing) => listing.price);
    const total = prices.reduce((sum, price) => sum + price, 0);
    const averagePrice = prices.length ? total / prices.length : 0;

    return NextResponse.json({ averagePrice });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
