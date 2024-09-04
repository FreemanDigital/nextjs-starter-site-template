// /pages/blog/[slug].tsx
// individual blog post page that takes a slug parameter
// generate static params for static generation
// render content using react markdown
import { blogPosts } from '../../data/blogData';
import ReactMarkdown from 'react-markdown';

interface BlogPost {
    title: string;
    slug: string;
    excerpt: string;
    publishDate: string;
    content: string;
    }

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className='prose pt-16' style={{
        paddingLeft: 'clamp(1rem, 3vw, 5rem)',
        paddingRight: 'clamp(1rem, 3vw, 5rem)',
        
    }}>
        <h1>{post.title}</h1>
        <p>{post.author}</p>
        <p>{post.publishDate}</p>
        <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
}

export async function getStaticParams() {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}