import axios from 'axios';

// jest.mock('axios')

export const fetchShow = () => {
    return axios.get
      .then(res => res.data) // or res.data, however you want to set that up
  }