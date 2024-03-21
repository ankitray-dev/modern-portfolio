"use client"

import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Button } from './ui/button'
import Link from 'next/link'
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, ReaderIcon, TwitterLogoIcon } from '@radix-ui/react-icons'

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12 md:my-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className="bg-clip-text">Hello, I&apos;m{" "}
                    </span>
                    <br />
                    <TypeAnimation
                    sequence={[
                        'Your Name',
                        1500,
                        'Front-End Developer',
                        1500,
                        'Web Developer',
                        1500,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                </h1>
                <p className="text-[#6C757D] text-base sm:text-lg mb-6 lg:text-xl">
                    Welcome to my digital space! As a passionate <span className="text-[#40E0D0] font-[900]">software developer</span>, I invite you to explore my world of innovative creations and solutions. This portfolio is a curated showcase of my expertise in <span className="text-[#40E0D0] font-[900]">front-end development</span>, featuring interactive and responsive web and mobile applications. Join me on this journey through code and creativity, where every project tells a story of dedication and skill. Let&apos;s build the future together, one line of code at a time.
                </p>
                <div>
                    <Link href="/">
                        <Button className="px-6 py-3 mr-4" variant="outline">
                            Hire me
                        </Button>
                    </Link>
                    <Button className="px-6 py-3" variant="outline">
                        <ReaderIcon/>
                        <a href="/" download="AnkitRay_Resume.pdf">Resume</a>
                    </Button>
                </div>
                <div className="flex justify-start mt-12">
                    <Link href="/"><LinkedInLogoIcon className="m-2 h-8 w-8"/></Link>
                    <Link href="/"><InstagramLogoIcon className="m-2 h-8 w-8"/></Link>
                    <Link href="/"><TwitterLogoIcon className="m-2 h-8 w-8"/></Link>
                    <Link href="/"><GitHubLogoIcon className="m-2 h-8 w-8"/></Link>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
                    <Image
                        src="/"
                        alt="hero image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={400}
                        height={400}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
