import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories, setResultados, resultados}) => {

    const [inputValue, setInputValue] = useState('');

    // const [resultados, setResultados] = useState(5);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleAdd = (e)=>{
        setResultados((res)=>res+1);
    }

    const handleSus = (e)=>{
        if(resultados>=2){
            setResultados((res)=>res-1);
        }
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length>2){
            setCategories(cats => [inputValue, ...cats]);
            console.log(e);
            setInputValue('');
        }
        // console.log('Submit hecho');
        
    }

    return (
        <>
            <p>BUSQUEDA DE GIFS</p>
            <form onSubmit={handleSubmit}>
                <input 
                    id="gifs"
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="ESCRIBE AQUI LOS GIFS QUE QUIERES BUSCAR"
                />
            </form>
            <p>¿Cuantos resultados te interesa obtener?</p>
            <button onClick={handleSus}>-1</button>
            <button>{resultados}</button>
            <button onClick={handleAdd}>+1</button>

        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
