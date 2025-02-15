import BlinkCursor from '@/components/BlinkCursor'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-4'>
      <h1 className='text-5xl font-dmSerifText'>Hello and Welcome to my Portfolio</h1>
      <span className='flex items-center gap-2'>
        <p className='font-geistMono'>I am currently working on my portfolio. It will be available soon</p>
        <BlinkCursor width={3} />
      </span>
    </div>
  )
}
