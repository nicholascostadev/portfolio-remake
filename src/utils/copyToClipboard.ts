export const handleCopyToClipboard = (url: string) => {
  navigator.clipboard.writeText(url)
}
