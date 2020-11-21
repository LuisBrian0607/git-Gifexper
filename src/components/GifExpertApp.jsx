import React,{useState} from 'react';
import {AddCategories} from './AddCategory';
import {Gitgrid} from './GifGrid';

const GifExpert = () => {

  const [categories, setCategories] = useState(['One Punch']);

  //funcion para agregar elementos al arreglo
  //const handleAdd=()=>{
  //  setCategories([...categories,'La capelucita Will'])
  // setCategories(cats=>[...cats,'Pokoyo']);
  //}

  return (
    <>
      <h2>GifExpert</h2>
      <AddCategories setCategories={setCategories}/>
      <hr />

      <ul>
        {
          categories.map(category => {
            return (
              <Gitgrid
               key={category}
               category={category}/>
            )
          })
        }
      </ul>
    </>
  )
}

export default GifExpert;