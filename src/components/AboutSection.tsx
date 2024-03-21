"use client"

import Image from "next/image"
import { Button } from "./ui/button"

const AboutSection = () => {
  return (
    <>
    <div className="mb-4">
        <Button variant="heading" size="h">About me</Button>
    </div>
    <div className="grid grid-cols-2 mt-8">
      <Image src="/" alt="about image" width={500} height={500} />
      <div className="text-left flex flex-col">
        <h2 className="text-3xl font-bold">Curious about me? Here you have it:</h2>
      </div>
    </div>
    </>
  )
}

export default AboutSection
