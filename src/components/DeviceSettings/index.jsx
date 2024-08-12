import { ConfigurationContext } from "../ConfigurationContext"
import Input from "../Input";
import { useState, useContext, useEffect } from "react"

export default function DeviceSettings() {

    const { configuration, setConfiguration } = useContext(ConfigurationContext);
    console.log(configuration)
    return <ul>
        {configuration?.settings.map((setting, index) =>
            <li key={index}>
                <Input
                    name={setting.name}
                    step={setting.step}
                    value={setting.value}
                    defaultValue={setting.defaultValue}
                    min={setting.min}
                    max={setting.max}
                    onChange={(newVal) => {
                        setConfiguration((prevState) => ({

                            settings: prevState.settings.map(
                                el => el.name === setting.name ? { ...el, value: parseFloat(newVal) } : el
                            )

                        }));
                    }} />
            </li>
        )}
    </ul>
}
