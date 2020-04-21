import Link from "next/link"

export default function SiteNav() {
  return (
    <>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/code">
        <a>Code</a>
      </Link>
      <Link href="/me">
        <a>About Me</a>
      </Link>
      <Link href="/about">
        <a>About the site</a>
      </Link>
    </>
  )
}
