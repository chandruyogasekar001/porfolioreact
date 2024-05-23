import './style/button.css'
export default function NavTab({setTab}){
    return(
<div className="tab-tab">

<button class="tab y custom-button" onClick={()=>setTab('File')}  style={{ color: 'aliceblue' }} >Home.jsx </button>
<button  class="tab y custom-button" onClick={()=>setTab('About')} style={{ color: 'aliceblue' }}>About.html</button>
<button class="tab y custom-button" onClick={()=>setTab('Skill')} style={{ color: 'aliceblue' }} > skills.jsx</button>
<button  class="tab y custom-button" onClick={()=>setTab('Project')} style={{ color: 'aliceblue' }}>projects.js</button>
<button class="tab y custom-button" onClick={()=>setTab('Github')} style={{ color: 'aliceblue' }} >github.md</button>
<button class="tab y custom-button" onClick={()=>setTab('Blog')} style={{ color: 'aliceblue' }}>blog.json</button>
<button  class="tab y custom-button" onClick={()=>setTab('Work')} style={{ color: 'aliceblue' }}>App.js</button>
<button class="tab y custom-button" onClick={()=>setTab('Email')} style={{ color: 'aliceblue' }} >contact.css</button>

   </div>

    );
}