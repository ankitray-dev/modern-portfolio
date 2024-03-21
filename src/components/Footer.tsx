"use client"

import { CopyIcon, EnvelopeClosedIcon, GitHubLogoIcon, InstagramLogoIcon, MobileIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-4">
        <Button variant="heading" size="h">Get in touch</Button>
      </h1>
      <p>
        What&apos;s next? Feel free to reach out to me if you are looking for
      </p>
      <p>
        a developer, have a query, or simply want to connect.
      </p>
      <div className="flex flex-row justify-between mt-8">
        <EnvelopeClosedIcon className="mt-3 h-8 w-8"/>
        <p className="ml-4 mr-4 font-bold text-[32px]">
            abcdefghijkl@gmail.com
        </p>
        <CopyIcon className="mt-3 h-8 w-8"/>
      </div>
      <div className="flex flex-row justify-between">
        <MobileIcon className="mt-3 h-8 w-8"/>
        <p className="ml-4 mr-4 font-bold text-[32px]">
            +91 0123456789
        </p>
        <CopyIcon className="mt-3 h-8 w-8"/>
      </div>
      <p className="mt-8">
        You may also find me in this platforms!
      </p>
      <p className="flex items-center mt-2">
        <Link href="/"><GitHubLogoIcon className="mr-2 h-5 w-5"/></Link>
        <Link href="/"><TwitterLogoIcon className="mr-2 h-5 w-5"/></Link>
        <Link href="/"><InstagramLogoIcon className="h-5 w-5"/></Link>
      </p>
    </div>
  )
}

export default Footer
