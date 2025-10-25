
  import { useState } from 'react';
  
/**
 * SearchBar Component
 * 
 * Renders a controlled search input that allows users to type in
 * a search query for filtering podcast titles.
 * 
 * As the user types, the `onSearch` callback is called with the current
 * input value, enabling real-time search updates in the parent component.
 * 
 * @component
 * @param {Object} props - Component properties.
 * @param {Function} props.onSearch - Function called with the current search term whenever the user types.
 * 
 * @example
 * // Example usage in parent component:
 * <SearchBar onSearch={(term) => setSearchTerm(term)} />
 * 
 * @returns {JSX.Element} The rendered search bar input field.
 */

    const SearchBar = ({ onSearch }) => {
      const [searchTerm, setSearchTerm] = useState('');


       /**
   * Handles input changes by updating the local state
   * and notifying the parent component of the new search term.
   * 
   * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event.
   */

      const handleChange = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value);
      };

      return (
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
      );
    };

    export default SearchBar;