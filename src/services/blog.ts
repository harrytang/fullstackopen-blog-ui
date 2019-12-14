/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import axios from 'axios';
//import IBlog from './../interfaces/Blog';

const baseUrl = '/api/blogs';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const create = (newObject: object, token: string) => {
  const config = {
    headers: { Authorization: `bearer ${token}` },
  };
  const request = axios.post(baseUrl, newObject, config);
  return request.then(response => response.data);
};

const update = (id: string, newObject: object, token: string) => {
  const config = {
    headers: { Authorization: `bearer ${token}` },
  };
  const request = axios.patch(`${baseUrl}/${id}`, newObject, config);
  return request.then(response => response.data);
};

const put = (id: string, newObject: object, token: string) => {
  const config = {
    headers: { Authorization: `bearer ${token}` },
  };
  const request = axios.put(`${baseUrl}/${id}`, newObject, config);
  return request.then(response => response.data);
};

const remove = (id: string, token: string) => {
  const config = {
    headers: { Authorization: `bearer ${token}` },
  };
  const request = axios.delete(`${baseUrl}/${id}`, config);
  return request.then(response => response.data);
};

export default { getAll, create, update, remove, put };
