import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface PostData {
  slug: string
  title: string
  date: string
  excerpt: string
  author: string
  tags: string[]
  featured: boolean
  recommended: boolean
  coverImage?: string
  readingTime: string
  content?: string
  htmlContent?: string
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      slug: fileName.replace(/\.md$/, '')
    }
  })
}

export function getPostBySlug(slug: string): PostData {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  
  const { data, content } = matter(fileContents)
  
  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    author: data.author,
    tags: data.tags || [],
    featured: data.featured || false,
    recommended: data.recommended || false,
    coverImage: data.coverImage,
    readingTime: data.readingTime,
    content
  }
}

export async function getPostWithHtml(slug: string): Promise<PostData> {
  const post = getPostBySlug(slug)
  
  const processedContent = await remark()
    .use(html)
    .process(post.content || '')
  
  return {
    ...post,
    htmlContent: processedContent.toString()
  }
}

export function getAllPosts(): PostData[] {
  const slugs = getAllPostSlugs()
  const posts = slugs
    .map(({ slug }) => getPostBySlug(slug))
    .sort((a, b) => (a.date > b.date ? -1 : 1))
  
  return posts
}

export function getRecentPosts(limit: number = 3): PostData[] {
  return getAllPosts().slice(0, limit)
}

export function getRecommendedPosts(limit: number = 3): PostData[] {
  return getAllPosts()
    .filter(post => post.recommended)
    .slice(0, limit)
}

export function getFeaturedPosts(): PostData[] {
  return getAllPosts().filter(post => post.featured)
}
