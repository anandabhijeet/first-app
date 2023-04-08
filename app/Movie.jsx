import Link from "next/link";
import Image from "next/image";

export default function Movie({id, title, poster_path, release_date }) {
  const image_path = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <img src={poster_path} alt="" />
      <div className="flex">
      
        <Link href={`/${id}`}>
          <Image
            width={200}
            height={300}
            src={image_path + poster_path}
            alt="poster"
          />
        </Link>
        <div style={{display:'flex', justifyContent: 'space-between', marginBlock:'8px'}}>
        <p className="font-inter" style={{fontSize:'10px'}}>{title}</p>
        <p className="font-montserrat" style={{fontSize:'8px'}}>{release_date}</p>
        </div>
      </div>
    </div>
  );
}
