import { useState } from 'react'

export const AddCategory = ( { onNewCategory } ) => {

  //Hook
  const [ inputValue, setInputValue ] = useState('');

  //Evento del Input
  const onInputChange = ( { target } ) => {
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();//Prevenir la carga de la página del submit del Form

    if(inputValue.trim().length >= 1) {
      //setCategories( categories => [ inputValue, ...categories ] );
      onNewCategory(inputValue.trim());
    }

    setInputValue('');
  }

  return (
    <form onSubmit={ onSubmit }>
      <input 
        type="text" 
        placeholder="Buscar Gifs"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}