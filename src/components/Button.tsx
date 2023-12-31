import React, { type DetailedHTMLProps } from 'react'

type ButtonProps ={
  small?: boolean,
  gray?: boolean,
  className?: string,
  children: string,
} & DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export default function Button({small, gray, className= "", children, ...props}: ButtonProps) {

  const sizeClasses = small ? "px-2 py-1 " : "px-4 py-2 font-bold"
  const colorClasses = gray ? "bg-gray-400 hover:bg-gray-300 focus-visible: bg-gray-300" :  "bg-blue-500 hover:bg-blue-400 focus-visible: bg-blue-400"

  return (
    <button className={`rounded-full transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 text-white ${colorClasses} ${sizeClasses} ${className}`} {...props}>{children}</button>
  )
}
