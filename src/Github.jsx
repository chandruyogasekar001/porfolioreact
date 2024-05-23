export default function Github(){
    return (
      <div style={{ height: '77vh', width: '85vw', marginTop: '100px',}}>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       
        
        <p>My GitHub Pages</p>
        <section className="projectsg">
          <article
            style={{
              backgroundImage: 'url("icons8-website-50.png")',
              width: 200,
              height: 200,
              backgroundSize: "cover",
            }}
            className="project-card">
            <h3>Music</h3>
            <p>A music straming platform using jiosaavan api</p>
            <a href="">
              View on GitHub Pages
            </a>{" "}
            <div className="tech-stack"></div>
            <p>updated soon</p>
          </article>
          <article
            style={{
              backgroundImage: 'url("icons8-website-50.png")',
              width: 200,
              height: 200,
              backgroundSize: "cover",
            }}
            className="project-card">
            <h3>Chatgpt</h3>
            <p>AI tools for search using gemini api</p>
            <a href="https://your-username.github.io/chatgpt-project/">
              View on GitHub Pages
            </a>{" "}
            <div className="tech-stack"></div>
            <p>updated soon</p>
          </article>
          <article
            style={{
              backgroundImage: 'url("icons8-website-50.png")',
              width: 200,
              height: 200,
              backgroundSize: "cover",
            }}
            className="project-card">
            <h3>Blog</h3>
            <p>A personal blog with admin dashboard</p>
            <a href="https://your-username.github.io/blog-project/">
              View on GitHub Pages
            </a>
            <p>updated soon</p>
          </article>
          <article
            style={{
              backgroundImage: 'url("icons8-website-50.png")',
              width: 200,
              height: 200,
              backgroundSize: "cover",
            }}
            className="project-card">
            <h3>Resume builder</h3>
            <p>a page to connect peoples.</p>
            <a href="https://github.com/chandruyogasekar001/resumebuilder">
              View on GitHub Pages
            </a>
            <div className="tech-stack"></div>
            <p><b>updated</b></p>
          </article>
        </section>
      </div>
      
    );
}