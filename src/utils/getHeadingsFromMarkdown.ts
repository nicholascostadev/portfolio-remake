const regXHeader = /(?<flag>#{1,6})\s+(?<content>.+)/g

export const getHeadingsFromMarkdown = (postMD: string | null | undefined) =>
  Array.from((postMD ?? '').matchAll(regXHeader)).map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ({ groups: { flag, content } }: any) => ({
      heading: `h${flag.length}`,
      content,
    }),
  ) as {
    heading: string
    content: string
  }[]
