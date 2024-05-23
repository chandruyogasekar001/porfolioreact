import iconReact from './image/icons8-react-js-48.png';
import iconJs from './image/icons8-js-48.png';

import iconCss from './image/icons8-css-48.png';
import iconHtml from './image/icons8-html-48.png';
import NODE from './image/icons8-node-js-48.png';
import ex from './image/icons8-express-js-48.png';

import mdb from './image/icons8-mongo-db-48.png';
import xml from './image/icons8-xml-50.png';
import java from './image/icons8-java-48.png';
import sp from './image/icons8-spring-boot-48.png';
import hb from './image/HINEENATE.jpg';
import sl from './image/icons8-selenium-48.png';
import ng from './image/TESTNG.jpg';
export default function Skill(){
    return(
      <div style={{ height: '77vh', width: '85vw',marginTop:'50px'}}>
        
        <title>Skills</title>
        
        <div className="containers">
          
          <div className="skills">
            <div className="skill">
              <img src={iconHtml} alt="HTML" />
              <p className='n'>HTML</p>
            </div>
            <div className="skill">
              <img src={iconCss} alt="CSS" />
              <p className='n'>CSS</p>
            </div>
            <div className="skill">
              <img src={iconJs} alt="JavaScript" />
              <p className='n'>JavaScript</p>
            </div>
            
            <div className="skill">
              <img src={iconReact} alt="JavaScript" />
              <p className='n'>React</p>
            </div>
           
          
          <div className="skills">
            <div className="skill">
              <img src={NODE} alt="HTML" />
              <p className='n'>node js</p>
            </div>
            <div className="skill">
              <img src={ex} alt="CSS" />
              <p className='n'>express js</p>
            </div>
            <div className="skill">
              <img src={mdb} alt="JavaScript" />
              <p className='n'>MongoDB</p>
            </div>
            {/* Add more skills as needed */}
            <div className="skill">
              <img src={xml} alt="JavaScript" />
              <p className='n'>XML</p>
            </div>
            <div className="skill">
              <img src={java} alt="JavaScript" />
              <p className='n'>Java</p>
            </div>
          </div>
          <div className="skills">
            <div className="skill">
              <img src={sl} alt="HTML" />
              <p className='n'>Selenium</p>
            </div>
            <div className="skill">
              <img src={sp} alt="CSS" />
              <p className='n'>spring</p>
            </div>
            <div className="skill">
              <img src={hb} alt="JavaScript" />
              <p className='n'>hibernate</p>
            </div>
            <div className="skill">
              <img src={ng} alt="JavaScript" />
              <p className='n'>testNG</p>
            </div>
            <div className="skill">
              <img src={java} alt="JavaScript" />
              <p className='n'>swing</p>
            </div>
            {/* Add more skills as needed */}
            </div>
          </div>
        </div>
      </div>
      
    );
}