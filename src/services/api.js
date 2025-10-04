import { API_ENDPOINTS, ERROR_MESSAGES } from '../constants';

/**
 * Generic API service class
 */
class ApiService {
  constructor() {
    this.baseURL = process.env.REACT_APP_API_URL || '';
    this.timeout = 10000; // 10 seconds
  }

  /**
   * Generic request method
   * @param {string} endpoint - API endpoint
   * @param {object} options - Fetch options
   * @returns {Promise} - API response
   */
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      timeout: this.timeout,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw new Error(error.message || ERROR_MESSAGES.network);
    }
  }

  /**
   * GET request
   * @param {string} endpoint - API endpoint
   * @param {object} params - Query parameters
   * @returns {Promise} - API response
   */
  async get(endpoint, params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const url = queryString ? `${endpoint}?${queryString}` : endpoint;
    
    return this.request(url, {
      method: 'GET',
    });
  }

  /**
   * POST request
   * @param {string} endpoint - API endpoint
   * @param {object} data - Request body
   * @returns {Promise} - API response
   */
  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * PUT request
   * @param {string} endpoint - API endpoint
   * @param {object} data - Request body
   * @returns {Promise} - API response
   */
  async put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  /**
   * DELETE request
   * @param {string} endpoint - API endpoint
   * @returns {Promise} - API response
   */
  async delete(endpoint) {
    return this.request(endpoint, {
      method: 'DELETE',
    });
  }
}

// Create and export API service instance
export const apiService = new ApiService();

// Specific API methods
export const articlesApi = {
  getAll: () => apiService.get(API_ENDPOINTS.articles),
  getById: (id) => apiService.get(`${API_ENDPOINTS.articles}/${id}`),
  create: (data) => apiService.post(API_ENDPOINTS.articles, data),
  update: (id, data) => apiService.put(`${API_ENDPOINTS.articles}/${id}`, data),
  delete: (id) => apiService.delete(`${API_ENDPOINTS.articles}/${id}`),
};

export const artistsApi = {
  getAll: () => apiService.get(API_ENDPOINTS.artists),
  getById: (id) => apiService.get(`${API_ENDPOINTS.artists}/${id}`),
  create: (data) => apiService.post(API_ENDPOINTS.artists, data),
  update: (id, data) => apiService.put(`${API_ENDPOINTS.artists}/${id}`, data),
  delete: (id) => apiService.delete(`${API_ENDPOINTS.artists}/${id}`),
};

export const concertsApi = {
  getAll: () => apiService.get(API_ENDPOINTS.concerts),
  getById: (id) => apiService.get(`${API_ENDPOINTS.concerts}/${id}`),
  create: (data) => apiService.post(API_ENDPOINTS.concerts, data),
  update: (id, data) => apiService.put(`${API_ENDPOINTS.concerts}/${id}`, data),
  delete: (id) => apiService.delete(`${API_ENDPOINTS.concerts}/${id}`),
};

export const contactApi = {
  sendMessage: (data) => apiService.post(API_ENDPOINTS.contact, data),
};
