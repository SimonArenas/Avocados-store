import type { NextApiRequest, NextApiResponse } from "next";
import DB from "../../../database/db";

const allAvocados = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB();
  const allAvocados = await db.getAll();
  const length = allAvocados.length;

  res.status(200).json({ length, allAvocados });
};
export default allAvocados;
