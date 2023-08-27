import { useState, useEffect } from "react";
import { search } from "./BooksAPI";
import { useDebounce } from "use-debounce";

const HookQuery = (query) => {
    const [searchBookQuery, setQuery] = useState([]);
    const [value] = useDebounce(query, 500);

    useEffect(() => {
        let isActive = true;
        if (value.length !== 0) {
            search(value).then((data) => {
                if (data.error) {
                    setQuery([]);
                } else {
                    if (isActive) {
                        setQuery(data);
                    }
                }
            });
        }
        return () => {
            isActive = false;
            setQuery([]);
        };
    }, [value]);
    return [searchBookQuery, setQuery];
};

export default HookQuery;