import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEye, faUserDoctor } from '@fortawesome/free-solid-svg-icons'

const Servicios = () => {

    const [menuServicios, setMenuServicios] = useState([
        { element: 'buttom1', label: 'Nuestros servicios', icon: faEye, class: 'bottom-custom-active', state: true },
        { element: 'buttom2', label: 'Agregar servicio', icon: faPlus, class: 'bottom-custom', state: false },
        { element: 'buttom3', label: 'Operadores', icon: faUserDoctor, class: 'bottom-custom', state: false },
    ])

    const executeMenu = (e) => {
        setMenuServicios((elements) => {
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
            menuServicios.map((element) => {
                if (element.state) {
                    object = element;
                }
                return object;
            })
            switch (object.element) {
                case 'buttom1':
                    return (
                        <>MENU 1</>
                    )
                case 'buttom2':
                    return (
                        <>MENU 2</>
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
                <div className="col-12 col-sm-12 col-md-4 col-lg-3 " >
                    <div className='div-buttom-buscar-clientes'>
                        {
                            menuServicios.map((object) => {
                                return (
                                    <button name={object.element} className={object.class} onClick={executeMenu} >
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

export default Servicios