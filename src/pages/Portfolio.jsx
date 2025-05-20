import hill1 from '../assets/hill1.png';
import hill2 from '../assets/hill2.png';
import hill3 from '../assets/hill3.png';
import hill4 from '../assets/hill4.png';
import hill5 from '../assets/hill5.png';
import leaf from '../assets/leaf.png';
import plant from '../assets/plant.png';
import tree from '../assets/tree.png';
import './Portfolio.css';

function Portfolio() {
    return(

        

        <div class="Portfolio">
         <img className='hill1' src={hill1} />
         <img className='hill2' src={hill2} />
         <img className='hill3' src={hill3} />
         <img className='hill4' src={hill4} />
         <img className='hill5' src={hill5} />
         <img className='tree' src={tree} />




     



         
         <img className='leaf' src={leaf} />
         <img className='plant' src={plant} />
        </div>

    )








}








export default Portfolio;