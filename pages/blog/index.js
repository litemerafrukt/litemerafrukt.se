import Link from "next/link"

export default function Blog({ posts }) {
  return (
    <>
      <h2>Blog</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export function getStaticProps() {
  const posts = require.context("../blog", true, /\.mdx$/)

  const postsWithSlugs = posts.keys().map((post) => {
    const slug = post.replace(/^.*[\\/](.*)\.mdx$/, (_, slug) => slug)
    const metadata = require(`./${slug}.mdx`).metadata

    return {
      slug,
      title: metadata.title,
      date: metadata.date,
    }
  })

  return {
    props: { posts: postsWithSlugs },
  }
}
