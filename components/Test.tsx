"use client"

import React from 'react'

export const Test = () => {
    const [data, setData] = React.useState([])
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGIyZmY4NWFjODA4YTAxNTQ4ZDE0ZTU5NGUzMDJlOSIsIm5iZiI6MTcyMjkxMTIxMi44Mzk2MDQsInN1YiI6IjY2YjAzOGFiYjk3NDY2OWZiY2M1ZmI2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bs0JmoMjcIfnHr7m04vUB7F0_qabu-MssySstvoluQY'
        }
    };


    React.useEffect(() => {
        fetch('https://api.themoviedb.org/3/authentication', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US?page=1', options)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch((e) => console.log(e))
    }, [])
    return (
        <div>
            {/* {data.map((val) => (
                <ul>
                    <li>{val.}</li>
                </ul>
            ))} */}
        </div>
    )
}




