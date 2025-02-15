import Image from 'next/image'

interface BlinkCursorProps {
  width: number
  className?: string
}
export default function BlinkCursor({ width, className }: BlinkCursorProps) {
  return (
    <div className={`relative h-full w-${width}`}>
      <Image
        className={`animate-pulse ${className}`}
        layout='fill'
        objectFit='contain'
        objectPosition='center'
        src='/common/logo-mono-blue.svg'
        alt='Logo'
      />
    </div>
  )
}
