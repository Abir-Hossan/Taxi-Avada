const posts = [
  {
    title: "Welcome to Avada Taxi",
    author: "by admin",
    date: "January 18th, 2020",
    cat: "General",
  },
  {
    title: "The Benefits of Prebooking",
    author: "by admin",
    date: "November 10th, 2020",
    cat: "Services",
  },
];

export default function Articles() {
  return (
    <section id="news" className="ta-section ta-section-white">
      <div className="container ta-container">
        <h2 className="ta-articles-title text-center">Recent Articles</h2>

        <div className="row g-4 mt-4">
          {posts.map((p) => (
            <div className="col-md-6" key={p.title}>
              <article className="ta-article-card">
                <div className="ta-article-img" />
                <div className="ta-article-body">
                  <h3 className="ta-article-h">{p.title}</h3>
                  <div className="ta-article-meta">
                    {p.author} | {p.date} | {p.cat}
                  </div>
                  <p className="ta-article-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque sed nisi ut tellus tincidunt tempus. Quis eu
                    felis et neque dignissim ultrices vitae quis tellus.
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <button className="btn ta-btn ta-btn-blog">
            READ MORE ON OUR BLOG
          </button>
        </div>
      </div>
    </section>
  );
}
