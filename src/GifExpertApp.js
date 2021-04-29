import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


export const GifExpertApp = () => {
    //const categories = ['SNK', 'Toradora', 'One Piece']
    const [categories, setCategories] = useState(['Levi Ackerman'])
    const [resultados, setResultados] = useState(5);

    // const handleAdd = () =>{
    //     const agregar = 'One Punch';
    //     setCategories(cats => [...cats,agregar]);
    // }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories} setResultados = {setResultados} resultados={resultados}/>
            <hr></hr>
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={category} 
                            category = {category}
                            resultados = {resultados}
                        />))
                }
            </ol>
        </>
    )
}
