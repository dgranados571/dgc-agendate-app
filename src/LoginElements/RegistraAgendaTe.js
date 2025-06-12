import React, { useState } from 'react'
import Select from 'react-select'
import { usePaises } from '../Hooks/usePaises'
import '../css/login.css'
import { useTipodeNegocio } from '../Hooks/useTipodeNegocio'

export const RegistraAgendaTe = ({ setSelectActionLogin }) => {

  const { paises } = usePaises()
  const { tipoNegocios } = useTipodeNegocio()

  const [indicativoElements, setIndicativoElements] = useState({
    indicativo: '',
    placeHolder: ''
  })

  const { indicativo, placeHolder } = indicativoElements;

  const changeInputPais = (e) => {
    setIndicativoElements({
      indicativo: e.indicativo,
      placeHolder: e.placeHolder
    })
  }

  const actionVolver = () => {
    setSelectActionLogin('LOGIN_AGENDATE')
  }

  return (
    <div className='div-container-registra'>
      <div className='div-registra'>
        <div className='div-registra-elements'>
          <div className='div-elements-children' >
            <h3 className='titulo-login'>Aqui empieza el gran salto que tu negocio nescecita!! </h3>
            <h3 className='titulo-login'>Agenda-Te</h3>
            <p className='p-subtitulo-registra'>Contaras con un periodo gratuito de 30 días a partir de la activación de tu cuenta</p>
            <div>
              <p className='p-label-form-login'> Nombres: </p>
              <input type="text" name='nombres' className='form-control' placeholder='Ej: gustavo andres' autoComplete='off' />

              <p className='p-label-form-login'> Apellidos: </p>
              <input type="text" name='apellidos' className='form-control' placeholder='Ej: gomes salamanca' autoComplete='off' />

              <p className='p-label-form-login'> Correo electrónico: </p>
              <input type="text" name='usuario' className='form-control' placeholder='Ej: miusuario@gmail.com' autoComplete='off' />

              <p className='p-label-form-login'> Pais: </p>
              <Select options={paises} onChange={changeInputPais} placeholder='Seleccione' />

              <p className='p-label-form-login'> Teléfono de contacto: </p>
              <div className='div-telefono-regsitra'>
                <p className='p-indicatvo'>   {indicativo} </p>
                <input type="text" name='numeroTelefonico' className='form-control' placeholder={placeHolder} autoComplete='off' />
              </div>

              <p className='p-label-form-login'> Tipo de negocio: </p>
              <Select options={tipoNegocios} placeholder='Seleccione' />

              <p className='p-label-form-login'> Contraseña: </p>
              <input type="password" name='password1' className='form-control' placeholder='' autoComplete='off' />

              <p className='p-label-form-login'>Confirmar Contraseña: </p>
              <input type="password" name='password2' className='form-control' placeholder='' autoComplete='off' />

              <div className='div-terminos-condiciones'>
                <input name="isGoing" type="checkbox" />
                <p className='p-terminos-condiciones'>Acepta los términos y condiciones </p>
              </div>
            </div>

            <div className='div-bottom-custom-registra'>
              <button className='btn btn-link a-link-registra' onClick={actionVolver} >
                Volver
              </button>
              <button className='bottom-custom-login'>
                Crear cuenta
              </button>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
