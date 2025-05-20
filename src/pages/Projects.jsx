import './Projects.css';
import hill1 from '../assets/hill1.png';
import hill2 from '../assets/hill2.png';
import hill3 from '../assets/hill3.png';
import hill4 from '../assets/hill4.png';
import hill5 from '../assets/hill5.png';
import leaf from '../assets/leaf.png';
import plant from '../assets/plant.png';
import tree from '../assets/tree.png';
import { useEffect, useRef } from 'react';

function Projects() {
    const textRef = useRef(null);
    const leafRef = useRef(null);
    const hill1Ref = useRef(null);
    const hill4Ref = useRef(null);
    const hill5Ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            let value = window.scrollY;
            if (value > 500) value = 500;

            if (textRef.current) textRef.current.style.marginTop = value * 2.5 + 'px';
            if (leafRef.current) {
                leafRef.current.style.top = value * -1.5 + 'px';
                leafRef.current.style.left = value * 1.5 + 'px';
            }
            if (hill5Ref.current) hill5Ref.current.style.left = value * 1.5 + 'px';
            if (hill4Ref.current) hill4Ref.current.style.left = value * -1.5 + 'px';
            if (hill1Ref.current) hill1Ref.current.style.top = value * 1.5 + 'px';
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="Projects">
            <img className="hill1" src={hill1} ref={hill1Ref} />
            <img className="hill2" src={hill2} />
            <img className="hill3" src={hill3} />
            <img className="hill4" src={hill4} ref={hill4Ref} />
            <img className="hill5" src={hill5} ref={hill5Ref} />
            <img className="tree" src={tree} />

            <h2 id="Titre" ref={textRef}>PROJETS</h2>

            <p id="Intro">
                Voici la section qui présente mes projets réalisés durant ma formation. Chaque projet est le reflet d’une compétence acquise et d’un défi relevé. <br /><br />
                Que ce soit en JavaScript, React, Java ou SQL, j’ai appliqué ce que j’ai appris pour créer des applications fonctionnelles et bien structurées. 
                Vous y trouverez des descriptions détaillées, les technologies utilisées, des images ou extraits de code. <br /><br />
                Ce portfolio de projets démontre non seulement mes capacités techniques, mais aussi ma passion pour le développement.
            </p>

            <img className="leaf" src={leaf} ref={leafRef} />
            <img className="plant" src={plant} />
        </div>
    );
}

export default Projects;
