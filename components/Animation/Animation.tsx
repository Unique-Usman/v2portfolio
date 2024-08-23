"use client"
import { TypeAnimation } from "react-type-animation";

export default function Animation() {
  return (
    <>
      <TypeAnimation
        sequence={[
          'I am a Computer Programmer', 
          500,
          'I use Arch and nvim btw',
          500,
          'I am learning Pytorch',
          500,
          'I am studying CSAI',
          500
        ]}
        speed={20}
        style={{ fontSize: '1.5rem' }}
        repeat={Infinity}
        deletionSpeed={60}
      /> 

    </>
  )
}
