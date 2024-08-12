import { useEffect, useState, createContext, useContext } from 'react'
import { MidiContext } from "../MidiContext"
import { byteToString } from "../../utils/String"

export const ConfigurationContext = createContext();

export const ConfigurationProvider = function ({ children }) {

    const { midiInput } = useContext(MidiContext)
    let [configuration, setConfiguration] = useState();

    useEffect(() => {
        if (!midiInput) {
            setConfiguration(null);
            return;
        }

        console.log("midiInput.onmidimessage")
        midiInput.onmidimessage = (message) => {
            // console.log(JSON.parse(byteToString(message.data)))
            let conf = JSON.parse(byteToString(message.data));
            // conf.settings.splice(1); // TODO: Find why we can't send longer messages
            setConfiguration(conf);
        };

    }, [midiInput])


    return <ConfigurationContext.Provider value={{ configuration, setConfiguration }}>{children}</ConfigurationContext.Provider>
}