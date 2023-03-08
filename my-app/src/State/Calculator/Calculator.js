import React from "react";

function Calculator() {
    const [result, setResult] = useState('');

    function handleClick(event) {
        setResult(result.concat(event.target.name));
    }

    function clear() {
        setResult('');
    }

    function backspace() {
        setResult(result.slice(0, -1));
    }

    function calculate() {
        try {
        setResult(eval(result).toString());
        } catch (error) {
        setResult('Error');
        }
    }
    
        return(
            <div className="calculator">
                <div   div className="display">{result}</div>
                    <div className="keypad">
                    <button className="button" onClick={clear}>AC</button>
                    <button className="button" onClick={backspace}>C</button>
                    <button className="button" name="/" onClick={handleClick}>/</button>
                    <button className="button" name="7" onClick={handleClick}>7</button>
                    </div>
            </div>
        )
    }
    
export default Calculator