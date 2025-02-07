import { useState } from 'react'; // Importera useState för att hantera formulärdata
import './ContactForm.css'; // Importera CSS-filen

const ContactForm = () => {
// State för att hantera formulärdata
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // Funktion för att uppdatera state när användaren skriver i inputfältet
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
 // Funktion för att hantera formulärets inskickning
  const handleSubmit = (e) => {
    e.preventDefault(); // Förhindra sidladdning vid submit
    alert(`Tack för ditt meddelande, ${formData.name}! Jag hör av mig!`); // Visar en bekräftelse
    setFormData({ name: '', email: '', message: '' }); // Återställ formuläret efter inskickning
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input name="name" placeholder="Namn" value={formData.name} onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <textarea name="message" placeholder="Meddelande" value={formData.message} onChange={handleChange} required />
      <button type="submit">Skicka</button>
    </form>
  );
};

export default ContactForm;
