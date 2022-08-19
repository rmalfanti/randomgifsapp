import { useState } from "react";
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {
  //NCjVOqP27mr5KmQ1lIYHiY6EYWP3jIG6
  const [ categories, setCategories ] = useState(['Kung fu', 'Karate']);

  const onAddCategory = ( newCategory ) => {
    //setCategories( ['Valorant',...categories] );

    if( categories.includes(newCategory) ) return;

    setCategories( [ newCategory, ...categories] );
  }

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input - Envia el metodo onAddCategory al componente AddCategory*/}
      <AddCategory 
        // setCategories={ setCategories } 
        onNewCategory = { onAddCategory  }
      />

      <button onClick={ onAddCategory }>Agregar</button>

      {/* Listado de Gifs */}
      { categories.map( category => (
        <GifGrid 
          key={ category } 
          category={ category } />
        ))
      }
        
    </>
  )
}