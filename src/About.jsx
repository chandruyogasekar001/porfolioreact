import './style/abt.css';

export default function About(){
    return(
      <div style={{ height: '77vh', width: '85vw', marginTop: '100px',color:'white'}}>
        
        <title>About Myself</title>
      
        <div className="containera">
          <div className="about-me">
            <h1>About Me</h1>
            <p>
              Hello! My name is CHANDRU Y. I am a FULL STACK WEB DEVELOPER. I enjoy
              CREATING APPS AND I LOVE SOLVING PROGRAMS.
            </p>
          </div>
          <div className="interests">
            <h2>Interests</h2>
            <p>app development</p>
            <p>Art works</p>
            <p>personal fitness</p>
          </div>
         
          <div className="collage">
            <h2>Collage</h2>
            <p>BTECH-IT 2019-2023</p>
            <p>sri shakthi institute of engineering and technology</p>
          </div>
          <div className="certificate">
            <h2>Certificates</h2>
            <p>
              -&gt;FULL STACK DEVELOPER IN MERN STACK march 2024- June 2024 at KGiSL
              Micro collage .<br />
              -&gt;SELINIUM AND AUTOMATED TESTING,September 2022 – November 2022 at
              Red lock technologies .<br />
              -&gt;CORE JAVA/J2EE/ADV JAVA,,June 2019September 2019 at Refinement
              software solutions.
              <br />
              -&gt;META FRONT END DEVELOPER IN COURSERA .<br />
            </p>
            {/* Add more certificate images as needed */}
          </div>
          
        </div>
      </div>
      
    );
}