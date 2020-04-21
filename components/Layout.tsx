import HeadNav from "./HeadNav"

interface Props {
  children: JSX.Element
}

export default function Layout({ children }: Props) {
  return (
    <div className="layout-container">
      <header>
        <HeadNav />
      </header>
      <main>{children}</main>
    </div>
  )
}
