
import { MidiContext } from "../MidiContext"
import { useContext, useCallback } from "react"

export function RequestConfigurationButton() {

    const { midiOutput } = useContext(MidiContext)

    const handleOnClick = useCallback(() => {
        let configCharArray = [0xF0, 0x00, 0xF7]
        midiOutput?.send(configCharArray)
    });

    return <button onClick={handleOnClick}>Request configuration</button>

}