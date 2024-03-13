import { useEffect, useState } from "react";

const useFetchPost = (url, body = null) => {
    const [data, setData] = useState(null);    
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : null,
                    signal: abortCont.signal,
                });

                if (!response.ok) {
                    throw Error('Could not fetch data');
                }
                
                const data = await response.json();
                console.log(data)
                setData(data);
                setIsPending(false);
                setError(null);
            } catch (err) {
                console.log(err)
                if (err.name === 'AbortError') {
                    console.log("Fetch Aborted");
                } else {
                    setError(err.message);
                    setIsPending(false);
                }
            }
        };

        fetchData();

        return () => abortCont.abort();
    }, [url, body, setData, setIsPending, setError]);

    return { data, isPending, error };
}

export default useFetchPost;