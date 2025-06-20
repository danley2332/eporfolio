import './Projects.css';
import hill1 from '../assets/hill1.png';
import hill2 from '../assets/hill2.png';
import hill3 from '../assets/hill3.png';
import hill4 from '../assets/hill4.png';
import hill5 from '../assets/hill5.png';
import leaf from '../assets/leaf.png';
import plant from '../assets/plant.png';
import tree from '../assets/tree.png';
import { useEffect, useRef, useState} from 'react';
function Projects() {
    // Ce code a été créé grace a un tutoriel de Youtube : https://youtu.be/alGnk3iMaYE?si=-8wFNNFb8V8ybLoC
    const textRef = useRef(null);
    const leafRef = useRef(null);
    const hill1Ref = useRef(null);
    const hill4Ref = useRef(null);
    const hill5Ref = useRef(null);
    const [newProject, setNewProject] = useState({
        title:"",
        description:"",
        image:"",
        technologies:"",
        link:"",
        github:""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProject((prevProject) => ({
            ...prevProject,
            [name]: value,
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const projetsExistants = JSON.parse(localStorage.getItem("projets")) || [];
        const projetsMisAJour = [...projetsExistants, newProject];
        localStorage.setItem("projets", JSON.stringify(projetsMisAJour));
        setNewProject({
            title: "",
            description: "",
            image: "",
            technologies: "",
            link: "",
            github: ""
        });
    };
    const resetProjects = () => {
        localStorage.removeItem("projets");
    };
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

            <h2 id="Titre" ref={textRef}>PROJECTS</h2>

            <p id="Intro">
             Bienvenue sur la page Projects !  <br /><br />
             Ici, on peut ajouter des propres projets à mon portfolio. Remplis simplement le formulaire avec les informations du projet <br />(titre, description, image, lien, etc.)<br /><br /> Puis clique sur « Ajouter » <br /><br />
             Une fois le projet ajouté, <br /> il apparaîtra automatiquement dans la section « Projets informatiques » de ma page Portfolio. <br /><br />
            </p>
            <>
                <h1 id="FormTitle" className="FormTitle">Formulaire</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                 <label>Titre du projet :</label>
                    <input
                        type="text" 
                        name="title" 
                        value={newProject.title} 
                        onChange={handleChange} 
                        required 
                    />
                    <label>Description :</label>
                    <textarea
                        name="description" 
                        value={newProject.description} 
                        onChange={handleChange} 
                        required 
                    />
                    <label>Technologies :</label>
                    <input
                        type="text" 
                        name="technologies" 
                        value={newProject.technologies} 
                        onChange={handleChange} 
                        required 
                    />
                    <label>URL de l’image :</label>
                    <input
                        type="text" 
                        name="image" 
                        value={newProject.image} 
                        onChange={handleChange} 
                    />
                    <label>Lien du projet :</label>
                    <input
                        type="text" 
                        name="link" 
                        value={newProject.link} 
                        onChange={handleChange} 
                    />
                    <label>Lien GitHub :</label>
                    <input
                        type="text" 
                        name="github" 
                        value={newProject.github} 
                        onChange={handleChange} 
                    />
                    <button type="submit">Ajouter le projet</button>
                </form>
                <button type="button" onClick={resetProjects} className="reset-btn">
                 Réinitialiser les projets
                </button>
            </>
            <img className="leaf" src={leaf} ref={leafRef} />
            <img className="plant" src={plant} />
        </div>
    );
}
export default Projects;
