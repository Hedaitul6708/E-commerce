import React from 'react'

export default function CardDe({ data }) {
    return (
        <div>
            <div className='bg-amber-100 p-5 rounded-xl w-30 h-50'>
                <div className='w-22'>
                <img src={data.image} alt="" />
            </div>
            <div className='text-center'>
                <h1>{data.name}</h1>
                <h1 className='text-center'>{data.items} items</h1>
            </div>
            </div>
        </div>
    )
}
