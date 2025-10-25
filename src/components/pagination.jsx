
/**
 * Pagination Component
 * 
 * Renders pagination controls for navigating between pages of podcast results.
 * Includes "Previous" and "Next" buttons and displays the current page number.
 * 
 * The component dynamically disables navigation buttons when the user
 * is on the first or last page to prevent invalid page changes.
 * 
 * @component
 * @param {Object} props - Component properties.
 * @param {number} props.totalItems - Total number of items (e.g., podcasts) available.
 * @param {number} props.itemsPerPage - Number of items displayed per page.
 * @param {number} props.currentPage - The current active page number.
 * @param {Function} props.onPageChange - Function called when the user changes the page.
 * 
 * @example
 * // Example usage in parent component:
 * <Pagination
 *   totalItems={filteredPodcasts.length}
 *   itemsPerPage={8}
 *   currentPage={currentPage}
 *   onPageChange={setCurrentPage}
 * />
 * 
 * @returns {JSX.Element | null} The rendered pagination controls, or null if only one page exists.
 */


export default function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  if (totalPages === 0) return null;

  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <span>
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}