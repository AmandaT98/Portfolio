import ContactForm from "../components/ContactForm"; //Importerar Kontaktformulär 
import './Contact.css'; 


export function Contact() {
    return (
      <div>
        <section className="description1">
        <h1>KONTAKT</h1>
        <p>Här kan du kontakta mig.</p>
        <ContactForm />
        </section>
      </div>
    );
  }
  
