import axios from 'axios';

interface IHttpClientProps {
  baseURL: string;
}

export const httpClient = ({ baseURL }: IHttpClientProps) => {
  const api = axios.create({
    baseURL,
  });

  return api;
};
