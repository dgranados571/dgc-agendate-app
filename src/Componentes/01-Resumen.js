import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCheck, faArrowsDownToPeople } from '@fortawesome/free-solid-svg-icons'
import { Agenda } from './02-Agenda'
import '../css/resumen.css'

export const Resumen = ({ setStateMenu }) => {

    const actionGestionCliente = () => {
        setStateMenu('MENU1')
    }

    const actionGestionServicios = () => {
        setStateMenu('MENU2')
    }

    return (
        <>
            <div className='div-container'>
                <div className='div-e-clientes'>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 mt-3" >
                            <div className='div-e-clientes-children'>
                                <div className='div-e-clientes-children-clientes'>
                                    <FontAwesomeIcon className='icon-users-total' icon={faUserCheck} />
                                    <div>
                                        <p className='p-element-cliente-1'>0</p>
                                        <p className='p-element-cliente-2' >Total Clientes</p>
                                    </div>
                                </div>
                                <div className='link-e-clientes'>
                                    <button className='btn btn-link a-link-redirect' onClick={actionGestionCliente} >
                                        Gestionar clientes
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 mt-3" >
                            <div className='div-e-clientes-children'>
                                <div className='div-e-clientes-children-clientes'>
                                    <FontAwesomeIcon className='icon-users-total' icon={faArrowsDownToPeople} />
                                    <div>
                                        <p className='p-element-cliente-1'>0</p>
                                        <p className='p-element-cliente-2' >Total Servicios</p>
                                    </div>
                                    <div>
                                        <p className='p-element-cliente-1'>0</p>
                                        <p className='p-element-cliente-2' >Total Operadores </p>
                                    </div>
                                </div>
                                <div className='link-e-clientes'>
                                    <button className='btn btn-link a-link-redirect' onClick={actionGestionServicios} >
                                        Gestionar Servicios
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Agenda />
                </div>
            </div>
        </>
    )
}
