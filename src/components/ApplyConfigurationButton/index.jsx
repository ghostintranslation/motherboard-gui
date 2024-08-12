
import { MidiContext } from "../MidiContext"
import { ConfigurationContext } from "../ConfigurationContext"
import { useContext } from "react"

export function ApplyConfigurationButton() {

    const { midiOutput } = useContext(MidiContext)
    const { configuration } = useContext(ConfigurationContext)

    const handleOnClick = () => {
        for (var i = 0; i < configuration.settings.length; i++) {
            if (configuration.settings[i].value == null) {
                continue;
            }
            let config = { ...configuration };
            config.settings = [(({ id, value }) => ({ id, value }))(configuration.settings[i])];
            let configString = JSON.stringify(config)
            configString = configString.replace("null", "''")
            console.log(configString);
            let array = [];
            for (var j = 0; j < configString.length; j++) {
                array.push(configString.charCodeAt(j));
            }
            let configCharArray = [0xF0, 0x01, ...array, 0xF7]
            midiOutput.send(configCharArray)
        }
        let configCharArray = [0xF0, 0x00, 0xF7]
        midiOutput?.send(configCharArray)
    }

    if (!configuration) {
        return <></>
    }

    return <button onClick={handleOnClick}>Apply configuration</button>

}