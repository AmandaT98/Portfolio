import { useEffect, useState } from 'react';
import './ProjectList.css'; // Importera CSS-filen

const ProjectList = () => {
  const URL = 'https://api.github.com/users/AmandaT98/repos';
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) throw new Error('Något gick fel vid hämtning!');
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="project-list-container">
      <h2>Mina projekt</h2>
      {loading && <p className="loading">Laddar projekt...</p>}
      {error && <p className="error">Fel: {error}</p>}
      {data.length === 0 && !loading && !error && <p>Inga projekt hittades.</p>}

      {data.map((repo) => (
        <article key={repo.id}>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            <h3>{repo.name}</h3>
          </a>
        </article>
      ))}
    </div>
  );
};

export default ProjectList;
