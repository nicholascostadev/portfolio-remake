import classNames from "classnames"

type ContainerProps = {
  children: React.ReactNode
  className: string
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={classNames("w-[1200px] max-w-full mx-auto", className)}>
      {children}
    </div>
  )
}
