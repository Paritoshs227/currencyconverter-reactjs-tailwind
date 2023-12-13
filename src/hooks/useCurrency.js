import { useEffect, useState } from "react";

function useCurrency(currency) {   

    const [data, setData] = useState({});

    useEffect(() => {

        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`,)
        .then((response) => response.json())
		.then((response) => {
            setData(response[currency])  
        })  
		.catch(err => console.error(err));  
   
    }, [currency]);
    return data;
}

export default useCurrency;