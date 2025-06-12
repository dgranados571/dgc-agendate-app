import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'

export const PerfilCliente = ({ clientePerfil }) => {

    useEffect(() => {
      console.log('SE MONTA')
      return () => {
        console.log('SE DESMONTA')
      }
    }, [])
    
    return (
        <>
            <div className="" >
                <div className='div-info-perfil'>
                    <div className='div-image-perfil-cliente'>
                        <div>
                            <img className='image-perfil-cliente-pre' src='./images/userPicture.png' />
                        </div>
                        <FontAwesomeIcon className='icon-camera-perfil' icon={faCameraRetro} />
                    </div>
                    <div>
                        <h2>Danny Alexander Granados Carreño </h2>
                        <h3>C.C 1031123600</h3>
                        <h4>Id cliente - 10300</h4>
                    </div>
                </div>
                <div className='div-resumen-perfil-cliente'>
                    <div className='resumen-perfil-cliente'>
                        <p className='p-resumen-element' > 630 </p>
                        <br /> <font className= 'font-resumen-element'> Agendamientos </font>
                    </div>
                    <div className='resumen-perfil-cliente'>
                        <p className='p-resumen-element' > 580 </p>
                        <br /> <font className= 'font-resumen-element'> Citas cumplidas </font>
                    </div>
                    <div className='resumen-perfil-cliente'>
                        <p className='p-resumen-element' > 50 </p>
                        <br /> <font className='font-resumen-element'> Citas canceladas </font>
                    </div>
                </div>
            </div>
        </>
    )
}
