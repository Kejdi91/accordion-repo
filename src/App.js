import {useState} from "react";
import "./App.css";

function App(){
  
  const [selected,setSelected]=useState(null);
  const toggle = (i)=>{
    if(selected === i){
      return setSelected(null);

    }
    setSelected(i);
  }

  return (
    <div className="wrapper">
      <div className="accordion">
        
        {data.map((item,i)=>(
          <div className="item">
            <div className="title" onClick={()=>toggle(i)}>
              <h2>{item.question}</h2>
              <span>{selected == i ? '-' : '+'}</span>
            </div>
            <div className={selected == i ? 'content show' : 'content'}>{item.answer} </div>
          </div>

        
        ))}
      </div>
    </div>
  )
   

}

const data = [
  {
    question:"Pytja 1",
    answer:"Ne cfare date filloj europiani ?",
  },

  {
    question:"Pytja 2",
    answer:"Kush doli golashenuesi me i miri i europianit ?",
  },

  {
    question:"Pytja 3",
    answer:"Kush skuader e fitoj europianin ?",
  },

  {
    question:"Pytja 4",
    answer:"Kush u cilesua si lojtari me i mire i europianit ?",
  },



]

export default App;