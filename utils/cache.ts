import cache from "memory-cache";

export const cachedFetch = async (url: string) => {
  const cachedResponse = cache.get(url);
  if (cachedResponse) {
    return cachedResponse;
  } else {
    const hours = 0.5;
    const response = await fetch(url);
    const data = await response.json();
    cache.put(url, data, hours * 60 * 60 * 1000);
    return data;
  }
};

export const regularFetch = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
