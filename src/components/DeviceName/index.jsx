import { MidiContext } from "../MidiContext"
import { useContext } from "react"

export default function DeviceName() {

    const { midiOutput } = useContext(MidiContext)

    return <h1>{midiOutput?.name}</h1>
}