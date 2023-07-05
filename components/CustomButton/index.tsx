"use client"

import React from 'react'
import Image from 'next/image'

type Props = {}

const CustomButton = (props: Props) => {
  return (
    <button disabled={false}
    type={"button"}
    className={`custom-btn`}
    onClick={() => {}}
    >
        <span className="flex-1">
            title
        </span>
    </button>
  )
}

export default CustomButton