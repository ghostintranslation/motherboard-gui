import { useEffect, useState, createContext, Children } from 'react'

export const MidiContext = createContext("");

export const MidiProvider = function ({ children }) {

    let [midiAccess, setMidiAccess] = useState();
    let [output, setOutput] = useState();
    let [input, setInput] = useState();

    useEffect(() => {
        function onMIDISuccess(midiAccess) {
            console.log("MIDI ready!");

            // Auto select first output after an event occurs
            midiAccess.onstatechange = (event) => {
                setOutput(midiAccess.outputs.values().next().value)
                setInput(midiAccess.inputs.values().next().value)
            };

            setMidiAccess(midiAccess);
        }

        function onMIDIFailure(msg) {
            console.error(`Failed to get MIDI access - ${msg}`);
        }

        // Request midi access with system exclusive permission
        navigator.requestMIDIAccess({ sysex: true }).then(onMIDISuccess, onMIDIFailure);

    }, []);


    // Auto select first output after midi access is obtained
    useEffect(() => {
        if (!midiAccess) {
            return;
        }
        setOutput(midiAccess.outputs.values().next().value)
        setInput(midiAccess.inputs.values().next().value)
    }, [midiAccess])

    useEffect(() => {
        if (!output) {
            return;
        }

        console.log(output)

        output.send([0xF0, 0x00, 0xF7])

    }, [output])

    return <MidiContext.Provider value={{ midiOutput: output, midiInput: input, midiAccess }}>{children}</MidiContext.Provider>
}