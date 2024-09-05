// src/components/Calculator.js
import React, { useState } from "react";

function Calculator() {
    const [num, setNum] = useState("0");
    const [oldNum, setOldNum] = useState("");
    const [operator, setOperator] = useState("");

    const inputNum = (e) => {
        const input = e.target.value;
        setNum(num === "0" ? input : num + input);
    };

    const clear = () => {
        setNum("0");
        setOldNum("");
        setOperator("");
    };

    const percentage = () => {
        setNum((parseFloat(num) / 100).toString());
    };

    const changeSign = () => {
        setNum((parseFloat(num) * -1).toString());
    };

    const handleOperator = (e) => {
        const operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum("0");
    };

    const calculate = () => {
        let result;
        switch (operator) {
            case "/":
                result = parseFloat(oldNum) / parseFloat(num);
                break;
            case "X":
                result = parseFloat(oldNum) * parseFloat(num);
                break;
            case "-":
                result = parseFloat(oldNum) - parseFloat(num);
                break;
            case "+":
                result = parseFloat(oldNum) + parseFloat(num);
                break;
            default:
                return;
        }
        setNum(result.toString());
        setOldNum("");
        setOperator("");
    };

    return (
        <div className="calculator">
            <div className="display">{num}</div>
            <div className="buttons">
                <button onClick={clear}>AC</button>
                <button onClick={changeSign}>+/-</button>
                <button onClick={percentage}>%</button>
                <button className="operator" value="/" onClick={handleOperator}>
                    /
                </button>
                <button value="7" onClick={inputNum}>
                    7
                </button>
                <button value="8" onClick={inputNum}>
                    8
                </button>
                <button value="9" onClick={inputNum}>
                    9
                </button>
                <button className="operator" value="X" onClick={handleOperator}>
                    X
                </button>
                <button value="4" onClick={inputNum}>
                    4
                </button>
                <button value="5" onClick={inputNum}>
                    5
                </button>
                <button value="6" onClick={inputNum}>
                    6
                </button>
                <button className="operator" value="-" onClick={handleOperator}>
                    -
                </button>
                <button value="1" onClick={inputNum}>
                    1
                </button>
                <button value="2" onClick={inputNum}>
                    2
                </button>
                <button value="3" onClick={inputNum}>
                    3
                </button>
                <button className="operator" value="+" onClick={handleOperator}>
                    +
                </button>
                <button className="zero" value="0" onClick={inputNum}>
                    0
                </button>
                <button value="." onClick={inputNum}>
                    .
                </button>
                <button className="operator" onClick={calculate}>
                    =
                </button>
            </div>
        </div>
    );
}

export default Calculator;
