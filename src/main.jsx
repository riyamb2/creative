import React, { useRef, useState } from 'react'
import AddCreative from './addCreative'



export default function Main() {
    const color = useRef([
        "#ffaa00",
        "#fecea8",
        "#e5ddcb",
        "#fee5ad",
        "#353432"
    ])//hard coding color
    const [showDetail, setShowDetail] = useState(false);
    const handleShowDetail = () => { setShowDetail(pre => !pre); }
    const [selectColor, setSelectColor] = useState('');
    const [input, setInput] = useState();
    const [cardDetail, setCardDetail] = useState([]);
    const addCardDetail = (newObj) => {
        setCardDetail(pre => [newObj, ...pre]);
    }
    const handleChangeInput = (ele) => {
        setInput(ele.target.value)
    }
    const handleSelectColor = (color) => { setSelectColor(color) }
    return (
        <div className='split'>
            <div className={`mainscreen ${showDetail ? '' : ''}`}>
                <h1>Filter By:</h1>
                <div className='groupcolor'>
                    <div>
                        <p>color</p>
                        <div className='colors' >
                            {color.current.map((e, index) =>
                                <RoundCircle color={e} key={index} handleSelectColor={handleSelectColor} selectcolor={selectColor} />
                            )}
                        </div>
                    </div>
                    <div>
                        <p>Title / subtitle:</p>
                        <input type='text' onChange={handleChangeInput} placeholder='search across title and subtitle' />
                    </div>

                </div>
                <div style={{ display: "flex", gap: "15px" }}>
                    <div className="bar">
                        <div style={{ background: "black", width: `${cardDetail.length * 20}%`, height: "29px", borderRadius: '15px' }}></div>
                    </div> {cardDetail.length}/5 Creatives</div>
                <div>

                    <button onClick={handleShowDetail} disabled={(showDetail || cardDetail.length === 5) && true} >+ Add Creative</button>
                </div>
                
                    {cardDetail.filter(e => selectColor ? selectColor === e.color : true).filter(e => input ? (e.title).toLowerCase().includes(input) || (e.subTitle).toLowerCase().includes(input) : true).map((ele, index) => <Card e={ele} key={`${index} ${ele.title}`} />)}
            </div>
            {showDetail &&
                <AddCreative color={color.current} addCardDetail={addCardDetail} handleShowDetail={handleShowDetail} />
            }
        </div>
    )
}

export const RoundCircle = ({ color, handleSelectColor, selectcolor, ...props }) => (
    <div id={color} className='dot' style={{ backgroundColor: color, border: selectcolor === color && '2px solid black' }} onClick={() => selectcolor === color ? handleSelectColor('') : handleSelectColor(color)} />
)

const Card = (props) => (<div className='card' >
    <div className='container' style={{ backgroundColor: props.e.color }} >
        <div className='csscard'  >

            <p> {props.e.title} </p>
            <p> {props.e.subTitle} </p>
        </div>
    </div>
</div>)