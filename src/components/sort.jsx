
/**
 * Dropdown component to sort podcasts by different criteria.
 *
 * @param {Object} props
 * @param {string} props.sortOption - The currently selected sort option.
 * @param {function} props.onSortChange - Callback to update sort option in the parent component.
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