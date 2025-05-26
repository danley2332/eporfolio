import './API.css';
import hill1 from '../assets/hill1.png';
import hill2 from '../assets/hill2.png';
import hill3 from '../assets/hill3.png';
import hill4 from '../assets/hill4.png';
import hill5 from '../assets/hill5.png';
import leaf from '../assets/leaf.png';
import plant from '../assets/plant.png';
import tree from '../assets/tree.png';
import { useEffect, useRef, useState } from 'react';
import amibo from '../assets/amibo.png';
function API() {
  // Ce code a été créé grace a un tutoriel de Youtube : https://youtu.be/alGnk3iMaYE?si=-8wFNNFb8V8ybLoC
  const textRef = useRef(null);
  const leafRef = useRef(null);
  const hill1Ref = useRef(null);
  const hill4Ref = useRef(null);
  const hill5Ref = useRef(null);
  const [amiibos, setAmiibos] = useState([]);
  const [index, setIndex] = useState(0);
  const [search, setSearch] = useState('');
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
    fetch('https://www.amiiboapi.com/api/amiibo/')
      .then(res => res.json())
      .then(data => {
        setAmiibos(data.amiibo);
      });

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % amiibos.length);
  };
  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? amiibos.length - 1 : prevIndex - 1
    );
  };
  const handleSearch = (e) => {
    e.preventDefault();
    fetch(`https://www.amiiboapi.com/api/amiibo/?character=${search}`)
      .then(res => res.json())
      .then(data => {
        setAmiibos(data.amiibo);
        setIndex(0);
      });
  };
  const current = amiibos[index];
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
        Cette page est dédiée à ma passion pour l’univers des jeux vidéos. Grâce à une API publique, elle permet de parcourir différentes figurines Amiibo. <br /> <br /> Tu peux explorer les personnages disponibles, <br /> <br /> découvrir leurs détails, <br /> <br /> et faire des recherches ciblées par nom.  <br /> <br /> 
      </p>
      <div className="api-page">        
        <h1 className="api-title">Figurines</h1>
        <img className="amiibo" src={amibo} alt="amiibo" />
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Rechercher un personnage (ex: Mario, Link, Mewtwo...)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Rechercher</button>
        </form>
        {current && (
          <div className="amiibo-card">
            <img src={current.image} alt={current.name} />
            <h2>{current.name}</h2>
            <p><strong>Personnage :</strong> {current.character}</p>
            <p><strong>Série :</strong> {current.gameSeries}</p>
            <p><strong>Type :</strong> {current.type}</p>
            <p><strong>Sortie NA :</strong> {current.release?.na || 'Non disponible'}</p>
          </div>
        )}
        <div className="nav-buttons">
          <button onClick={handlePrev}>Précédent</button>
          <button onClick={handleNext}>Suivant</button>
        </div>
      </div>
      <img className="leaf" src={leaf} ref={leafRef} />
      <img className="plant" src={plant} />
    </div>
  );
}
export default API;
