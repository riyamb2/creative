import React, { useRef,useState } from 'react'
import { RoundCircle } from './main'

export default function AddCreative({color,addCardDetail,handleShowDetail}) {
    const title = useRef('');
    const subTitle = useRef('');
    const [selectColor,setSelectColor] = useState(color[0]);
    const handleSelectColor=(color)=>{setSelectColor(color)}
    const handleChangeTtitle=(e)=>{
        title.current = e.target.value;
    }
    const handleChangeSubTitle=(e)=>{
        subTitle.current = e.target.value;
    }
    const handleClick=()=>{
        if(!(title.current&&subTitle.current)) {
            alert("please fill title and subTitle")
            return ;
        }
        const obj ={
            title:title.current,
            subTitle:subTitle.current,
            color:selectColor
        }
        console.log(obj);
        addCardDetail(obj);
        handleShowDetail();
        
    }
  return (
    <div style={{    border: '2px solid black',
    padding: '16px',gap:"10px"}} >
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline"}}>
       <h3>Creative Creation</h3> 
       <span className="close"  onClick={handleShowDetail}>&times;</span>
    
        </div>
        <h5>Title</h5> 
        <input type="text" name="title" id="title" autoComplete='off' placeholder='this is a title' onChange={handleChangeTtitle} />
        <h5>subtitle</h5> 
        <input type="text" name="subtitle" id="subtitle" autoComplete='off' placeholder='this is a placeholder' onChange={handleChangeSubTitle} />
        <div>
            
        background color
        </div>
        <div className='colors'>

        {color.map((e,index)=>
        <RoundCircle color={e} key={index} selectcolor={selectColor} handleSelectColor={handleSelectColor} />
        )}
        </div>
        <button  className='success' onClick={()=>handleClick()} > Done </button>
    </div>
  )
}
