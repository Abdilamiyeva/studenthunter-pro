export type MainProgram = {
  name: string
  Icon: ({className}: {className?: string}) => JSX.Element
}

export type Props = {
  program: MainProgram
}
