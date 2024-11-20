import React from 'react'
import {ResponsiveContainer, LineChart , Line , CartesianGrid , Tooltip , XAxis} from 'recharts'

import './chart.css'

export default function chart({title ,grid , data , dataKey}) {
  return (
    <div className='charts'>
        <h3 className="charTitle">{title}</h3>
        <ResponsiveContainer width={'100%'} aspect={4}>
            <LineChart data={data}>
                <XAxis dataKey='name' stroke='#5550bd' />
                <Line type={'monotone'} dataKey={dataKey} stroke='#5550bd'/>
                <Tooltip/>
          {grid &&  <CartesianGrid stroke='#e0dfdf' strokeDasharray="10"/>}
            </LineChart>
            
        </ResponsiveContainer>



    </div>
  )
}
