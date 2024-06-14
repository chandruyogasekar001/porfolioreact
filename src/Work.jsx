// import './style/Work.css';
import res from './image/icons8-resume-48.png';
import music from './image/icons8-music-60.png';
import soc from './image/icons8-social-media-logo-48.png';
import blog from './image/icons8-google-blog-search-48.png';
export default function Work(){
    return(
      <div style={{ height: '77vh', width: '85vw'}}>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>App Icons</title>
        <link rel="stylesheet" href="style.css" />
        
        <header>
          <p>app space</p>
        </header>
        <main>
              <div style={{ textAlign: 'center' }}>
     
      <iframe 
        src="https://dark-matter-web-space.vercel.app/" 
        style={{ width: '85vw', height: '70vh', border: 'none', marginTop: '10vh' }}
        title="Dark Matter Web Space"
      ></iframe>
    </div>
        </main>
      </div>
      
    );
}
