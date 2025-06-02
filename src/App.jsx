import { useState } from "react";
import Frhrenheit from "./comp/Fahrenheit"
import Celsius from "./comp/Celsius"


function App() {
  const [celsius, setCelsius] = useState('')
  const [fahrenheit, setFahrenheit] = useState('')
  return (
    <div className=" overflow-hidden">
      <h1 className=" flex justify-center p-7 shadow bg-yellow-100">CELSIUS  ⇄ FAHRENHEIT APP</h1>
      <div className=" flex flex-col h-screen items-center justify-center -translate-y-20">

        <Celsius celsius={celsius} setCelsius={setCelsius} setFahrenheit={setFahrenheit} />
        <p className=" rotate-90">⇄</p>
        <Frhrenheit fahrenheit={fahrenheit} setFahrenheit={setFahrenheit} setCelsius={setCelsius} />
      </div>
    </div>
  )
}

export default App
