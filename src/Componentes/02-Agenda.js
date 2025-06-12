import React, { useEffect, useState } from 'react'
import { useFetchAgendaDia } from '../Hooks/useFetchAgendaDia';
import { useRangoAgenda } from '../Hooks/useRangoAgenda';
import Calendar from 'react-calendar';
import Select from 'react-select'
import DatePicker from 'react-date-picker'

export const Agenda = () => {

    const { rangoAgenda, defaultValue, selectedValue, setSelectedValue } = useRangoAgenda()
    const [horario, setHorario] = useState([]);
    const [valueDate, setValueDate] = useState(new Date());
    const { data, error, loading } = useFetchAgendaDia(!!valueDate && valueDate.toLocaleDateString(), selectedValue);

    useEffect(() => {
        if (error === null) {
            setHorario(data);
        }
    }, [data, error])

    const seleccionaRangoAgenda = (e) => {
        setSelectedValue(e.value)
    }

    return (
        <>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-3" >
                    <div className='div-calendar'>
                        <div className='div-form'>
                            <p className='p-label-form'> Rango de la agenda: </p>
                            <p className='p-parrafo'>Podras verificar tu agenda en rangos de 15, 30 y 60 minutos </p>
                            <Select options={rangoAgenda} defaultValue={defaultValue} onChange={seleccionaRangoAgenda} placeholder='Seleccione' />
                        </div>
                        <div className='div-calendar-children'>
                            <Calendar className='calendar-agenda' onChange={setValueDate} value={valueDate} />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-8 mt-3" >
                    <div className='div-agenda-diponible '>
                        {
                            loading ?
                                <p>Cargando...</p>
                                :
                                <table className="table table-striped table-responsive">
                                    <thead className="head-table">
                                        <tr>
                                            <th>Hora Inicial</th>
                                            <th>Horal Final</th>
                                            <th>Paciente</th>
                                            <th>Médico tratante</th>
                                        </tr>
                                    </thead>
                                    {
                                        (error === null) ?
                                            <tbody>
                                                {
                                                    horario.map(({ id, horaInicial, horaFinal, cliente, reponsableAtencion, estadoAtencion }) => {
                                                        return (
                                                            <tr key={id} >
                                                                <td > {horaInicial} </td>
                                                                <td > {horaFinal}</td>
                                                                <td > {cliente}</td>
                                                                <td > {reponsableAtencion}</td>
                                                                <td > {estadoAtencion}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                            :
                                            <p>No fue posible consultar la información</p>
                                    }
                                </table>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
