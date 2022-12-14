export async function GET() {
  const ALL_POSTS = import.meta.glob("../*.md")
  const ITERABLE_FILES = Object.entries(ALL_POSTS)
  const POSTS = await Promise.all(ITERABLE_FILES.map(async ([path, resolver]) => {
    const { metadata } = await resolver()
    const postpath = path.slice(2, -3)

    return {
      meta: metadata,
      path: postpath
    }
  })

)

const SORTED_POSTS = POSTS.sort((a, b) => {
  return new Date(b.meta.date) - new Date(a.meta.date)
})

  return {
    body: SORTED_POSTS
  }

}
