import iconfile from './image/file.svg';
import iconAbout from './image/icons8-about-me-50.png';
import iconSkill from './image/icons8-knowledge-50.png';
import iconProject from './image/icons8-code-50.png';
import iconGithub from './image/icons8-github-30.png';
import iconBlog from './image/icons8-pencil-26.png';
import iconWork from './image/icons8-website-50.png';
import iconEmail from './image/icons8-email-50 (1).png';
import iconSet from './image/icons8-settings-50.png';
import iconAccount from './image/icons8-account-50.png';
import './style/button.css'
export default function Nav({setTab}){
   
    return (
    
       
        <div class="nav">
        <img src={iconfile}  alt="css" class="tab custom-button"  width="25px" height="25px" onClick={()=>setTab('File')} />
        <img src={iconAbout} alt="css" class="tab custom-button"  width="25px" height="25px" onClick={()=>setTab('About')}/>
        <img src={iconSkill} alt="css" class="tab custom-button"  width="25px" height="25px" onClick={()=>setTab('Skill')}/>
        <img src={iconProject} alt="css" class="tab custom-button"  width="25px" height="25px" onClick={()=>setTab('Project')}/>
        <img src={iconGithub} alt="css" class="tab custom-button"  width="25px" height="25px" onClick={()=>setTab('Github')}/>
        
        <img src={iconBlog} alt="css" class="tab custom-button"  width="25px" height="25px" onClick={()=>setTab('Blog')}/>
        <img src={iconWork} alt="css" class="tab custom-button"  width="25px" height="25px" onClick={()=>setTab('Work')}/>
        <img src={iconEmail}  alt="css" class="tab custom-button"  width="25px" height="25px" onClick={()=>setTab('Email')}/>
        
        <img src={iconSet}  alt="css" class="tab ll custom-button"  width="25px" height="25px" onClick={()=>setTab('File')}/>
        <img src={iconAccount}  alt="css" class="tab l custom-button"  width="25px" height="25px" onClick={()=>setTab('About')}/>
        </div>
        
    );
}