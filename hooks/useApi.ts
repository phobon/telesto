import useSWR from 'swr';

const fetcher = async (url: string): Promise<object | undefined> => {
  const res = await fetch(url);
  const newResult = await res.json();
  return newResult;
};

const useApi = (url: string): Array<object | undefined> => {
  const { data, error } = useSWR(url, fetcher);
  return [data, error];
};

export default useApi;