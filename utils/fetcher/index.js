export const Fetcher = async (url) => {
  const controller = new AbortController();
  const signal = controller.signal;

  try {
    const response = await fetch(url, { signal });
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (e) {
    controller.abort(); //abort the fetching when error
    throw new Error(e.message);
  }
};
