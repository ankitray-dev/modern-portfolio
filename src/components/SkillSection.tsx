"use client"
import { Button } from './ui/button'
import Image from 'next/image'

const SkillSection = () => {
  return (
    <>
    <div className="flex flex-col items-center">
      <div>
        <Button variant="heading" size="h">Skills</Button>
      </div>
      <p className="mt-4">The skills, tools and technologies I am really good at:</p>
    </div>
    </>
  )
}

export default SkillSection
