import type { NextApiRequest, NextApiResponse } from "next";
import DB from "../../../database/db";

const getAvocadoById = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB();
  const id = req.query.id;

  const getAvocado = await db.getById(id as string);

  res.status(200).json({ getAvocado });
};
export default getAvocadoById;
