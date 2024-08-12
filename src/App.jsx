import { useState } from 'react'
import { MidiProvider } from './components/MidiContext'
import DeviceName from './components/DeviceName'
import DeviceSettings from './components/DeviceSettings'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ApplyConfigurationButton } from './components/ApplyConfigurationButton'
import { RequestConfigurationButton } from './components/RequestConfigurationButton'
import { ConfigurationProvider } from './components/ConfigurationContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MidiProvider>
        <ConfigurationProvider>
          <DeviceName />
          {/* <RequestConfigurationButton /> */}
          <DeviceSettings />
          <ApplyConfigurationButton />
        </ConfigurationProvider>
      </MidiProvider>
    </>
  )
}

export default App
