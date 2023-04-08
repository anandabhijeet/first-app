import Image from "next/image";
export default async function MovieDetails({params}){
    const {movie} = params;
    const image_path = "https://image.tmdb.org/t/p/original";
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
      );
      const res = await data.json();
    return(
        <div style={{paddingInline:'32px'}}>
            <h2 className="text-4xl">{res.title}</h2>
             <h2 className="text-lg">{res.release_date}</h2>
             <h2>Runtime: {res.runtime} minutes</h2>
             <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded-medium text-sm">{res.status}</h2>
             <Image className="my-12" src={image_path + res.backdrop_path} width={1000} height={600} priority/>
        </div>
    )
}