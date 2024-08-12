import { useState } from "react"

export default function Input({ name, step, min, max, value, defaultValue, onChange }) {
    let [val, setVal] = useState(value || defaultValue);

    return <>
        <div>
            <label>
                {name}
                <input
                    type="number"
                    step={step}
                    value={val}
                    min={min}
                    max={max}
                    onChange={e => {
                        setVal(e.target.value)
                        if (onChange) {
                            onChange(e.target.value);
                        }
                    }} />
                {" "}
                (default: {defaultValue})
            </label>
        </div>
    </>
}
