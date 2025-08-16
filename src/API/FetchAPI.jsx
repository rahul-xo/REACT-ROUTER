
import React from 'react'

export const FetchAPI =async () => {
    const url = `https://dummyjson.com/products`;
    
    try {
        const response=await fetch(url);
        const data=await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
