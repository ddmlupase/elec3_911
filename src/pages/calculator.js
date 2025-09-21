// additional exercise only

import React, { useState, useEffect } from "react";

function Calculator() {
    const [num1, setNum1] = useState("");
    const [operation, setOperation] = useState("+");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("");


    useEffect(() => {
            const a = parseFloat(num1);
            const b = parseFloat(num2);
            let res = "";
            if (operation === "+") {
                res = a + b;
            }
              else if (operation === "-") {
                res = a - b;
            } else if (operation === "*") {
                res = a * b;
            } else if (operation === "/") {
                res = a / b ;
            } else if (operation === "%") {
                res = a % b;
            }
            setResult(res);
        }
    , [num1, num2, operation]);


    return (
        <div>
            <h1>Calculator</h1>
            <h2>Result: {result}</h2>
            <form>
                <div className="form-group">
                    <label>First Number:</label>
                    <input
                        type="number"
                        className="form-control"
                        value={num1}
                        required
                        onChange={(e) => setNum1(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Operation:</label>
                    <select
                        className="form-control"
                        value={operation}
                        onChange={(e) => setOperation(e.target.value)}
                    >
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                        <option value="%">%</option>
                    </select>
                </div>
                <div className="form-group mb-5">
                    <label>Second Number:</label>
                    <input
                        type="number"
                        className="form-control"
                        value={num2}
                        required
                        onChange={(e) => setNum2(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Calculator;
