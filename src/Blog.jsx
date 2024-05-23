import './style/blg.css';

export default function Blog(){
    return(
      <div style={{ height: '77vh', width: '85vw', marginTop: '100px',}}>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Recent Blog Posts</title>
        <link rel="stylesheet" href="styles.css" />
        
        <div className="containerb">
          <h1 style={{ color: 'white'}}>soon updating blog posts</h1>
          <div className="cards">
            <div className="card">
              <h2>Blog Post 1</h2>
              <p>This is a brief summary of Blog Post 1.</p>
              <a href="#">Read more</a>
            </div>
            <div className="card">
              <h2>Blog Post 2</h2>
              <p>This is a brief summary of Blog Post 2.</p>
              <a href="#">Read more</a>
            </div>
            <div className="card">
              <h2>Blog Post 3</h2>
              <p>This is a brief summary of Blog Post 3.</p>
              <a href="#">Read more</a>
            </div>
            <div className="card">
              <h2>Blog Post 3</h2>
              <p>This is a brief summary of Blog Post 3.</p>
              <a href="#">Read more</a>
            </div>
            <div className="card">
              <h2>Blog Post 3</h2>
              <p>This is a brief summary of Blog Post 3.</p>
              <a href="#">Read more</a>
            </div>
            <div className="card">
              <h2>Blog Post 3</h2>
              <p>This is a brief summary of Blog Post 3.</p>
              <a href="#">Read more</a>
            </div>
            {/* Add more cards as needed */}
          </div>
        </div>
      </div>
      
    );
}