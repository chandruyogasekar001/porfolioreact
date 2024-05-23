
import iconTick from './image/icons8-tick-50.png';
import iconLive from './image/icons8-live-24.png';
import iconPlay from './image/icons8-play-50.png';
export default function Bottom(){
            return(
                <>
                
                
                
                
                <div class="foot">
                    <span>Main</span>
                    <span>0</span>
                    <span>0</span>
                    <img src={iconTick} class="tabl " alt="tick" width="15px" height="15px"/>
                    <img src={iconLive} alt="live" width="15px" height="15px"/>
                    <img src={iconPlay}   alt="play" width="15px" height="15px"/>
                </div>
                    
                 </>
            );
}