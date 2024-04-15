import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [media, setMedia] = useState([]); // State to hold combined movies and TV shows

  useEffect(() => {
    fetchTrendingMovies();
    fetchPopularMedia();
  }, []);

  async function fetchTrendingMovies() {
    const trendingURL = "https://api.themoviedb.org/3/trending/all/week?api_key=e7b1c4023a2a60d89c3b799a91f17808&include_adult=false&language=en-US&page=1";
    try {
      const response = await fetch(trendingURL);
      const data = await response.json();
      setMovies(data.results);
    } catch (err) {
      console.error("Failed to fetch trending movies:", err);
    }
  }

  async function fetchPopularMedia() {
    const movieURL = "https://api.themoviedb.org/3/movie/popular?api_key=e7b1c4023a2a60d89c3b799a91f17808&language=en-US&page=1";
    const tvURL = "https://api.themoviedb.org/3/tv/popular?api_key=e7b1c4023a2a60d89c3b799a91f17808&language=en-US&page=1";
    try {
      const [movieResponse, tvResponse] = await Promise.all([
        fetch(movieURL),
        fetch(tvURL)
      ]);
      const moviesData = await movieResponse.json();
      const tvData = await tvResponse.json();
      // Combine movies and TV shows into one array
      setMedia([...moviesData.results, ...tvData.results]);
    } catch (error) {
      console.error("Failed to fetch media:", error);
    }
  }

  return (
    <>
      <h1 className="text-[32px] text-white mb-[25px]">Trending</h1>
      <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={'auto'}
        navigation={true}
        speed={400}
        className="relative"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id} className="w-[15rem]">
            <div className="absolute gap-[8px] flex items-center left-[24px] opacity-75 bottom-[57px] text-[15px] text-white">
              <h2>{movie.first_air_date?.slice(0, 4) || movie.release_date?.slice(0, 4)}</h2>
              <img src="/Oval.svg" className=" w-[3px] h-[3px]"></img>
            </div>
            <h1 className="absolute left-[24px] bottom-[24px] text-[24px] text-white">{movie.title || movie.name}</h1>
            <img src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`} alt={movie.title || movie.name} />
          </SwiperSlide>
        ))}
      </Swiper>

      <h2 className="text-[28px] text-white mt-[40px] mb-[20px] ">Recomended</h2>

      <div className="grid grid-cols-6 gap-5 mr-7">
        {media.map(item => (
          <div key={item.id} className="m-3 mx-0   ">
            <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt={item.title || item.name}  className=" w-[280px] rounded-[8px] object-cover" />
            <p className="text-white text-wrap">{item.title || item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
