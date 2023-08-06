import { useEffect, useState } from "react";

function useFetch(url, _options) {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);
  let abortController = new AbortController();
  let signal = abortController.signal;
  let [options, setOptions] = useState(_options);
  useEffect(() => {
    console.log(options);
    setLoading(true);
    fetch(url, {
      signal,
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
      });
    return () => {
      abortController.abort();
    };
  }, [url, options]);
  return { data, loading, error };
}
export default useFetch;
