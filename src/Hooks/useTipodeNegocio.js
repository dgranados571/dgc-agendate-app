import { useState } from 'react'

export const useTipodeNegocio = () => {

    const [tipoNegocios, setTipoNegocios] = useState([
        { value: 'Academia danza y baile', label: 'Academia danza y baile' },
        { value: 'Barbería', label: 'Barbería' },
        { value: 'Centro de estetica', label: 'Centro de estetica' },
        { value: 'Centro deportivo', label: 'Centro deportivo' },
        { value: 'Clases particulares', label: 'Clases particulares' },
        { value: 'Consultorio médico', label: 'Consultorio médico' },
        { value: 'Estilista', label: 'Estilista' },
        { value: 'Fisioterapeuta', label: 'Fisioterapeuta' },
        { value: 'Gimnasio', label: 'Gimnasio' },
        { value: 'Peluquería', label: 'Peluquería' },
        { value: 'Personal trainer', label: 'Personal trainer' },
        { value: 'Servicio manicure y pedicure', label: 'Servicio manicure y pedicure' },
        { value: 'Spa', label: 'Spa' },
        { value: 'Veterinaria', label: 'Veterinaria' },
        { value: 'Yoga meditación', label: 'Yoga Meditación'},
        { value: 'Otro', label: 'Otro'}
    ])

    return {
        tipoNegocios,
        setTipoNegocios
    }

}
