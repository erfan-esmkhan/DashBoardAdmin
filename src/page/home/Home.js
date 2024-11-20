import React from "react"
import Feature from './../../component/features/Feature'
import Chart from './../../component/chart/chart'
import './Home.css'
import { xAxisData } from "../../datas"
import WidgetSm from "../../component/widgetSm/widgetSm"
import WidgetLg from "./../../component/WidgetLg/WidgetLg"


export default function Home() {
  return (
    <div className="home">
        <Feature/>
        <Chart grid data={xAxisData} title='Month Sale' dataKey = 'Sale'/>
        <div className="homeWidget">
            <WidgetSm/>
            <WidgetLg/>
        </div>
      </div>
   
  )
}
