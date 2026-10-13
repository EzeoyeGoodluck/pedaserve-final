import React, { useState } from 'react';
import { ARTICLES } from '../data/mockData';
import SEOHead from '../components/SEOHead';

interface ArticleDetailPageProps {
  articleId: string;
  onNavigate: (path: string, articleId?: string) => void;
}

export default function ArticleDetailPage({ articleId, onNavigate }: ArticleDetailPageProps) {
  const article = ARTICLES.find((a) => a.slug === articleId || a.id === articleId) || ARTICLES[0];
  const [commentName, setCommentName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState<Array<{ name: string; date: string; text: string }>>([]);
  const [commentSuccess, setCommentSuccess] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentName || !commentText) return;
    setComments((prev) => [
      ...prev,
      {
        name: commentName,
        date: 'Just now',
        text: commentText
      }
    ]);
    setCommentName('');
    setCommentText('');
    setCommentSuccess(true);
  };

  const relatedArticles = ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  // Schema.org NewsArticle & BreadcrumbList structured data
  const articleSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'NewsArticle',
        'headline': article.title,
        'description': article.summary,
        'image': [article.coverImage],
        'datePublished': '2025-10-24T07:00:00+01:00',
        'dateModified': '2025-10-24T07:42:00+01:00',
        'author': {
          '@type': 'Person',
          'name': article.author.name,
          'jobTitle': article.author.role
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'Pedaserve',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://pedaserve.com/images/logo.png'
          }
        },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': `https://pedaserve.com/insights/${article.slug}`
        }
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://pedaserve.com'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Daily Insights',
            'item': 'https://pedaserve.com/#insights'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': article.title,
            'item': `https://pedaserve.com/insights/${article.slug}`
          }
        ]
      }
    ]
  };

  return (
    <article className="flex flex-col w-full bg-background min-h-screen">
      <SEOHead
        title={`${article.title} | Pedaserve Daily Insights`}
        description={article.summary}
        ogType="article"
        ogImage={article.coverImage}
        canonicalUrl={`https://pedaserve.com/insights/${article.slug}`}
        publishedTime="2025-10-24T07:00:00+01:00"
        author={article.author.name}
        keywords={article.tags}
        schemaData={articleSchema}
      />

      {/* Top Breadcrumb & Article Header */}
      <section className="w-full bg-surface-container-low py-6 sm:py-8 px-4 sm:px-6 lg:px-12 border-b border-surface-container-high">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 font-body-sm text-[12px] sm:text-[13px] text-on-surface-variant">
            <button onClick={() => onNavigate('home')} className="hover:text-on-surface transition-colors cursor-pointer">
              Home
            </button>
            <span>/</span>
            <button onClick={() => onNavigate('daily-insights-and-blog')} className="hover:text-on-surface transition-colors cursor-pointer">
              Daily Insights &amp; Blog
            </button>
            <span>/</span>
            <span className="text-on-surface font-semibold truncate max-w-xs">{article.categoryLabel}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="px-2.5 sm:px-3 py-1 rounded bg-secondary-container text-primary font-label-caps text-label-caps uppercase font-bold text-[11px] sm:text-[12px]">
              {article.categoryLabel}
            </span>
            <span className="text-on-surface-variant font-body-sm text-[12px] sm:text-[13px] flex items-center gap-1">
              <span className="material-symbols-outlined text-[15px] text-secondary">calendar_today</span>
              {article.date}
            </span>
            <span className="text-on-surface-variant font-body-sm text-[13px]">•</span>
            <span className="text-on-surface-variant font-body-sm text-[12px] sm:text-[13px] flex items-center gap-1">
              <span className="material-symbols-outlined text-[15px]">schedule</span>
              {article.readTime}
            </span>
          </div>

          <h1 className="font-headline-xl text-2xl sm:text-3xl lg:text-headline-xl font-bold text-on-surface tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="font-body-lead text-base sm:text-body-lead text-on-surface-variant leading-relaxed">
            {article.subtitle}
          </p>

          {/* Author Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-surface-container-high">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary-container text-secondary-container flex items-center justify-center font-bold text-[15px] sm:text-[16px]">
                {article.author.avatarInitials}
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-[15px] sm:text-[16px] font-bold text-on-surface">{article.author.name}</span>
                <span className="font-body-sm text-[12px] sm:text-[13px] text-on-surface-variant">{article.author.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setBookmarked(!bookmarked)}
                className={`h-10 px-3.5 sm:px-4 rounded-lg flex items-center gap-1.5 font-label-button text-[12px] sm:text-[13px] font-semibold transition-colors cursor-pointer ${
                  bookmarked ? 'bg-secondary-container text-primary' : 'bg-surface-container hover:bg-surface-container-high text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {bookmarked ? 'bookmark_added' : 'bookmark_add'}
                </span>
                <span>{bookmarked ? 'Saved' : 'Bookmark'}</span>
              </button>

              <button
                onClick={() => {
                  if (navigator.clipboard) {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Article link copied to clipboard!');
                  }
                }}
                className="h-10 px-3.5 sm:px-4 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center gap-1.5 font-label-button text-[12px] sm:text-[13px] font-semibold transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">share</span>
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body Content */}
      <section className="w-full py-8 sm:py-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          {/* Cover Media */}
          <div className="relative w-full h-[240px] sm:h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg border border-outline-variant/30">
            <img className="w-full h-full object-cover" src={article.coverImage} alt={article.title} />
            <div className="absolute bottom-3 left-4 bg-primary-container/80 backdrop-blur-md px-3 py-1 rounded text-on-primary font-body-sm text-[11px] sm:text-[12px]">
              Pedaserve Strategic Monograph Series
            </div>
          </div>

          {/* Key Takeaways Callout */}
          <div className="p-6 rounded-2xl bg-secondary-container/15 border border-secondary-container/40 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-secondary font-headline-sm text-[16px] font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[20px]">lightbulb</span>
              Executive Takeaways
            </div>
            <ul className="flex flex-col gap-2 font-body-md text-on-surface">
              {article.keyTakeaways.map((takeaway, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[18px] text-secondary shrink-0 mt-1">check_circle</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Text Paragraphs */}
          <div className="prose max-w-none text-on-surface font-body-md text-body-md space-y-6 leading-relaxed">
            {article.content.map((paragraph, index) => (
              <p key={index} className="text-body-md leading-relaxed text-on-surface/90">
                {paragraph}
              </p>
            ))}

            {/* Strategic Quote Break */}
            <div className="my-8 p-6 rounded-xl bg-surface-container-low border-l-4 border-secondary flex flex-col gap-2">
              <blockquote className="font-headline-sm text-[19px] italic font-semibold text-on-surface">
                “In 2026, competitive moats are no longer established solely by physical footprint or balance sheet size, but by the velocity at which an institution publishes and protects its authoritative knowledge.”
              </blockquote>
              <span className="font-body-sm text-[12px] text-on-surface-variant uppercase tracking-wider font-bold">
                — {article.author.name}, {article.author.role}
              </span>
            </div>

            <h3 className="font-headline-lg text-2xl font-bold text-on-surface pt-4">
              Operational Recommendations for Regional Directorate Boards
            </h3>
            <p>
              When initiating corporate overhaul across your marketing, editorial, and technological assets, begin with a baseline crawl inspection. Ensure your subsidiaries do not compete against each other for overlapping keyword entities. Structure unified canonical records and establish weekly editorial councils that turn internal corporate memos into public thought leadership.
            </p>
          </div>

          {/* Article Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-surface-container-high">
            <span className="font-label-caps text-label-caps text-on-surface-variant font-bold uppercase tracking-wider">
              Verticals:
            </span>
            {article.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded bg-surface-container text-on-surface font-body-sm text-[12px] font-medium"
              >
                #{t}
              </span>
            ))}
          </div>

          {/* Author Bio Box */}
          <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col sm:flex-row items-center gap-5 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-primary-container text-secondary-container flex items-center justify-center font-bold text-[22px] shrink-0">
              {article.author.avatarInitials}
            </div>
            <div className="flex flex-col gap-1 text-center sm:text-left">
              <h4 className="font-headline-sm text-[17px] font-bold text-on-surface">{article.author.name}</h4>
              <span className="font-body-sm text-[13px] text-secondary font-semibold">{article.author.role}</span>
              <p className="font-body-sm text-[13px] text-on-surface-variant mt-1">
                Leads executive consulting mandates in Port Harcourt, Lagos, and international jurisdictions, specializing in enterprise strategy, publishing, and algorithmic authority.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact-us')}
              className="h-10 px-4 rounded-lg bg-secondary-container hover:bg-secondary text-primary font-label-button text-[13px] font-bold shrink-0 transition-colors"
            >
              Consult Author
            </button>
          </div>

          {/* Interactive Comments & Discussions */}
          <div className="flex flex-col gap-6 pt-8 border-t border-surface-container-high">
            <div className="flex items-center justify-between">
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                Executive Discussion ({comments.length})
              </h3>
              <span className="font-label-caps text-[11px] text-on-surface-variant uppercase font-semibold">
                Peer Moderated
              </span>
            </div>

            {/* Existing Comments */}
            <div className="flex flex-col gap-4">
              {comments.map((comment, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-[14px] font-bold text-on-surface">{comment.name}</span>
                    <span className="font-body-sm text-[12px] text-on-surface-variant">{comment.date}</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {comment.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Leave a Comment Form */}
            <form onSubmit={handleCommentSubmit} className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-4">
              <h4 className="font-headline-sm text-[16px] font-bold text-on-surface">Contribute Strategic Perspective</h4>
              {commentSuccess && (
                <div className="p-3 rounded-lg bg-secondary-container/20 text-secondary font-body-sm text-[13px] font-semibold">
                  Contribution published to the executive forum.
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Full Name & Title"
                  required
                  value={commentName}
                  onChange={(e) => setCommentName(e.target.value)}
                  className="h-11 px-3.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none border border-outline-variant/30"
                />
              </div>
              <textarea
                placeholder="Share your perspective or query for the Pedaserve editorial board..."
                rows={3}
                required
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="w-full p-3.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none border border-outline-variant/30"
              ></textarea>
              <button
                type="submit"
                className="w-fit h-11 px-6 rounded-lg bg-primary hover:bg-surface-tint text-on-primary font-label-button text-[14px] font-bold transition-colors cursor-pointer"
              >
                Post Contribution
              </button>
            </form>
          </div>

          {/* Related Articles Rail */}
          <div className="pt-8 border-t border-surface-container-high flex flex-col gap-6">
            <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
              Next Daily Strategic Briefings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => {
                    onNavigate('article', rel.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-3 cursor-pointer group"
                >
                  <div className="flex flex-col gap-2">
                    <span className="font-label-caps text-[10px] uppercase font-bold text-secondary">
                      {rel.categoryLabel}
                    </span>
                    <h4 className="font-headline-sm text-[15px] font-bold text-on-surface group-hover:text-secondary transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                  </div>
                  <span className="font-body-sm text-[12px] text-on-surface-variant flex items-center gap-1 font-medium">
                    Read Analysis <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
