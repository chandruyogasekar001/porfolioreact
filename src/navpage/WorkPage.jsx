


import Bottom from '../Bottom';
import Top from '../Top';
import Nav from '../Nav';

import Filetab from '../Filetab';
import NavTab from '../NavTab';
import Work from '../Work';
export default function WorkPage({setTab}){
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
      <Work></Work>
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