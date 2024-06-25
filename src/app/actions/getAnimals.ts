"use server"

import { revalidateTag } from "next/cache";

export const getDuck = async () => {
  const res = await fetch(`${process.env.API_DUCK_URL}`,{
    cache:"no-cache"
  });
  if (!res.ok) {
    throw new Error("Error fetching duck");
  }
  return await res.json();
};

export const getNewDuck = async () => {
  revalidateTag("api-duck");
};
