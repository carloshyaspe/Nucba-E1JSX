import React, { useState } from 'react';
import {
  StyledButton,
  StyledContainer,
  StyledH4,
  StyledP,
} from './IngresarTareaStyled';


const IngresarTarea = (props) => {


  const [inputText,setInputText] = useState("")
  const [validar,setValidar]= useState(true)
  const manejarForm = (e)=>{
     setInputText(e.currentTarget.value)
  }
  const submit = (e) =>{
      e.preventDefault();
      if(inputText.trim()!==""){
          props.nuevaTarea(inputText)
          setInputText("")
          setValidar(true)
      }else{
          setValidar(false)
      }
  }

  return (
    <StyledContainer>
      <StyledH4>Mini to do list</StyledH4>
      
      <form className='form' onSubmit={submit}>
        <StyledP>Ingrese la tarea</StyledP>
        <input className='input'  value={inputText} onChange={manejarForm}/>
        <StyledButton className='btn-add'>Agregar </StyledButton>
      </form>
     {
        !validar &&
        <StyledP className='validacion'>añadí una tarea , por favor.</StyledP>
     }

    </StyledContainer>
  )
}

export default IngresarTarea