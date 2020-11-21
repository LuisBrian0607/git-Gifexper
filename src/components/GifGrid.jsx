import React, { useState, useEffect } from 'react';
import {useFechGifs} from './hooks/useFetchGifs';
import {GifGridItem} from './GifGridItems';
//import {getGif} from './helpers/getGif';

export const Gitgrid = ({ category }) => {
    //const [images, setImages] = useState([]);
    const{data,loading}=useFechGifs(category);

  //  useEffect(() => {
    //    getGif(category)
     //   .then(setImages);
    //}, [category]);

    return (
        <>
        <h3>{category}</h3>  
        {loading &&<p>Loading</p>}
    
       <div className="card-grid">
                    
                {
                    data.map(img => (
                        <GifGridItem
                           key={img.id}
                           {...img}
                        />
                    ))
                }           
            </div>
        </>
    )
}