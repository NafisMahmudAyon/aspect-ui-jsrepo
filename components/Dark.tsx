'use client'
import React from 'react'
import { UseThemeSwitcher } from './UseThemeSwitcher';

const Dark = () => {
  const [mode, setMode] = UseThemeSwitcher();
  return (
    <div><button
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
    </button></div>
  )
}

export default Dark