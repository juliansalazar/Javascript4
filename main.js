import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { baseUrl } from './src/data/config';
import {UserCard} from './src/components/UserCard';

const usersDom = document.querySelector('#usersDom');

window.addEventListener('DOMContentLoaded', () => {
  const urlUsers = baseUrl({path: '/users', limit: 12})
  fetch(urlUsers)
    .then((response) => {
      const {ok, status, statusText} = response
      if (!ok) {
        throw new Error(response.status)
      }
      return response.json()
    })
    .then(({users, total, skip, limit}) => {
      users.map((user) => {
        usersDom.appendChild(UserCard(user));
      })
    })
});