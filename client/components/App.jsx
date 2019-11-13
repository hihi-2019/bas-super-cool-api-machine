import React from 'react'
import { getForecast } from '../api/weather'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      weatherData: {}
    }
  }

  componentDidMount(){
    getForecast()
      .then(weatherData => {
        this.setState({
          weatherData: weatherData,
        })
      })
    
  }

  
  render(){
    const weather = this.state.weatherData.consolidated_weather
    return (
      <>
      <h1>Wellington weather Forecast</h1>
      {weather ? 
      <section>
        {weather.map((day, i) => {
          return <article key={i}>
            <p>Date {day.applicable_date}</p>
            <p>Forecast: {day.weather_state_name}</p>
            <p>Max Temp: {Math.floor(day.max_temp)} C</p>
            <br/>
          </article>
        })}
      </section>
      : <h1>Data loading, please wait...</h1>
      }
      </>
    )
  }
}

export default App
