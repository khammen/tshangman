import Hang0 from './Images/Hang0.jpg';
import Hang1 from './Images/Hang1.jpg';
import Hang2 from './Images/Hang2.jpg';
import Hang3 from './Images/Hang3.jpg';
import Hang4 from './Images/Hang4.jpg';
import Hang5 from './Images/Hang5.jpg';
import HangGameOver from './Images/HangGameOver.jpg';

//var lossLevel:number = 3;
export function Background({lossLevel}: {lossLevel: number}): JSX.Element{
    if (lossLevel==0){
        return <div>
        <img src={Hang0}/>
      </div>
    } else if (lossLevel==1){
        return <div>
        <img src={Hang1}/>
      </div>
    } else if (lossLevel==2){
        return <div>
        <img src={Hang2}/>
      </div>
    } else if (lossLevel==3){
        return <div>
        <img src={Hang3}/>
      </div>
    } else if (lossLevel==4){
        return <div>
        <img src={Hang4}/>
      </div>
    } else if (lossLevel==5){
        return <div>
        <img src={Hang5}/>
      </div>
    } else {
        return <div>
        <img src={HangGameOver}/>
      </div>
    }
    
}