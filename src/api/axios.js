import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'e66b8bdb34833e7406396b9afcfbc05c',
    language: 'ko-KR',
  },
});

export default instance;
