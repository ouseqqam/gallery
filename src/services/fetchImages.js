import axios from 'axios'

const accessKey = '6J72d2NBoAByHgti3hvhVHVfYzavJG2tyJ_R0XuD65Y'
const url = "https://api.unsplash.com"

export const fetchImages = async () => {
  try {
      const res = await axios.get(`${url}/photos/random?client_id=${accessKey}&count=60`)
      return res.data
  } catch (err) {
    console.log(err)
  }
}

export const fetchImage = async (id) => {
  try {
    const res = await axios.get(`${url}/photos/${id}?client_id=${accessKey}`)
    return res.data
  } catch (err) {
    console.log(err)
  }
}