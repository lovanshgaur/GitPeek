import "./Card.css";
export default function userCard({ data }) {
  return (
    <>
        <div className="main-card">
          <div className="header-row">
            <div className="avatar-container">
              <img
                src={data.avatar_url}
                alt={data.name}
                className="avatar-img"
              />
              <div className="status-dot">
                <div className="pulse"></div>
              </div>
            </div>
            <div className="badge">
              Hireable: {data.isHirable ? "Yes" : "No"}
            </div>
          </div>

          <div className="name-block">
            {data.name ? <h1 className="name">{data.name}</h1> : <h1>{data.login}</h1>}
            <h3 className="username">{data.name ? data.login : ""}</h3>
            {data.bio ? <p className="bio">{data.bio}</p> : ""}
          </div>

          <div className="meta-grid">
            <div className="meta-item">
              <p className="label">Company</p>
              <p className="value">{data.company || "N/A"}</p>
            </div>

            <div className="meta-item">
              <p className="label">Location</p>
              <p className="value">{data.location || "N/A"}</p>
            </div>

            <div className="meta-item">
              <p className="label">Website</p>
              <a
                href={data.blog ? `https://${data.blog}` : "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="value"
              >
                {data.blog || "N/A"}
              </a>
            </div>

            <div className="meta-item">
              <p className="label">Twitter</p>
              <a
                href={
                  data.twitter_username
                    ? `https://twitter.com/${data.twitter_username}`
                    : "#"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="value"
              >
                {data.twitter_username ? `@${data.twitter_username}` : "N/A"}
              </a>
            </div>

            <div className="meta-item">
              <p className="label">Contact</p>
              <a
                href={data.email ? `mailto:${data.email}` : "#"}
                className="value"
              >
                {data.email || "Email Protected"}
              </a>
            </div>
          </div>

          <div className="stats-row">
            <div className="stat-box">
              <span className="stat-num">{data.public_repos}</span>
              <span className="label">Repos</span>
            </div>

            <div className="stat-box">
              <span className="stat-num">{data.followers}</span>
              <span className="label">Followers</span>
            </div>

            <div className="stat-box">
              <span className="stat-num">{data.following}</span>
              <span className="label">Following</span>
            </div>
          </div>

          <div className="system-meta">
            <span>CREATED: {data.created_at}</span>
          </div>

          <div className="ext-footer">
            <span>Last Updated: {data.updated_at}</span>
          </div>
        </div>
    </>
  );
}
