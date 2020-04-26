import React, { Component } from 'react';
import axios from 'axios'; 
class WeekContainer extends Component {
    state = { 
        fullData: [],
        dailyData: []
     }

    

    componentDidMount= ()=>{
        const weatherURL='http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=cda2fc8b296e7cadb2bbcdd353c3efb8';
    //    axios.get(weatherURL)
    //     .then(res => res)
    //     .then(data => {
    //       const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
    //       this.setState({
    //         fullData: data.list,
    //         dailyData: dailyData
    //       }, () => console.log(this.state))
    //     })
    axios.get(weatherURL)
    .then(res=>{
        console.log(res.data);
        console.log(res.data.list);
        this.setState({
            fullData: res.data,
            dailyData: null
        })
    })
    }

    render() { 
        
        return ( 
            <div>
                <h1>Whether App</h1>
            </div>
         );
    }
}
 
export default WeekContainer;