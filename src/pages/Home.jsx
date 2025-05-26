import './Home.css';
import hill1 from '../assets/hill1.png';
import hill2 from '../assets/hill2.png';
import hill3 from '../assets/hill3.png';
import hill4 from '../assets/hill4.png';
import hill5 from '../assets/hill5.png';
import leaf from '../assets/leaf.png';
import plant from '../assets/plant.png';
import tree from '../assets/tree.png';
import { useEffect, useRef } from 'react';

function Home() {
    // Ce code a été créé grace a un tutoriel de Youtube : https://youtu.be/alGnk3iMaYE?si=-8wFNNFb8V8ybLoC

    const textRef = useRef(null);
    const leafRef = useRef(null);
    const hill1Ref = useRef(null);
    const hill4Ref = useRef(null);
    const hill5Ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
        let value = window.scrollY;
        
       if (value > 500) value = 500;

      if (textRef.current) {
        textRef.current.style.marginTop = value * 2.5 + 'px';
      }
      if (leafRef.current) {
        leafRef.current.style.top = value * -1.5 + 'px';
        leafRef.current.style.left = value * 1.5 + 'px';
      }
      if (hill5Ref.current) {
        hill5Ref.current.style.left = value * 1.5 + 'px';
      }
      if (hill4Ref.current) {
        hill4Ref.current.style.left = value * -1.5 + 'px';
      }
      if (hill1Ref.current) {
        hill1Ref.current.style.top = value * 1.5 + 'px';
      }
    };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    return(

    
     

        <div className="Home">
         
            <img className="hill1" src={hill1} ref={hill1Ref} />
            <img className="hill2" src={hill2} />
            <img className="hill3" src={hill3} />
            <img className="hill4" src={hill4} ref={hill4Ref} />
            <img className="hill5" src={hill5} ref={hill5Ref} />
            <img className="tree" src={tree} />



      
         <h2 id="Titre" ref={textRef}>WELCOME TO MY WEBSITE</h2>
         
         <p id="Intro">
         Dans ma deuxième session au cégep Marie-Victorin, dans le programme de Techniques de l’informatique, j’ai été appelé à créer un site web complet dans le cadre de l’épreuve finale du cours <strong>Application Web</strong>. 
         Ce site, sur lequel vous vous trouvez en ce moment, a été conçu pour démontrer mes compétences en React, en structuration de projet, en intégration d’API, et en conception d’interfaces dynamiques et interactives. 
         Il contient <strong>quatre grandes parties principales</strong> : <br /> <br />
         Accueil – une page d’entrée visuellement attrayante qui introduit mon site et mon identité.<br /> <br /> 
         Projets – une section qui  propose un formulaire permettant d’ajouter des projets informatiques avec titre, description, image, technologies et liens. Les projets ajoutés sont sauvegardés pour être affichés dans le portfolio. <br /> <br />
         API –Cette page affiche dynamiquement un Amiibo aléatoire provenant d’une API externe. Elle représente l’un de mes intérêts personnels: Les Jeux vidéos.<br /> <br />
         Portfolio – une vitrine personnelle où je me présente, partage mon parcours, mes intérêts et mes objectifs professionnels.Elle affiche aussi automatiquement mes projets ajoutés dans la partie Projets.<br /> <br /> 
         Ce travail  reflète non seulement mes apprentissages techniques, mais aussi ma progression dans le développement web. 
         <strong><br /> <br />Sur ce, je vous souhaite une bonne visite de mon site web, et j’espère que vous aurez aimé apprendre à mieux me connaître!<br /> :) <br /> <br /> <br /> <br /></strong> 
         </p>
         
        

         <img className='leaf' src={leaf} ref={leafRef} />
         <img className='plant' src={plant} />
        
        </div>

    );




}







export default Home;