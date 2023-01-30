import Image from 'next/image'

export const AboutMe = () => {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen py-20 gap-20 md:py-0"
      id="about-me"
    >
      <div>
        <h3 className="text-4xl border-b border-b-slate-100 dark:border-b-slate-700 mb-4 pb-2">
          About Me
        </h3>
        <p className="text-xl">
          Hi, I&apos;m Nicholas 👋, a Brazilian Web Developer, experience with
          HTML, CSS, Javascript and TypeScript, mainly using React. I&apos;m
          passionate about coding and a coffee lover ☕. If you want to contact
          me, I&apos;d be happy to hear you.
        </p>
      </div>
      <div>
        <Image
          src="/assets/personal-images/me.jpg"
          alt="A picture of me"
          className="rounded-md shadow"
          width={300}
          height={300}
        />
      </div>
    </div>
  )
}
