import './style/prj.css';
export default function Project(){
    return (
      <div style={{ height: '77vh', width: '85vw', marginTop: '100px',}}>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Stuff I've Built So Far</title>
        
        
        <section className="projects">
          <article
            style={{
              backgroundImage: 'url("icons8-website-50.png")',
              width: 200,
              height: 200,
              backgroundSize: "cover",
            }}
            className="project-card"
          >
            <h3>Music</h3>
            <p>A platform for listen music.</p>
            <a href="#">Live Demo</a>
            <div className="tech-stack">
            <span>React</span>
              <span>saavan api</span>
              
              
            </div>
            <p>updated soon</p>
          </article>
          <article
            style={{
              backgroundImage: 'url("icons8-website-50.png")',
              width: 200,
              height: 200,
              backgroundSize: "cover",
            }}
            className="project-card"
          >
            <h3>Resume builder</h3>
            <p>A platform to build resume.</p>
            <a href="https://chandruyogasekar001.github.io/resumebuilder/" target='blank'>Live Demo</a>
            <div className="tech-stack">
            <span>html|css|js</span>
              <span>simple websight</span>
              
              
            </div>
            <p>updated</p>
          </article>
          <article
            style={{
              backgroundImage: 'url("icons8-website-50.png")',
              width: 200,
              height: 200,
              backgroundSize: "cover",
            }}
            className="project-card"
          >
            <h3>Chatgpt</h3>
            <p>ai tools for search</p>
            <a href="#">Source Code</a>
            <div className="tech-stack">
            <span>React</span>
              <span>gemini api</span>
             
              
            </div>
            <p>updated soon</p>
          </article>
          <article
            style={{
              backgroundImage: 'url("icons8-website-50.png")',
              width: 200,
              height: 200,
              backgroundSize: "cover",
            }}
            className="project-card"
          >
            <h3>blog </h3>
            <p>A personal blog .</p>
            <a href="#">Live Demo</a>
            <div className="tech-stack">
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>React</span>
            </div>
            <p>updated soon</p>
          </article>
          <article
            style={{
              backgroundImage: 'url("icons8-website-50.png")',
              width: 200,
              height: 200,
              backgroundSize: "cover",
            }}
            className="project-card"
          >
            <h3>social media</h3>
            <p>a page to connect peoples.</p>
            <a href="#">Source Code</a>
            <div className="tech-stack">
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>React</span>
            </div>
            <p>updated soon</p>
          </article>
          
        </section>
      </div>
      
    );
}