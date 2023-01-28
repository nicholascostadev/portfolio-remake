import Image from 'next/image'

export const Hero = () => {
  return (
    <div className="flex flex-col pt-20 lg:pt-0 lg:flex-row justify-center lg:justify-between gap-10 lg:gap-4 items-center h-[70vh]">
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-center md:text-left text-slate-800 dark:text-slate-100">
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
