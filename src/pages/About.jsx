import './About.css'; // Importera CSS-filen
import myImage from '../assets/profile.jpg'; // Importera bilden
import { FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importera ikoner

export function About() {
    return (
      <div className="about-container">
        <h1>OM MIG</h1>
        <p>Mitt namn är Amanda Törnqvist, jag studerar till frontend-utvecklare på KYH Stockholm.</p>

        <div className="about-content">
          <section className="description">
            <h2>UTBILDNING</h2>
            <p>KYH Stockholm <br /> Frontend utvecklare | 2024-2026<br /> Rodengymnasiet <br />
            Samhällsvetenskapsprogrammet | 2014-2017</p>
            <h3>ARBETSLIVSERFARENHETER</h3>
            <p>
            Sportcentrum Norrtälje <br /> Vaktmästare | 2024-Nutid <br /> - Kör ismaskin <br />  
            NOTE AB Norrtälje <br /> Maskinoperatör | 2023-2024 <br />
              - Skiftledare. <br />
              - Manövrerade maskiner och robotar. <br />
              - Tillverkning av komponenter till nästa generation av högteknologisk medicinsk utrustning.
            </p>
          </section>

          {/* Bildsektion */}
          <div className="image-container">
            <img src={myImage} alt="Om mig" className="about-image" />
            
            {/* Sociala medier under bilden */}
            <section className="social-links">
              <a href="https://instagram.com/maanda98" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com/in/amanda-törnqvist" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </section>
          </div>
        </div>
      </div>
    );
}
