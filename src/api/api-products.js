import axios from 'axios'

/**
 * Fetch list of products
 * @returns Promise
 */
const list = () => {
  return axios.get('/products')
}

export { list }
