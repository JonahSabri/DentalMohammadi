/**
 * Utility functions for handling API responses consistently
 */

/**
 * Handles different API response formats and returns an array
 * @param {any} data - The response data from the API
 * @returns {Array} - Always returns an array
 */
export const normalizeApiResponse = (data) => {
  if (Array.isArray(data)) {
    return data;
  } else if (data && Array.isArray(data.results)) {
    return data.results;
  } else if (data && typeof data === 'object') {
    // If it's a single object, wrap it in an array
    return [data];
  }
  return [];
};

/**
 * Fetches data from an API endpoint and handles common response formats
 * @param {string} url - The API endpoint URL
 * @returns {Promise<Array>} - Promise that resolves to an array
 */
export const fetchApiData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return normalizeApiResponse(data);
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    return [];
  }
};

/**
 * Fetches data with loading and error state management
 * @param {string} url - The API endpoint URL
 * @param {Function} setData - Function to set the data state
 * @param {Function} setLoading - Function to set loading state
 * @param {Function} setError - Function to set error state
 */
export const fetchWithState = async (url, setData, setLoading, setError) => {
  try {
    setLoading(true);
    setError(null);
    
    const data = await fetchApiData(url);
    setData(data);
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    setError('خطا در بارگذاری اطلاعات. لطفاً دوباره تلاش کنید.');
    setData([]);
  } finally {
    setLoading(false);
  }
}; 