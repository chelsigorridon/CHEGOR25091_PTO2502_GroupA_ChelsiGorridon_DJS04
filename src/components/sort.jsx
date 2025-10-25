
/**
 * Sort Component
 * 
 * Provides a dropdown menu that allows users to sort podcasts
 * by different criteria — such as newest update or title order (A–Z, Z–A).
 * 
 * The selected sorting option is passed back to the parent component
 * through the `onSortChange` callback, allowing the parent to
 * dynamically update the displayed list.
 * 
 * @component
 * @param {Object} props - Component properties.
 * @param {string} props.sortOption - The currently selected sorting option.
 * @param {Function} props.onSortChange - Function called when the user selects a new sort option.
 * 
 * @example
 * // Example usage in parent component:
 * <Sort sortOption={sortOption} onSortChange={setSortOption} />
 * 
 * @returns {JSX.Element} The rendered sort control element.
 */
export default function Sort({ sortOption, onSortChange }) {
  return (
    <div className="sort-container">
      <label htmlFor="sort">Sort by:</label>
      <select
        id="sort"
        value={sortOption}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="">None</option>
        <option value="date-desc">Newest first</option>
        <option value="title-asc">Title (A-Z)</option>
        <option value="title-desc">Title (Z-A)</option>
      </select>
    </div>
  );
}