// import './style/Work.css';
import res from './image/icons8-resume-48.png';
import music from './image/icons8-music-60.png';
import soc from './image/icons8-social-media-logo-48.png';
import blog from './image/icons8-google-blog-search-48.png';
export default function Work(){
    return(
      <div style={{ height: '77vh', width: '85vw', marginTop: '100px', backgroundColor: 'black'}}>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>App Icons</title>
        <link rel="stylesheet" href="style.css" />
        
        <header>
          <p>app space</p>
        </header>
        <main>
          <section className="app-grid">
            <div className="app-box">
              <span>
                <a href="https://chandruyogasekar001.github.io/resumebuilder/" target="blank">
                  <img
                    src={res}
                    alt="Girl in a jacket"
                    width={100}
                    height={100}
                  /><br></br>
                   </a>
                  {"resume build-uploaded"}
                 
              </span>
            </div>
            <div className="app-box">
              <span>
               
                  <img
                    src={music}
                    alt="Girl in a jacket"
                    width={100}
                    height={100}
                  /><br></br>
               {"music app"}
              </span>
            </div>
            <div className="app-box">
              <span>
              
                  <img
                    src={soc}
                    alt="Girl in a jacket"
                    width={100}
                    height={100}
                  /><br></br>
               {"social media app"}
              </span>
            </div>
            <div className="app-box">
              <span>
               
                  <img
                    src={blog}
                    alt="Girl in a jacket"
                    width={100}
                    height={100}
                  /><br></br>
               {"blog app"}
              </span>
            </div>
            
            
           
          
            
          </section>
        </main>
      </div>
      
    );
}