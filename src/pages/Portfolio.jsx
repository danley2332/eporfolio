import './Portfolio.css';
import hill1 from '../assets/hill1.png';
import hill2 from '../assets/hill2.png';
import hill3 from '../assets/hill3.png';
import hill4 from '../assets/hill4.png';
import hill5 from '../assets/hill5.png';
import leaf from '../assets/leaf.png';
import plant from '../assets/plant.png';
import tree from '../assets/tree.png';
import grad from '../assets/grad.png';
import tcdo1 from '../assets/tcdo1.png';
import cj from '../assets/cj.png';
import travis from  '../assets/travis.png';
import ftmh from '../assets/ftmh.png';
import { useEffect, useRef, useState } from 'react';
function Portfolio() {
    // Ce code a été créé grace a un tutoriel de Youtube : https://youtu.be/alGnk3iMaYE?si=-8wFNNFb8V8ybLoC
    const textRef = useRef(null);
    const leafRef = useRef(null);
    const hill1Ref = useRef(null);
    const hill4Ref = useRef(null);
    const hill5Ref = useRef(null);
    const [projets, setProjets] = useState([]);
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
        const projetsSauvegardes = localStorage.getItem("projets");
            if (projetsSauvegardes) {
            setProjets(JSON.parse(projetsSauvegardes));
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className="Portfolio">
            <img className="hill1" src={hill1} ref={hill1Ref} />
            <img className="hill2" src={hill2} />
            <img className="hill3" src={hill3} />
            <img className="hill4" src={hill4} ref={hill4Ref} />
            <img className="hill5" src={hill5} ref={hill5Ref} />
            <img className="tree" src={tree} />
            <h2 id="Titre" ref={textRef}>PORTFOLIO</h2>
            <h3 id="Intro">
                <img className="cj" src={cj} alt="Cactus Jack" />
                <img className="tcdo" src={tcdo1} alt="tcdo" />
                <img className="trav" src={travis} alt="trav" />
                <img className="ftmh1" src={ftmh} alt="ftmh1" />
                <img className="photo-profil" src={grad} alt="Danley Philippe en graduation" />
                <h4 id="Nom">Danley<br /> Philippe<br /><br /></h4>
                Je suis une personne serviable, généreuse et sociable. Mon intelligence m’aide à relever les défis, 
                même si mon TDA me freine parfois. <br /><br />
                J’ai une personnalité vive et créative, et j’aime apprendre de manière dynamique et interactive.<br /><br />
                Ce qui me passionne : les jeux vidéo, l’entraînement au gym, la musique et ma relation avec Jésus                                                                                                                                   . <br />
                L’informatique m’attire particulièrement pour son aspect sécurité : la cybersécurité est un domaine 
                que je rêve d’explorer plus en profondeur. <br /><br />
            </h3>
            <ul id="Pro">
                <li>
                    J’étudie présentement au <strong>cégep Marie-Victorin</strong>, dans le programme de 
                    <strong>Techniques de l’informatique</strong>. Je suis actuellement en deuxième session de ce programme.
                </li>
                <br />
                <li>
                    Je n’ai pas encore eu l’occasion de faire un stage ou un emploi lié directement à l’informatique, 
                    mais mon intérêt pour ce domaine est très présent.
                </li>
                <br />
                <li>
                    J’ai participé à un projet scolaire, où j’ai programmé des robots en LEGO 
                    lors d’une activité de création en équipe en secondaire 3.
                </li>
                <br />
                <li>
                    J’ai déjà offert de mon temps dans des activités parascolaires à titre bénévole.
                </li>
                <br />
                <li>
                    Mon parcours est encore jeune, mais il est animé par une grande curiosité et une volonté 
                    de progresser chaque jour.
                </li>
                <br />
            </ul>
            <div className="project-section">
              <h3 id="section-title" className="section-title">Projets informatiques</h3>
                <div className="project-list">
                    {projets.map((projet, index) => (
                    <div className="project-card" key={index}>
                        <h4>{projet.title}</h4>
                        <p>{projet.description}</p>
                        <p><strong>Technologies :</strong> {projet.technologies}</p>
                        {projet.image && <img src={projet.image} alt={projet.title} />}
                        {projet.link && (
                        <p>
                            <a href={projet.link} target="_blank" rel="noopener noreferrer">
                            Voir le projet
                            </a>
                        </p>
                        )}
                        {projet.github && (
                        <p>
                            <a href={projet.github} target="_blank" rel="noopener noreferrer">
                            Voir sur GitHub
                            </a>
                        </p>
                        )}
                    </div>
                    ))}
                </div>
            </div>
            <img className="leaf" src={leaf} ref={leafRef} />
            <img className="plant" src={plant} />
        </div>
    );
}
export default Portfolio;
