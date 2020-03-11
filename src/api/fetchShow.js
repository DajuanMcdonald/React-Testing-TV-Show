import axios from 'axios';

// jest.mock('axios')

const fetchShow = () => {
    return axios.get('https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes')
      .then(res => {
          return res;
      })
  }
export default fetchShow;