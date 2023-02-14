import Image from 'next/image'

export const AboutMe = () => {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center gap-20 py-20 md:py-0"
      id="about-me"
    >
      <div>
        <h3 className="mb-4 border-b border-b-slate-100 pb-2 text-4xl dark:border-b-slate-700">
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
