import Movie from "./Movie";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  return (
    <main>
      <h1 className="font-inter">Movies</h1> 
      <div className="container " style={{display:'flex', flexWrap:'wrap', justifyContent:'center', alignItems:'center', gap:'24px', paddingInline:'32px', cursor:'pointer' }} >
        {res.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            release_date={movie.release_date}
            poster_path={movie.poster_path}
          />
        ))}
      </div>
    </main>
  );
}
