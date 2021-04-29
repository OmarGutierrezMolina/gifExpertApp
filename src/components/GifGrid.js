import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/GetGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category, resultados}) => {

    const {data:images,loading} = useFetchGifs(category, resultados);

    return (
        <>
        <h3 className="animate__animated animate__fadeInDown">{category}</h3>
        {loading && <p className="animate__animated animate__flash">Cargando...</p>}

        <div className="card-grid">
            {
                images.map(image =>(
                    <GifGridItem 
                        key={image.id}
                        {...image}
                    />
                ))
            }
        </div>
        </>
    )
}
