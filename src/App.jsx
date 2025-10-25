import { useEffect, useState } from "react";
import PodcastGrid from "./components/PodcastGrid";
import { genres } from "./data";
import { fetchPodcasts } from "./api/fetchPodcasts";
import Header from "./components/Header";
import SearchBar from "./components/search";      
import Pagination from "./components/pagination";
import Sort from "./components/sort";

/**
 * App - The root component of the Podcast Explorer application. It handles:
 * - Fetching podcast data from a remote API
 * - Managing loading and error states
 * - Rendering the podcast grid once data is successfully fetched
 * - Displaying a header and fallback UI during loading or error
 * @returns {JSX.Element} The rendered application interface
 */
export default function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
   const [filteredPodcasts, setFilteredPodcasts] = useState([]); 
  const [searchTerm, setSearchTerm] = useState("");
   const [sortOption, setSortOption] = useState("");
  const [error, setError] = useState(null); 

  
 const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;


  useEffect(() => {
    fetchPodcasts(setPodcasts, setError, setLoading);
  }, []);

  
  useEffect(() => {
    const results = podcasts.filter((podcast) =>
      podcast.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPodcasts(results);
  }, [searchTerm, podcasts]);

useEffect(() => {
    const results = podcasts.filter((podcast) =>
      podcast.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPodcasts(results);
    setCurrentPage(1); 
  }, [searchTerm, podcasts]);

 
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPodcasts = filteredPodcasts.slice(
    startIndex,
    startIndex + itemsPerPage
  );


  return (
    <>
      <Header />

      <main>
        
        {loading && (
          <div className="message-container">
            <div className="spinner"></div>
            <p>Loading podcasts...</p>
          </div>
        )}

        
        {error && (
          <div className="message-container">
            <div className="error">
              Error occurred while trying to fetch podcasts: {error}
            </div>
          </div>
        )}

        
        {!loading && !error && (
          <>
            
            <SearchBar value={searchTerm} onChange={setSearchTerm} />

            <PodcastGrid podcasts={filteredPodcasts} genres={genres} />
          
            <Pagination
              totalItems={filteredPodcasts.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </main>
    </>
  );
}