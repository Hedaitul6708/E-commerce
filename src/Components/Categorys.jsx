import React, { useEffect, useState } from 'react'
import CardDe from './CardDe';

const Categorys = () => {
    const [data, setdata]= useState([]);
    useEffect(()=>{
        fetch("/Categorys.json").then((res)=> res.json()).then((data)=> setdata(data))
    },[])
    console.log(data)
  return (
    <div>
            <h1 className='text-left mt-20 text-4xl'>Featured Categories</h1>
        <div className='text-left flex gap-2 0 mt-5'>
            {
                data.map((data)=>
                <CardDe key={data.id} data={data}></CardDe>
                )
            }
        </div>
    </div>
  )
}

export default Categorys
