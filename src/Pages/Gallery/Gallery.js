import React, { useEffect } from 'react';
import { toggleLoading } from '../../Utils/ReduxToolkit/AuthSlice/AuthSlice';
import { useDispatch } from 'react-redux';

const Gallery = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        // const data = [1, 2, 2]

        dispatch(toggleLoading())

    }, [dispatch])
    return (
        <div>
            <h2>This is Gallery</h2>
        </div>
    );
};

export default Gallery;