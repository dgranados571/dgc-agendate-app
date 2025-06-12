import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEye } from '@fortawesome/free-solid-svg-icons'
import { RegistroClientes } from './Clientes/RegistroClientes'
import { ListaClientes } from './Clientes/ListaClientes'

export const Clientes = () => {

    const [menuClientes, setMenuClientes] = useState([
        { element: 'buttom1', label: 'Listado de clientes', icon: faEye, class: 'bottom-custom-active', state: true },
        { element: 'buttom2', label: 'Cliente nuevo', icon: faPlus, class: 'bottom-custom', state: false },
    ])

    const executeMenuClientes = (e) => {
        setMenuClientes((elements) => {
            const hMap = elements.map((element) => {
                element.class = (e.target.name === element.element) ? 'bottom-custom-active' : 'bottom-custom'
                element.state = (e.target.name === element.element) ? true : false
                return element
            })
            return hMap;
        });
    }

    const displayMenu = () => {
        let object = {};
        menuClientes.map((element) => {
            if (element.state) {
                object = element;
            }
            return object;
        })
        switch (object.element) {
            case 'buttom1':
                return (
                    <ListaClientes />
                )
            case 'buttom2':
                return (
                    <RegistroClientes />
                )
            default:
                return (
                    <></>
                )
        }
    }

    return (
        <div className='div-container'>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 col-lg-3 " ></div>
                <div className="col-12 col-sm-12 col-md-8 col-lg-9 " >
                    <div className='div-buscar-clientes'>
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 div-buscar-clientes-element " >
                                <h4 >Buscar clientes: </h4>
                            </div>
                            <div className="col-12 col-sm-6 col-md-5 col-lg-7 " >
                                <input type="text" name='filtroCliente' className='input-buscar-cliente' placeholder='nombre, apellido, correo, tipo documento...' autoComplete='on' />
                            </div>
                            <div className="col-12 col-sm-12 col-md-3 col-lg-2 " >
                                <button className='bottom-custom-buscar-cliente' > Buscar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 col-lg-3 " >
                    <div className='div-buttom-buscar-clientes'>
                        {
                            menuClientes.map((object) => {
                                return (
                                    <button name={object.element} className={object.class} onClick={executeMenuClientes} >
                                        <FontAwesomeIcon icon={object.icon} /> {object.label}
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-8 col-lg-9 " >
                    <div className='div-style-form-clientes '>
                        {
                            displayMenu()
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
