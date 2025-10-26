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
  const itemsPerPage = [10];

  // Fetch data
  useEffect(() => {
    fetchPodcasts(setPodcasts, setError, setLoading);
  }, []);

  // Filter + sort logic combined
  useEffect(() => {
    let results = podcasts.filter((podcast) =>
      podcast.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // 🔽 Sorting logic
    if (sortOption === "date-desc") {
      results.sort((a, b) => new Date(b.updated) - new Date(a.updated));
    } else if (sortOption === "title-asc") {
      results.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "title-desc") {
      results.sort((a, b) => b.title.localeCompare(a.title));
    }

    setFilteredPodcasts(results);
    setCurrentPage(1);
  }, [searchTerm, sortOption, podcasts]);

  // Pagination
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
            <div className="controls">
              <SearchBar onSearch={setSearchTerm} />
              <Sort sortOption={sortOption} onSortChange={setSortOption} />
            </div>

            <PodcastGrid podcasts={paginatedPodcasts} genres={genres} />

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