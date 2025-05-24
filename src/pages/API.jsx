import './API.css';
import hill1 from '../assets/hill1.png';
import hill2 from '../assets/hill2.png';
import hill3 from '../assets/hill3.png';
import hill4 from '../assets/hill4.png';
import hill5 from '../assets/hill5.png';
import leaf from '../assets/leaf.png';
import plant from '../assets/plant.png';
import tree from '../assets/tree.png';
import { useEffect, useRef } from 'react';

function API() {
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
        <div className="API">
            <img className="hill1" src={hill1} ref={hill1Ref} />
            <img className="hill2" src={hill2} />
            <img className="hill3" src={hill3} />
            <img className="hill4" src={hill4} ref={hill4Ref} />
            <img className="hill5" src={hill5} ref={hill5Ref} />
            <img className="tree" src={tree} />

            <h2 id="Titre" ref={textRef}>API</h2>

            <p id="Intro">
                Cette page met en valeur ma capacité à interagir avec des API. Grâce à React et à l’intégration de données externes, j’ai créé une page dynamique capable d’afficher des informations en temps réel. <br /><br />
                Vous pourrez y voir un exemple d’API publique que j’ai utilisée pour démontrer mes compétences : appels fetch, traitement JSON, affichage dynamique et gestion des états. <br /><br />
                L’objectif ici est simple : prouver que je peux construire un site qui va au-delà du statique. Un site qui communique, qui interagit, et qui vit.
            </p>

            <img className="leaf" src={leaf} ref={leafRef} />
            <img className="plant" src={plant} />
        </div>
    );
}

export default API;
