import axios from 'axios';

const getCards = async (url = 'https://dummyjson.com/products') => {
  try {
    return await axios.get(url);
  } catch (error: any) {
    throw new Error(`Could not fetch ${url}, ${error.message}`);
  }
};

export default getCards;
