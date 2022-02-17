import React,{useState} from 'react'
import data from './data'
import './app.css'
import Lorem from './Lorem'



const App = () => {
  const [list,setList] = useState([])
  const [count,setCount] = useState(1)
  const generator = ()=>{
    if(count<0){
      setCount(1)
      setList(data.splice(0,1))
    }
    const number  = parseInt(count)
    setList(data.splice(0,number))
  }
  return (
    <div className='main-body'>
      <div className='fixed-div' >

      <h1>Lorem Ipsum Generator</h1>
    <input type='number' placeholder='Number of Paragraphs' onChange={(e)=>{setCount(e.target.value)}}  />
    <button className='button-gen' onClick={generator}>Generate</button>

      </div>
   
    


  {list &&  <Lorem list={list}/>}
    </div>
  )
}

export default App