
export default function HomePage({ film, serie }) {
  return (
    <>
      {/* SEZIONE FILM */}
      <div className="container mt-5">
        <h1 className="text-white">FILM</h1>
        <div className="row g-4">
          {film.map((item) => (
            <div className="col-2" key={item.id}>
              <div className="card h-100">
                <img src={`https://image.tmdb.org/t/p/w342${item.poster_path}`} className="img-fluid" alt={item.title} />
                <div className="card-info">
                  <p><strong>Titolo:</strong> {item.title}</p>
                  <p><strong>Originale:</strong> {item.original_title}</p>
                  <p>
                    <strong>Lingua:</strong> 
                    <span className={`fi fi-${item.original_language === 'en' ? 'us' : item.original_language}`}></span>
                    <span style={{ marginLeft: '10px' }}>({item.original_language})</span>
                  </p>
                  <p>
                    Voto: {(item.vote_average / 2).toFixed(1)}
                    {item.vote_average === 0 && <span> NO VALUE </span>}
                    {(item.vote_average / 2) >= 1 && <span style={{ color: "gold" }}>★</span>}
                    {(item.vote_average / 2) >= 2 && <span style={{ color: "gold" }}>★</span>}
                    {(item.vote_average / 2) >= 3 && <span style={{ color: "gold" }}>★</span>}
                    {(item.vote_average / 2) >= 4 && <span style={{ color: "gold" }}>★</span>}
                    {(item.vote_average / 2) >= 5 && <span style={{ color: "gold" }}>★</span>}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SEZIONE SERIE */}
      <div className="container mt-5 mb-5">
        <h1 className="text-white">SERIE</h1>
        <div className="row g-4">
          {serie.map((item) => (
            <div className="col-2" key={item.id}>
              <div className="card h-100">
                <img src={`https://image.tmdb.org/t/p/w342${item.poster_path}`} className="img-fluid" alt={item.name} />
                <div className="card-info">
                  <p><strong>Titolo:</strong> {item.name}</p>
                  <p><strong>Originale:</strong> {item.original_name}</p>
                  <p>
                    <strong>Lingua:</strong> 
                    <span className={`fi fi-${item.original_language === 'en' ? 'us' : item.original_language}`}></span>
                    <span style={{ marginLeft: '10px' }}>({item.original_language})</span>
                  </p>
                  <p>
                    Voto: {(item.vote_average / 2).toFixed(1)}
                    {item.vote_average === 0 && <span> NO VALUE </span>}
                    {(item.vote_average / 2) >= 1 && <span style={{ color: "gold" }}>★</span>}
                    {(item.vote_average / 2) >= 2 && <span style={{ color: "gold" }}>★</span>}
                    {(item.vote_average / 2) >= 3 && <span style={{ color: "gold" }}>★</span>}
                    {(item.vote_average / 2) >= 4 && <span style={{ color: "gold" }}>★</span>}
                    {(item.vote_average / 2) >= 5 && <span style={{ color: "gold" }}>★</span>}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}