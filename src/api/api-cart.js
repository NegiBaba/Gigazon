import axios from 'axios'

/**
 * Add a product to the cart
 * @param {Object} product product object containing id and name
 * @param {Number} quantity quantity of the product
 * @returns Promise
 */
const put = (product, quantity) => {
  return axios.post('/cart', {
    id: product.id,
    name: product.name,
    quantity
  })
}

export { put }
