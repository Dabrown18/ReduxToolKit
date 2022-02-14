import axios from 'axios';

export const fetchArticlesApi = () => {
  return axios
    .get('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=EWrmCqczT8LBAAVxuUxgP7mL8MbFVpkP')
    .then(response => response.data)
    .catch(error => error);
};
