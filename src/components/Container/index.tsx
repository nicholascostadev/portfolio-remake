import classNames from 'classnames'

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={classNames('mx-auto w-[1400px] max-w-full', className)}>
      {children}
    </div>
  )
}
