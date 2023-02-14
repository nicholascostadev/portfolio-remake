import Image from 'next/image'

export const Hero = () => {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center gap-10 pt-20 lg:flex-row lg:justify-between lg:gap-4 lg:pt-0">
      <h1 className="text-center text-4xl text-slate-800 dark:text-slate-100 sm:text-5xl md:text-left md:text-6xl">
        I can make your brilliant <br /> ideas come true
      </h1>
      <Image
        src="/assets/illustrations/me.svg"
        alt=""
        className="min"
        width={500}
        height={500}
      />
    </div>
  )
}
