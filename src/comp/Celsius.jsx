

function Celsius({ setFahrenheit, setCelsius, celsius }) {

    const handleCelsiusChange = (e) => {

        const c = e.target.value;

        setCelsius(c);

        setFahrenheit(c === "" ? "" : ((c  *  9)  /  5 +  32).toFixed(2))
    }


    return (
        <div className=" space-x-4 p-3 ml-5 overflow-hidden">
            <label>Celsius: </label>
            <input
            className=" border rounded-br-md px-2 focus:outline-none"
                type='number'
                value={celsius}
                onChange={handleCelsiusChange}
                placeholder=" Enter Celsius "
                
            />
        </div>
    )
}

export default Celsius
