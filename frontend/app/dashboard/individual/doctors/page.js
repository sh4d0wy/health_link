"use client"
 import React, { useEffect } from 'react'

const page = () => {
  useEffect(()=>{
    fetch('http://localhost:3001/consultant').then(async (data)=>{
      const result = await data.json();
      console.log(result);
    })
  },[])
  return (
    <div>page</div>
  )
}

export default page