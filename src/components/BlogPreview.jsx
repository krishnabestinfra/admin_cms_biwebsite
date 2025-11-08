import { Calendar, Clock, Eye, Heart, Share2 } from "lucide-react";
import "./BlogPreview.css";

const BlogPreview = ({ blogData }) => {
  const images = blogData.imageUrls
    .split(",")
    .map((url) => url.trim())
    .filter(Boolean);
  const coverImage = images[0];
  const tagList = blogData.tags
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

  // Generate table of contents from content headings
  const generateTOC = () => {
    const headings = blogData.content.match(/^#{2,3}\s+.+$/gm) || [];
    return headings.map((heading, index) => {
      const level = heading.match(/^#{2,3}/)?.[0].length || 2;
      const text = heading.replace(/^#{2,3}\s+/, "");
      return (
        <li key={index} className={level === 3 ? "indented" : ""}>
          <a
            href={`#${text.toLowerCase().replace(/\s+/g, "-")}`}
            className="toc-link"
          >
            {text}
          </a>
        </li>
      );
    });
  };

  const renderContent = () => {
    if (!blogData.content)
      return <p className="placeholder-text">Start writing your content...</p>;

    return blogData.content.split("\n").map((line, index) => {
      if (line.startsWith("### ")) {
        return <h3 key={index}>{line.replace("### ", "")}</h3>;
      } else if (line.startsWith("## ")) {
        return <h2 key={index}>{line.replace("## ", "")}</h2>;
      } else if (line.startsWith("- ")) {
        return <li key={index}>{line.replace("- ", "")}</li>;
      } else if (line.trim() === "") {
        return <br key={index} />;
      }
      return <p key={index}>{line}</p>;
    });
  };

  return (
    <article className="blog-preview">
      <div className="preview-card">
        {coverImage && (
          <div className="cover-image-container">
            <img
              src={coverImage}
              alt={blogData.title}
              className="cover-image"
            />
          </div>
        )}

        <div className="article-content">
          <header className="article-header">
            <div className="badge-container">
              <div className="badge badge-secondary">
                {blogData.category || "Uncategorized"}
              </div>
              {tagList.map((tag, index) => (
                <div key={index} className="badge badge-outline">
                  {tag}
                </div>
              ))}
            </div>

            <h1 className="article-title">
              {blogData.title || "Your Blog Title"}
            </h1>

            {blogData.introTitle && (
              <p className="intro-title">{blogData.introTitle}</p>
            )}

            <div className="author-meta">
              <div className="author-info">
                <div className="avatar">
                  {blogData.authorImage ? (
                    <img
                      src={blogData.authorImage}
                      alt={blogData.authorName}
                      className="avatar-image"
                    />
                  ) : (
                    <span className="avatar-fallback">
                      {blogData.authorName?.charAt(0) || "A"}
                    </span>
                  )}
                </div>
                <div>
                  <p className="author-name">
                    {blogData.authorName || "Author Name"}
                  </p>
                  <div className="author-details">
                    <span className="detail-item">
                      <Calendar className="detail-icon" />
                      {blogData.publishedDate}
                    </span>
                    <span className="detail-item">
                      <Clock className="detail-icon" />
                      {blogData.readTime} min read
                    </span>
                  </div>
                </div>
              </div>

              <div className="engagement-stats">
                <span className="stat-item">
                  <Eye className="stat-icon" />
                  {blogData.views}
                </span>
                <span className="stat-item">
                  <Heart className="stat-icon" />
                  {blogData.likes}
                </span>
                <button className="share-button">
                  <Share2 className="stat-icon" />
                </button>
              </div>
            </div>

            <div className="separator"></div>

            {blogData.summary && (
              <div className="summary-box">
                <h2 className="summary-title">Summary</h2>
                <p className="summary-text">{blogData.summary}</p>
              </div>
            )}

            {blogData.content && generateTOC().length > 0 && (
              <div className="toc-box">
                <h2 className="toc-title">Table of Contents</h2>
                <ul className="toc-list">{generateTOC()}</ul>
              </div>
            )}
          </header>

          <section className="article-body">{renderContent()}</section>

          <footer className="article-footer">
            {blogData.newsletterCta && (
              <div className="newsletter-cta">
                <h3 className="newsletter-title">Stay Updated</h3>
                <p className="newsletter-text">{blogData.newsletterCta}</p>
                <button className="button button-secondary button-lg">
                  Subscribe Now
                </button>
              </div>
            )}

            <div className="separator"></div>

            {blogData.recentBlogs && (
              <div>
                <h3 className="section-title">Recent Blogs</h3>
                <div className="content-box">
                  <p className="content-text">{blogData.recentBlogs}</p>
                </div>
              </div>
            )}

            {blogData.trendingNews && (
              <div>
                <h3 className="section-title">Trending News</h3>
                <div className="content-box">
                  <p className="content-text">{blogData.trendingNews}</p>
                </div>
              </div>
            )}

            {(blogData.ctaTitle ||
              blogData.ctaDescription ||
              blogData.ctaButtonText) && (
              <div className="cta-section">
                {blogData.ctaTitle && (
                  <h3 className="cta-title">{blogData.ctaTitle}</h3>
                )}
                {blogData.ctaDescription && (
                  <p className="cta-description">{blogData.ctaDescription}</p>
                )}
                {blogData.ctaButtonText && (
                  <button className="button button-secondary button-lg">
                    {blogData.ctaButtonText}
                  </button>
                )}
              </div>
            )}
          </footer>
        </div>
      </div>
    </article>
  );
};

export default BlogPreview;
