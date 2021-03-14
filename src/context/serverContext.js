import Axios from 'axios';

const SERVER_URL = process.env.REACT_APP_API_SERVER_URL || 'http://34.97.12.176:8080';

const api = ({
  url, type = 'get', param, contentType = 'application/json',
}) => Axios({
  method: type,
  url: `${SERVER_URL}${url}`,
  data: param,
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
    'Content-Type': contentType,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
    'Access-Control-Allow-Headers':
        'Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization',
  },
  withCredentials: true,
});

export default api;
