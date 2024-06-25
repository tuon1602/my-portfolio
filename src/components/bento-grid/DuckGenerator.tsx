"use client";

import { useGetDuck } from "@/hooks/useGetAnimals";
import Image from "next/image";
import React from "react";

const DuckGenerator = () => {
  const { data, isLoading, error } = useGetDuck()
  if(isLoading){
    return <p className="flex justify-center items-center">Loading ducks</p>
  }
  if(error){
    console.log(error.message)
    return <p className="flex justify-center items-center">Something went wrong with my ducks</p>
  }
  return(
    <div className="relative w-full h-full">
        <Image src={data?.url} alt="duck" fill className="object-cover rounded-2xl" />
    </div>
  )
};

export default DuckGenerator;
