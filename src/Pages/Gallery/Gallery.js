import React, { useEffect, useState } from 'react';

const Gallery = () => {
    const [picdata, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalpage, setTotalPage] = useState(0);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const FetchingAPI = async () => {
            setLoading(true)
            try {
                const res = await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_APIKEY}&image_type=photo&page=${page}&per_page=10`)
                const data = await res.json()
                setData([...picdata, ...data.hits])
                setTotalPage(data.totalHits / 10)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        FetchingAPI()
    }, [page])
    // console.log(picdata)
    // console.log(totalpage)

    return (
        <div className='mx-5 my-5 text-center'>
            <h1 className="text-4xl font-bold">Pixsite Gallery</h1>
            <div className="">
                {picdata?.map(picture => <div className="card w-full my-2" key={picture.id}>
                    <figure><img className='w-3/4 h-auto rounded-lg' src={picture.webformatURL} alt='gallery' /></figure>
                </div>)}
            </div>
            <button className='btn btn-secondary' onClick={() => setPage(page + 1)}>{loading ? "Loading..." : "Load More"}</button>

        </div>
    );
};

export default Gallery;