import { useState } from "react";
import { FileText, Eye, Code, Sparkles } from "lucide-react";
import BlogPreview from "./BlogPreview";
import "./BlogGenerator.css";

const BlogGenerator = () => {
  const [blogData, setBlogData] = useState({
    likes: "0",
    publishedDate: new Date().toISOString().split("T")[0],
    updatedDate: new Date().toISOString().split("T")[0],
    category: "Technology",
    readTime: "5",
    views: "0",
    title: "",
    newsletterCta: "Subscribe to our newsletter for more insights!",
    introTitle: "",
    summary: "",
    content: "",
    recentBlogs: "",
    trendingNews: "",
    ctaTitle: "Ready to Take Action?",
    ctaDescription:
      "Explore more insights and elevate your knowledge with our curated resources.",
    ctaButtonText: "Get Started",
    imageUrls: "",
    authorName: "",
    authorImage: "",
    slug: "",
    metaTitle: "",
    metaDescription: "",
    keywords: "",
    densityTarget: "2",
    tags: "",
  });

  const [activeTab, setActiveTab] = useState("form");

  const handleInputChange = (field, value) => {
    setBlogData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const generateSlug = () => {
    const slug = blogData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    handleInputChange("slug", slug);
  };

  const copyMetadata = () => {
    const metadata = JSON.stringify(
      {
        title: blogData.metaTitle || blogData.title,
        description: blogData.metaDescription || blogData.summary,
        keywords: blogData.keywords,
        tags: blogData.tags,
        slug: blogData.slug,
        category: blogData.category,
      },
      null,
      2,
    );
    navigator.clipboard.writeText(metadata);
  };

  return (
    <div className="blog-generator">
      <div className="blog-generator-container">
        <div className="blog-generator-header">
          <div className="badge-container">
            <Sparkles className="badge-icon" />
            <span className="badge-text">AI-Powered Blog Generator</span>
          </div>
          <h1 className="main-title">Create SEO-Optimized Articles</h1>
          <p className="subtitle">
            Generate lovable, human-like blog content that connects emotionally
            with readers
          </p>
        </div>

        <div className="tabs-container">
          <div className="tabs-list">
            <button
              className={`tab-trigger ${activeTab === "form" ? "active" : ""}`}
              onClick={() => setActiveTab("form")}
            >
              <FileText className="tab-icon" />
              Input
            </button>
            <button
              className={`tab-trigger ${activeTab === "preview" ? "active" : ""}`}
              onClick={() => setActiveTab("preview")}
            >
              <Eye className="tab-icon" />
              Preview
            </button>
            <button
              className={`tab-trigger ${activeTab === "export" ? "active" : ""}`}
              onClick={() => setActiveTab("export")}
            >
              <Code className="tab-icon" />
              Export
            </button>
          </div>

          <div
            className={`tab-content ${activeTab === "form" ? "active" : ""}`}
          >
            <div className="form-content">
              <div className="card">
                <div className="card-header">
                  <h2 className="card-title">Basic Information</h2>
                  <p className="card-description">
                    Essential details about your blog article
                  </p>
                </div>
                <div className="card-content">
                  <div className="form-grid form-grid-2">
                    <div className="form-group">
                      <label htmlFor="title" className="label">
                        Title *
                      </label>
                      <input
                        id="title"
                        className="input"
                        placeholder="Enter your blog title (55-70 characters)"
                        value={blogData.title}
                        onChange={(e) =>
                          handleInputChange("title", e.target.value)
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="slug" className="label">
                        Slug
                      </label>
                      <div className="input-with-button">
                        <input
                          id="slug"
                          className="input"
                          placeholder="url-friendly-slug"
                          value={blogData.slug}
                          onChange={(e) =>
                            handleInputChange("slug", e.target.value)
                          }
                        />
                        <button
                          type="button"
                          className="button button-outline"
                          onClick={generateSlug}
                        >
                          Generate
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="introTitle" className="label">
                      Intro Title
                    </label>
                    <input
                      id="introTitle"
                      className="input"
                      placeholder="Catchy introduction title"
                      value={blogData.introTitle}
                      onChange={(e) =>
                        handleInputChange("introTitle", e.target.value)
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="summary" className="label">
                      Summary *
                    </label>
                    <textarea
                      id="summary"
                      className="textarea"
                      placeholder="Brief summary (140-160 characters for SEO)"
                      value={blogData.summary}
                      onChange={(e) =>
                        handleInputChange("summary", e.target.value)
                      }
                      rows={3}
                    />
                  </div>

                  <div className="form-grid form-grid-4">
                    <div className="form-group">
                      <label htmlFor="category" className="label">
                        Category
                      </label>
                      <input
                        id="category"
                        className="input"
                        placeholder="e.g., Technology"
                        value={blogData.category}
                        onChange={(e) =>
                          handleInputChange("category", e.target.value)
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="readTime" className="label">
                        Read Time (mins)
                      </label>
                      <input
                        id="readTime"
                        className="input"
                        type="number"
                        placeholder="5"
                        value={blogData.readTime}
                        onChange={(e) =>
                          handleInputChange("readTime", e.target.value)
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="views" className="label">
                        Views
                      </label>
                      <input
                        id="views"
                        className="input"
                        type="number"
                        placeholder="0"
                        value={blogData.views}
                        onChange={(e) =>
                          handleInputChange("views", e.target.value)
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="likes" className="label">
                        Likes
                      </label>
                      <input
                        id="likes"
                        className="input"
                        type="number"
                        placeholder="0"
                        value={blogData.likes}
                        onChange={(e) =>
                          handleInputChange("likes", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h2 className="card-title">SEO & Metadata</h2>
                  <p className="card-description">
                    Optimize your article for search engines
                  </p>
                </div>
                <div className="card-content">
                  <div className="form-group">
                    <label htmlFor="metaTitle" className="label">
                      Meta Title
                    </label>
                    <input
                      id="metaTitle"
                      className="input"
                      placeholder="SEO-friendly title (up to 60 characters)"
                      value={blogData.metaTitle}
                      onChange={(e) =>
                        handleInputChange("metaTitle", e.target.value)
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="metaDescription" className="label">
                      Meta Description
                    </label>
                    <textarea
                      id="metaDescription"
                      className="textarea"
                      placeholder="SEO description (150-160 characters)"
                      value={blogData.metaDescription}
                      onChange={(e) =>
                        handleInputChange("metaDescription", e.target.value)
                      }
                      rows={3}
                    />
                  </div>

                  <div className="form-grid form-grid-2">
                    <div className="form-group">
                      <label htmlFor="keywords" className="label">
                        Keywords
                      </label>
                      <input
                        id="keywords"
                        className="input"
                        placeholder="keyword1, keyword2, keyword3"
                        value={blogData.keywords}
                        onChange={(e) =>
                          handleInputChange("keywords", e.target.value)
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="tags" className="label">
                        Tags
                      </label>
                      <input
                        id="tags"
                        className="input"
                        placeholder="tag1, tag2, tag3"
                        value={blogData.tags}
                        onChange={(e) =>
                          handleInputChange("tags", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="densityTarget" className="label">
                      Keyword Density Target (%)
                    </label>
                    <input
                      id="densityTarget"
                      className="input"
                      type="number"
                      placeholder="2"
                      value={blogData.densityTarget}
                      onChange={(e) =>
                        handleInputChange("densityTarget", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h2 className="card-title">Content</h2>
                  <p className="card-description">
                    The main body of your article
                  </p>
                </div>
                <div className="card-content">
                  <div className="form-group">
                    <label htmlFor="content" className="label">
                      Blog Content *
                    </label>
                    <textarea
                      id="content"
                      className="textarea textarea-large"
                      placeholder="Write your amazing blog content here... Use H2, H3, bullet points as needed."
                      value={blogData.content}
                      onChange={(e) =>
                        handleInputChange("content", e.target.value)
                      }
                      rows={12}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="imageUrls" className="label">
                      Image URLs
                    </label>
                    <textarea
                      id="imageUrls"
                      className="textarea"
                      placeholder="Comma-separated image URLs (cover, inline images, thumbnails)"
                      value={blogData.imageUrls}
                      onChange={(e) =>
                        handleInputChange("imageUrls", e.target.value)
                      }
                      rows={2}
                    />
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h2 className="card-title">Author & Dates</h2>
                  <p className="card-description">
                    Author information and publication details
                  </p>
                </div>
                <div className="card-content">
                  <div className="form-grid form-grid-2">
                    <div className="form-group">
                      <label htmlFor="authorName" className="label">
                        Author Name
                      </label>
                      <input
                        id="authorName"
                        className="input"
                        placeholder="John Doe"
                        value={blogData.authorName}
                        onChange={(e) =>
                          handleInputChange("authorName", e.target.value)
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="authorImage" className="label">
                        Author Image URL
                      </label>
                      <input
                        id="authorImage"
                        className="input"
                        placeholder="https://..."
                        value={blogData.authorImage}
                        onChange={(e) =>
                          handleInputChange("authorImage", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="form-grid form-grid-2">
                    <div className="form-group">
                      <label htmlFor="publishedDate" className="label">
                        Published Date
                      </label>
                      <input
                        id="publishedDate"
                        className="input"
                        type="date"
                        value={blogData.publishedDate}
                        onChange={(e) =>
                          handleInputChange("publishedDate", e.target.value)
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="updatedDate" className="label">
                        Updated Date
                      </label>
                      <input
                        id="updatedDate"
                        className="input"
                        type="date"
                        value={blogData.updatedDate}
                        onChange={(e) =>
                          handleInputChange("updatedDate", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h2 className="card-title">Additional Content</h2>
                  <p className="card-description">
                    Related blogs, news, and CTAs
                  </p>
                </div>
                <div className="card-content">
                  <div className="form-group">
                    <label htmlFor="recentBlogs" className="label">
                      Recent Blogs
                    </label>
                    <textarea
                      id="recentBlogs"
                      className="textarea"
                      placeholder="List of recent blog titles/links"
                      value={blogData.recentBlogs}
                      onChange={(e) =>
                        handleInputChange("recentBlogs", e.target.value)
                      }
                      rows={3}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="trendingNews" className="label">
                      Trending News
                    </label>
                    <textarea
                      id="trendingNews"
                      className="textarea"
                      placeholder="List of trending news items"
                      value={blogData.trendingNews}
                      onChange={(e) =>
                        handleInputChange("trendingNews", e.target.value)
                      }
                      rows={3}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="ctaTitle" className="label">
                      Call to Action Title
                    </label>
                    <input
                      id="ctaTitle"
                      className="input"
                      placeholder="Ready to Take Action?"
                      value={blogData.ctaTitle}
                      onChange={(e) =>
                        handleInputChange("ctaTitle", e.target.value)
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="ctaDescription" className="label">
                      Call to Action Description
                    </label>
                    <textarea
                      id="ctaDescription"
                      className="textarea"
                      placeholder="Describe what readers should do next"
                      value={blogData.ctaDescription}
                      onChange={(e) =>
                        handleInputChange("ctaDescription", e.target.value)
                      }
                      rows={2}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="ctaButtonText" className="label">
                      Call to Action Button Text
                    </label>
                    <input
                      id="ctaButtonText"
                      className="input"
                      placeholder="Get Started"
                      value={blogData.ctaButtonText}
                      onChange={(e) =>
                        handleInputChange("ctaButtonText", e.target.value)
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="newsletterCta" className="label">
                      Newsletter CTA
                    </label>
                    <input
                      id="newsletterCta"
                      className="input"
                      placeholder="Subscribe to our newsletter..."
                      value={blogData.newsletterCta}
                      onChange={(e) =>
                        handleInputChange("newsletterCta", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="preview-button-container">
                <button
                  className="button button-primary button-lg"
                  onClick={() => setActiveTab("preview")}
                >
                  <Eye className="tab-icon" />
                  Preview Article
                </button>
              </div>
            </div>
          </div>

          <div
            className={`tab-content ${activeTab === "preview" ? "active" : ""}`}
          >
            <BlogPreview blogData={blogData} />
          </div>

          <div
            className={`tab-content ${activeTab === "export" ? "active" : ""}`}
          >
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">Export Metadata</h2>
                <p className="card-description">
                  Copy the JSON metadata for CMS import
                </p>
              </div>
              <div className="card-content">
                <pre className="export-pre">
                  <code>
                    {JSON.stringify(
                      {
                        title: blogData.metaTitle || blogData.title,
                        description:
                          blogData.metaDescription || blogData.summary,
                        keywords: blogData.keywords,
                        tags: blogData.tags,
                        slug: blogData.slug,
                        author: blogData.authorName,
                        category: blogData.category,
                        publishedDate: blogData.publishedDate,
                        updatedDate: blogData.updatedDate,
                        readTime: blogData.readTime,
                      },
                      null,
                      2,
                    )}
                  </code>
                </pre>
                <div className="separator"></div>
                <button
                  className="button button-primary"
                  style={{ width: "100%" }}
                  onClick={copyMetadata}
                >
                  Copy Metadata to Clipboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogGenerator;
