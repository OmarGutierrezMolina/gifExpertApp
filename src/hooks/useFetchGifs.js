import { useState, useEffect } from "react"
import { getGifs } from "../helpers/GetGifs";


export const useFetchGifs = (category, resultados) =>{
    const [state, setState] = useState({
        data:[],
        loading:true
    });

    useEffect(()=>{
        getGifs(category,resultados)
            .then(imgs => {
                // setTimeout(()=>{
                    // console.log(imgs);
                setState({
                    data:imgs,
                    loading:false,
                })
                // },1500)
            })
    },[category])


    return state; //loading en true
}