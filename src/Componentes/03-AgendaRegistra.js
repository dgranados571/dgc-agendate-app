import React, { useState } from 'react'
import { useRangoAgenda } from '../Hooks/useRangoAgenda';
import Calendar from 'react-calendar';
import Select from 'react-select'

export const AgendaRegistra = () => {

    const { rangoAgenda, defaultValue, setSelectedValue } = useRangoAgenda();
    const [valueDate, setValueDate] = useState(new Date());

    const seleccionaRangoAgenda = (e) => {
        setSelectedValue(e.value)
    }

    return (
        <div className='div-container'>
            <div className='div-calendar'>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12" >
                        <p className='p-parrafo'>Podras asignar el agendamiento de tus clientes en rangos de 15, 30 y 60 minutos </p>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-8" >
                        <p className='p-label-form'> Cliente </p>
                        <Select options={rangoAgenda} onChange={seleccionaRangoAgenda} placeholder='Seleccione' />
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-4" >
                        <p className='p-label-form'> Rango de la agenda: </p>
                        <Select options={rangoAgenda} onChange={seleccionaRangoAgenda} placeholder='Seleccione' />
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-4" >
                        <p className='p-label-form'> Hora Inicial: </p>
                        <Select options={rangoAgenda} onChange={seleccionaRangoAgenda} placeholder='Seleccione' />
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-4" >
                        <p className='p-label-form'> Hora Final: </p>
                        <Select options={rangoAgenda} onChange={seleccionaRangoAgenda} placeholder='Seleccione' />
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12" >
                        <div className='div-calendar-children'>
                            <Calendar className='calendar-agenda' onChange={setValueDate} value={valueDate} />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
