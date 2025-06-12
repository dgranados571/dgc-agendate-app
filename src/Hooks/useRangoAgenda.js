import { useState } from 'react'

export const useRangoAgenda = () => {

    const [rangoAgenda, setRangoAgenda] = useState([
        { value: '15M', label: 'Cada 15 minutos' },
        { value: '30M', label: 'Cada 30 minutos' },
        { value: '1M', label: 'Cada Hora' }
    ])

    const [defaultValue, setDefaultValue] = useState(rangoAgenda[2])
    const [selectedValue, setSelectedValue] = useState(rangoAgenda[2].value)

    return {
        rangoAgenda,
        setRangoAgenda,

        defaultValue,
        setDefaultValue,

        selectedValue,
        setSelectedValue
    }
}
