import StandardPage from '../components/StandardPage';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data';
import { ArrowRight } from 'lucide-react';

export default function Blog() {
  return (
    <StandardPage
      eyebrow="Insights"
      title="The JSB Blog"
      subtitle="Stories, tips, and ideas on wellness, stress-busting, and building happier communities."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BLOG_POSTS.map((post, i) => (
          <Link
            key={i}
            to="/blog"
            data-reveal
            className="group glass rounded-2xl overflow-hidden hover:border-accent-from/30 transition-colors block"
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src={`https://picsum.photos/seed/jsb${i}/600/400`}
                alt={post.title}
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-70 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 glass rounded-full px-3 py-1 text-[0.65rem] font-mono text-accent-from">
                {post.tag}
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-display font-bold text-white text-lg tracking-tight mb-2 group-hover:text-accent-from transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-3">{post.excerpt}</p>
              <div className="flex items-center gap-1 text-xs text-accent-from font-mono">
                Read more <ArrowRight size={12} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </StandardPage>
  );
}
