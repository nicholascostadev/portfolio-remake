import Image from 'next/image'

export const AboutMe = () => {
  return (
    <div
      className="flex justify-center items-center h-screen pt-20 md:pt-0"
      id="about-me"
    >
      <div className="flex gap-20 flex-col md:flex-row">
        <div>
          <h4 className="text-4xl border-b border-b-slate-100 dark:border-b-slate-700 mb-4 pb-2">
            About Me
          </h4>
          <p className="max-w-[500px] text-xl">
            Hi, I&apos;m Nicholas 👋, a Brazilian Web Developer, experience with
            HTML, CSS, Javascript and TypeScript, mainly using React. I&apos;m
            passionate about coding and a coffee lover ☕. If you want to
            contact me, I&apos;d be happy to hear you.
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
    </div>
  )
}
