

function Fahrenheit({ setCelsius, fahrenheit, setFahrenheit }) {


    const handleFahrenheitChange = (e) => {
        const f = e.target.value;
        setFahrenheit(f);
        setCelsius(f === "" ? "" : (((f - 32) * 5) / 9).toFixed(2))
    }


    return (
        <div className=" space-x-4 p-3 overflow-hidden">
            <label>Fahrenheit:</label>
            <input
                type='number'
                value={fahrenheit}
                onChange={handleFahrenheitChange}
                placeholder=" Enter Fahrenheit"
                className=" border rounded-br-md px-2 focus:outline-none"
            />
        </div>
    )
}

export default Fahrenheit
    ;