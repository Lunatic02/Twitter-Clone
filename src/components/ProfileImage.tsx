import { type StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

type ProfileImageProps = {
  src: string  | StaticImport | undefined | null,
  className?: string,
} 


export default function ProfileImage({src, className = ""}: ProfileImageProps) {
  return (
    <div className={`relative h-12 w-12 overflow-hidden rounded-full ${className}`}>
        {src == null ? null : <Image src={src} alt="Profile Image" quality={100} fill/>}
    </div>
  )
}
