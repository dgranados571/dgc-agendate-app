import React from 'react'
import '../css/login.css'
import { useNavigate } from 'react-router-dom';

export const LoginAgendaTe = ({ setSelectActionLogin }) => {

  const navigate = useNavigate();

  const actionRegistrar = () => {
    setSelectActionLogin('REGISTRA_AGENDATE')
  }

  const actionLogin = () => {
    navigate('/zona-trx');
  }

  return (
    <>
      <div className='div-container'>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-1 col-lg-3" ></div>
          <div className="col-12 col-sm-12 col-md-10 col-lg-6">
            <div className='div-login'>
              <div className='div-login-elements'>
                <div className='div-elements-children' >
                  <h3 className='titulo-login'>Ingresar a Agenda-Te</h3>
                  <div className='div-inputs-login'>
                    <p className='p-label-form'> Usuario </p>
                    <input type="text" name='usuario' className='form-control' placeholder='Usuario' autoComplete='off' />
                    <p className='p-label-form'> Contraseña </p>
                    <input type="password" name='contrasenia' className='form-control' placeholder='Contraseña' autoComplete='off' />
                  </div>
                    {
                      /*
                      <div className='div-links-login'>
                        <button className='btn btn-link a-link-login'>
                          Olvide mi contraseña
                        </button>
                        <button className='btn btn-link a-link-login' onClick={actionRegistrar}>
                          Registrarme
                        </button>
                      </div>
                      */
                    }
                  <div className='div-bottom-custom-login'>
                    <button className='bottom-custom-login' onClick={actionLogin}>
                      Ingresar
                    </button>
                  </div>
                </div>
              </div>
              <p className='p-info-login'>Agenda-te | Todos los derechos reservados </p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-1 col-lg-3" ></div>
        </div>
      </div>
    </>
  )
}
