import { useState, FormEvent } from "react";
import axios from "axios";

export const useField = (
  type: string
): {
  type: string;
  value: string;
  onChange: (event: React.FormEvent) => void;
} => {
  const [value, setValue] = useState("");

  const onChange = (event: React.FormEvent): void => {
    setValue((event.target as HTMLInputElement).value);
  };

  return {
    type,
    value,
    onChange
  };
};

interface ResourceObject {
  [key: string]: any;
}

export const useResource = (
  baseUrl: string,
  token: string | null = null
): any => {
  const [objects, setObjects] = useState<ResourceObject[]>([]);

  /**
   * get all objects
   * @param token
   */
  const getAll = (token: string | null = null): void => {
    let config = {};
    if (token !== null) {
      config = {
        headers: { Authorization: `bearer ${token}` }
      };
    }
    const request = axios.get(baseUrl, config);
    request.then(response => setObjects(response.data));
  };

  /**
   * create an object
   * @param newObject
   * @param token
   */
  const create = (
    newObject: object,
    token: string | null = null
  ): Promise<ResourceObject> => {
    let config = {};
    if (token !== null) {
      config = {
        headers: { Authorization: `bearer ${token}` }
      };
    }
    const request = axios.post(baseUrl, newObject, config);
    return request.then(response => response.data);
  };

  /**
   * replace an object
   * @param id
   * @param newObject
   * @param token
   */
  const update = (
    id: string,
    newObject: object,
    token: string | null = null
  ): Promise<ResourceObject> => {
    let config = {};
    if (token !== null) {
      config = {
        headers: { Authorization: `bearer ${token}` }
      };
    }
    const request = axios.patch(`${baseUrl}/${id}`, newObject, config);
    return request.then(response => response.data);
  };

  /**
   * update an object
   * @param id
   * @param newObject
   * @param token
   */
  const put = (
    id: string,
    newObject: object,
    token: string | null = null
  ): Promise<ResourceObject> => {
    let config = {};
    if (token !== null) {
      config = {
        headers: { Authorization: `bearer ${token}` }
      };
    }
    const request = axios.put(`${baseUrl}/${id}`, newObject, config);
    return request.then(response => response.data);
  };

  /**
   * remove object
   * @param id
   * @param token
   */
  const remove = (id: string, token: string | null = null): Promise<void> => {
    let config = {};
    if (token !== null) {
      config = {
        headers: { Authorization: `bearer ${token}` }
      };
    }
    const request = axios.delete(`${baseUrl}/${id}`, config);
    return request.then(response => response.data);
  };

  const services = {
    getAll,
    create,
    update,
    remove,
    put
  };

  return [objects, services];
};
