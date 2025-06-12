import { useState } from 'react'

export const usePaises = () => {

    const [paises, setPaises] = useState([
        { value: 'Argentina', label: 'Argentina', indicativo: '+54', placeHolder: 'Ej: 1234 12-3456' },
        { value: 'Bolivia', label: 'Bolivia', indicativo: '+591', placeHolder: 'Ej: 1234 - 1234' },
        { value: 'Chile', label: 'Chile', indicativo: '+56', placeHolder: 'Ej: 9-59051234' },
        { value: 'Colombia', label: 'Colombia', indicativo: '+57', placeHolder: 'Ej: (311) 1234567' },
        { value: 'Costa Rica', label: 'Costa Rica', indicativo: '+506', placeHolder: 'Ej: (506) 12345678' },
        { value: 'Ecuador', label: 'Ecuador', indicativo: '+593', placeHolder: 'Ej: 9-12345678' },
        { value: 'España', label: 'España', indicativo: '+34', placeHolder: 'Ej: 631-1234567' },
        { value: 'USA', label: 'Estados unidos (EEUU)', indicativo: '+1', placeHolder: 'Ej: (917) 1234567' },
    ])

    return {
        paises,
        setPaises
    }
}
