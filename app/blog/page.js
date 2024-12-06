import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "First Blog Post",
      description: "This is the description for the first blog post. Here you can add a longer description that will be truncated after 3 lines.",
      image: "/images/blog1.jpg",
      slug: "first-blog",
      date: "Dec 6, 2023",
      author: "John Doe",
      readTime: "5 min read"
    },
   
    {
        id: 2,
        title: "Second Blog Post",
        description: "This is the description for the second blog post. Here you can add a longer description that will be truncated after 3 lines.",
        image: "/images/blog2.jpg",
        slug: "second-blog",
        date: "Dec 5, 2023",
        author: "Jane Smith",
        readTime: "3 min read"
      },
      {
        id: 2,
        title: "Second Blog Post",
        description: "This is the description for the second blog post. Here you can add a longer description that will be truncated after 3 lines.",
        image: "/images/blog2.jpg",
        slug: "third-blog",
        date: "Dec 5, 2023",
        author: "Jane Smith",
        readTime: "3 min read"
      }

     
  ]

  return (
    
         <div className="container mx-auto p-4">
      {/* Main heading for the blog section */}
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      
      {/* Grid layout for blog posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="rounded-lg shadow-md overflow-hidden  dark:border-2">
            {/* Blog post image */}
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
            
            {/* Blog post content */}
            <div className="p-4">
              {/* Blog post title */}
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              
              {/* Blog post description */}
              <p className=" mb-4">{blog.description}</p>
              
              {/* Blog post author and date */}
              <div className="text-sm  mb-4">
                <span>By {blog.author}</span> | <span>{new Date(blog.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
              </div>
              
              {/* Link to the full blog post */}
              <Link href={`/blogpost/${blog.slug}`} className={buttonVariants({ variant: "outline" })}>Click here</Link>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Blog