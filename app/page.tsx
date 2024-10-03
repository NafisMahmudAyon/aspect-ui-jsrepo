// import Image from "next/image";
'use client'
import AccordionDemo from '@/components/test/Accordion'
import ButtonDemo from '@/components/test/Button'
import CardDemo from '@/components/test/Card';
import { UseThemeSwitcher } from '@/components/UseThemeSwitcher';

export default function Home() {
  const [mode, setMode] = UseThemeSwitcher();
  
  return (
    <main className='mx-auto min-h-screen py-24'>
      <button
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light"
          ? "bg-darkBgColor text-textColor"
          : "bg-bgColor text-textColor"
          }`}>
        {mode === "dark" ? (
          "dark"
        ) : (
          "light"
        )}
      </button>
      {/* <AccordionDemo /> */}
      {/* <ButtonDemo /> */}
      <CardDemo />
    </main>
  )
}
