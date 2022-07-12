import './Charts.css'; 
import ChartBar from './ChartBar'; 


const Charts = props =>{
    return
    <div className ="chart"> 
    {props.dataPoints.map(dataPoint => <ChartBar> </ChartBar>)}

    </div>; 
}; 

export default Charts; 