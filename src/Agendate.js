import React, { useState } from 'react'
import { Resumen } from './Componentes/01-Resumen';
import { MenuHeader } from './Componentes/00-MenuHeader'
import { Clientes } from './Componentes/04-Clientes';
import { AgendaRegistra } from './Componentes/03-AgendaRegistra';
import Servicios from './Componentes/05-Servicios';

const Agendate = () => {

    const [stateMenu, setStateMenu] = useState('MENU0');

    const componentMenu = () => {
        switch (stateMenu) {
            case 'MENU0':
                return (
                    <Resumen setStateMenu={setStateMenu} />
                )
            case 'MENU1':
                return (
                    <Clientes />
                )
            case 'MENU2':
                return (
                    <Servicios />
                )
            case 'MENU3':
                return (
                    <AgendaRegistra />
                )
            case 'MENU4':
                return (
                    <div className='div-container'>
                        <h4 className='titulo-nav'>Configuración</h4>
                    </div>
                )
            default:
                return (
                    <Resumen />
                )
        }
    }

    return (
        <>
            <MenuHeader setStateMenu={setStateMenu} stateMenu={stateMenu} />
            <div className="div-header-padre">
                {
                    componentMenu()
                }
            </div>
        </>
    )
}

export default Agendate
