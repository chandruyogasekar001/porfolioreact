import { useState } from "react";
import Home from "./home";
import AboutPage from "./navpage/AboutPage";
import SkillPage from "./navpage/SkillPage";
import ProjectPage from "./navpage/ProjectPage";
import GithubPage from "./navpage/GithubPage";
import BlogPage from "./navpage/BlogPage";
import ContactPage from "./navpage/ContactPage";
import WorkPage from "./navpage/WorkPage";

export default function Main(){
    const [tab,setTab]=useState("File");
    

    
    switch (tab) {
        case 'File':
            return <Home setTab={setTab} ></Home>
        case 'About':
            return <AboutPage setTab={setTab}></AboutPage>
        case 'Skill':
            return <SkillPage setTab={setTab}></SkillPage>
        case 'Project':
            return <ProjectPage setTab={setTab}></ProjectPage>
        case 'Github':
                return <GithubPage setTab={setTab}></GithubPage>
        case 'Blog':
            return <BlogPage setTab={setTab}></BlogPage>
        case 'Work':
            return <WorkPage setTab={setTab}></WorkPage>  
        case 'Email':
            return <ContactPage setTab={setTab}></ContactPage>
        
    
        default:
            return <Home setTab={setTab}></Home>
            
    }
}