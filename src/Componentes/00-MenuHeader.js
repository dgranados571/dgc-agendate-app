import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSignOut } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

export const MenuHeader = ({ setStateMenu, stateMenu }) => {

    const navigate = useNavigate();

    const menuLateral = [
        {
            nombreItem: 'MENU0',
            className: 'btn btn-link a-buttom-active',
            iconMenu: faBars,
            menuLabel: 'Resumen'
        },
        {
            nombreItem: 'MENU1',
            className: 'btn btn-link a-buttom',
            iconMenu: faBars,
            menuLabel: 'Clientes'
        },
        {
            nombreItem: 'MENU2',
            className: 'btn btn-link a-buttom',
            iconMenu: faBars,
            menuLabel: 'Servicios'
        },
        {
            nombreItem: 'MENU3',
            className: 'btn btn-link a-buttom',
            iconMenu: faBars,
            menuLabel: 'Agenda'
        },
        {
            nombreItem: 'MENU4',
            className: 'btn btn-link a-buttom',
            iconMenu: faBars,
            menuLabel: 'Configuración'
        },
    ]

    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        selectedClearELement(stateMenu)
        selectedClearELementResponsive(stateMenu)
    }, [stateMenu])

    const selectMenu = (e) => {
        setStateMenu(e.target.name);
    }

    const selectMenuResponsive = (menuItem) => {
        setStateMenu(menuItem);
    }

    const setLabelSelected = () => {
        const item = menuLateral.find(el => el.nombreItem === stateMenu);
        if (item) {
            return (
                <p className='dasboard-label-header-menu'>{item.menuLabel}</p>
            )
        } else {
            <></>
        }
    }

    const selectedClearELement = (e) => {
        const elementsNav = document.querySelectorAll('#nav-menu > .btn');
        elementsNav.forEach((element) => {
            element.setAttribute('class', (e === element.name) ? 'btn btn-link a-buttom-active classControl' : 'btn btn-link a-buttom classControl')
            return element;
        })
    }

     const selectedClearELementResponsive = (e) => {
        const elementsNav = document.querySelectorAll('#nav-menu-responsive > .btn');
        elementsNav.forEach((element) => {
            element.setAttribute('class', (e === element.name) ? 'btn btn-link a-buttom-active classControl' : 'btn btn-link a-buttom classControl')
            return element;
        })
    }

    const actionLogout = () => {
        navigate('/zona-agendate');
    }

    return (
        <>
            <div className='div-header'>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-1 col-lg-2"></div>
                    <div className="col-12 col-sm-12 col-md-8 col-lg-8" >
                        <nav id='nav-menu' className="nav flex-row div-nav-header">
                            {
                                menuLateral.map((itemMenu, index) => {
                                    return (
                                        <button name={itemMenu.nombreItem} className={itemMenu.className} onClick={selectMenu}>{itemMenu.menuLabel} </button>
                                    )
                                })
                            }
                        </nav>
                    </div>
                    <div className="col-12 col-sm-12 col-md-3 col-lg-2" >
                        <button className='btn btn-link a-link-cerrar-sesion' onClick={actionLogout}>
                            Cerrar sesión
                        </button>
                    </div>
                </div>
            </div>
            <div className="div-header-reposive">
                <FontAwesomeIcon icon={faBars} className='dasboard-icon-header-menu' onClick={() => setOpenMenu(true)} />                
                {
                    setLabelSelected()
                }
            </div>
            <div className={openMenu ? 'div-menu-lateral-padre active' : 'div-menu-lateral-padre'} onClick={() => setOpenMenu(false)} >
                <div className='div-menu-lateral'>
                    <div id='nav-menu-responsive' className='div-dashboard-info-padre'>
                        {
                            menuLateral.map((itemMenu, index) => {
                                return (
                                    <button name={itemMenu.nombreItem} className={itemMenu.className} onClick={()=> selectMenuResponsive(itemMenu.nombreItem)}>
                                        <FontAwesomeIcon icon={itemMenu.iconMenu} className='icon-menu-lateral' />
                                        <p className='m-0'>{itemMenu.menuLabel} </p>
                                    </button>
                                )
                            })
                        }
                        <div className='btn btn-link a-buttom-active' onClick={actionLogout}>
                            <FontAwesomeIcon icon={faSignOut} className='btn btn-link a-link-cerrar-sesion' />
                            <p className='m-0'>Cerrar sesión </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
