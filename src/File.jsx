import profile from './image/1710255470440-removebg-preview.png';
export default function File({setTab}){
   
    return(
       
    <div style={{ height: '77vh', width: '85vw', marginTop: '100px',}}>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <title>Nitin Ranganath</title>
            
            <div >
                <div >
                    <div >
                        <header>
                            <div className="name">
                                
                                <h1>CHANDRU Y</h1>
                                <h2>FULLSTACK WEB DEVELOPER</h2>
                               
                            </div>
                        </header>
                        <img src={profile} alt='profile' style={{width:'200px', height:'200px'}}></img>
                        <div className="bd">
                            <nav>
                                <button onClick={()=>setTab('Project')}>View Work</button>
                                <button onClick={()=>setTab('Email')}>Contact Me</button>
                            </nav>
                            <div className="lin">
                                <button onClick={()=>setTab('About')}>About</button>
                                <button onClick={()=>setTab('File')}>home</button>
                                
                                <button onClick={()=>setTab('Skill')}>skills</button>
                                <button onClick={()=>setTab('GitHub')}>github</button>
                                <button onClick={()=>setTab('Blog')}>blog </button>
                            </div>
                            <p onClick={()=>setTab('Work')} style={{color:"yellowgreen"}}>Open project wokspace</p>
                           
                        </div>
                       
                    </div>
                    <p>developed using React js</p>
                </div>
            </div>
        </div>
    

    );
}
