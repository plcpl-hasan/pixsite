import React, { useEffect, useState } from 'react';

const Gallery = () => {
    const [picdata, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        const FetchingAPI = async () => {
            setLoading(true)
            try {
                const res = await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_APIKEY}&image_type=photo&page=${page}&per_page=10`)
                const data = await res.json()

                setData([...picdata, ...data.hits])
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        FetchingAPI()
    }, [page])
    // console.log(picdata)

    return (
        <div className='mx-5 my-5 text-center'>
            <div>
                {picdata?.map(picture => <div className="card w-full my-2" key={picture.id}>
                    <figure><img className='w-3/4 min-h-screen rounded-lg' src={picture.webformatURL} alt='gallery' /></figure>
                </div>)}
            </div>
            {loading ? <p>Loading...</p> : <button className='btn btn-secondary' onClick={() => setPage(page + 1)}>Load More</button>}


        </div>
    );
};

export default Gallery;