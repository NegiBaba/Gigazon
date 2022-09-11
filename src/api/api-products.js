import axios from 'axios'

const list = () => {
  return axios.get('/products')
}

const put = (product, quantity) => {
  return axios.post('/cart', {
    id: product.id,
    name: product.name,
    quantity
  })
}

export { list, put }
