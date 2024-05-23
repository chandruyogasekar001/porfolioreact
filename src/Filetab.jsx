
import iconReact from './image/icons8-react-js-48.png';
import iconJs from './image/icons8-js-48.png';
import iconJson from './image/icons8-json-file-50.png';
import iconCss from './image/icons8-css-48.png';
import iconHtml from './image/icons8-html-48.png';
import './style/button.css'
export default function Filetab({setTab}) {
    return (


        <div style={{width: '200px'}} class="file spn">
    
        <p class="clickable-text" >PORTFOLIO</p>

<div class="clk">
<div class="additional-text" id="additionalText1">
  <span  onClick={()=>setTab('File')} style={{ fontSize: '12px' }}><img src={iconReact} alt="css" height="15px" width="15px" />Home.jsx <span style={{ color: '#24292e' }}>..</span></span>
</div>
<div class="additional-text" id="additionalText2">
  <span onClick={()=>setTab('About')} style={{ fontSize: '12px' }}><img src={iconHtml} height="15px" alt="css" width="15px"/>About.html </span>
</div>
<div class="additional-text" id="additionalText3">
  <span onClick={()=>setTab('Skill')} style={{ fontSize: '12px' }}><img src={iconReact} alt="css" height="15px" width="15px"/>skills.jsx<span style={{ color: '#24292e' }}>......</span> </span>
</div> 
<div class="additional-text" id="additionalText4">
  <span onClick={()=>setTab('Project')} style={{ fontSize: '12px' }}><img src={iconJs} alt="css" height="15px" width="15px"/>projects.js </span>
</div>
<div class="additional-text" id="additionalText5">
  <span onClick={()=>setTab('Github')} style={{ fontSize: '12px' }}><img src={iconJson} alt="css" height="15px" width="15px"/>github.md </span>
</div>
<div class="additional-text" id="additionalText3">
    <span onClick={()=>setTab('Blog')} style={{ fontSize: '12px' }}> <img src={iconJson} alt="css" height="15px" width="15px"/>blog.json<span style={{ color: '#24292e' }}>..</span></span>
  </div>
  <div class="additional-text" id="additionalText4">
    <span onClick={()=>setTab('Work')} style={{ fontSize: '12px' }}><img src={iconJs} alt="css" height="15px" width="15px"/>App.js<span style={{ color: '#24292e' }}>........</span> </span>
  </div>
  <div class="additional-text" id="additionalText5">
    <span onClick={()=>setTab('Email')}  style={{ fontSize: '12px' }}><img src={iconCss} alt="css" height="15px" width="15px"/>contact.css</span>
  </div>
 
  </div>
    </div>
    );
}