import { useState } from 'react'

export const useTiposDocumentos = () => {

    const [tiposDocumentos, setTiposDocumentos] = useState([

        { value: 'C.C', label: 'Cédula de ciudadania' },
        { value: 'C.E', label: 'Cédula de extranjeria' },
        { value: 'PASS', label: 'Pasaporte' },
        { value: 'NIT', label: 'NIT' }
    ])

    return {
        tiposDocumentos,
        setTiposDocumentos
    }

}
