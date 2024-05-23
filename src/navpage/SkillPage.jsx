
import Skill from '../Skill';

import Bottom from '../Bottom';
import Top from '../Top';
import Nav from '../Nav';

import Filetab from '../Filetab';
import NavTab from '../NavTab';
export default function SkillPage({setTab}){
    return(
    
        <html style={{ background: 'black'}}>
        <head></head>
        <body>
        <>
        <Top></Top>
        </>
   
        <div class="cont">
        <>
         <Nav setTab={setTab}></Nav>
         </>
        <>
        <Filetab setTab={setTab}></Filetab>
        </>

    <div className='tt'/>
    <>
    <NavTab setTab={setTab}></NavTab>
    </>
    <div class="tabswift">
    <>
    <Skill></Skill>
    </>   
    </div>

    </div>
   
    
    
    
    <>
    <Bottom></Bottom>
    </>
    
    </body>
     </html>
    );
}