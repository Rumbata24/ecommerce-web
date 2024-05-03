import dbConnect from "@/lib/dbConnect";
import data from "@/lib/data";
import UserModel from "@/lib/models/UserModel";
import ProductModel from "@/lib/models/ProductModel";
import { NextRequest, NextResponse } from "next/server";

export const Get = async (request: NextRequest) => {
  const { users, products } = data;
  await dbConnect();
  await UserModel.deleteMany();
  await UserModel.insertMany(users);

  await ProductModel.deleteMany();
  await ProductModel.insertMany(users);

  return NextResponse.json({
    message: "seeded successfully",
    users,
    products,
  });
};
