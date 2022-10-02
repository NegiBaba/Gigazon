import axios from 'axios'

/**
 * Fetch list of products
 * @returns Promise
 */
const list = () => {
  return axios.get('/api/products')
}

/**
 * Method to filter the list of produts w.r.t. the selected category
 * @param {String} query category by which products should be filtered
 * @returns List of items fetched from server
 */
const filter = (query) => {
  return axios.get(`/api/filter?filter=${query}`)
}

export { list, filter }
