import React, { useState } from 'react'
import Select from 'react-select'
import { useTiposDocumentos } from '../../Hooks/useTiposDocumentos';

export const RegistroClientes = () => {

    const { tiposDocumentos } = useTiposDocumentos();
    const [stateService, setStateService] = useState(false)
    const [formState, setformState] = useState({
        tipoDocumento: '',
        numeroDocumento: '',
        nombres: '',
        apellidos: '',
        direccion: '',
        correo: '',
        telefono1: '',
        telefono2: '',
    })
    const { tipoDocumento, numeroDocumento, nombres, apellidos, direccion, correo, telefono1, telefono2 } = formState;

    const changeInput = (e) => {
        setformState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const changeInputTipoDocumento = (e) => {
        setformState({
            ...formState,
            tipoDocumento: e.value
        })
    }

    const actionRegistraCliente = () => {
        setStateService(!stateService)
    }

    return (
        <>
            <h4 >Registro de clientes</h4>
            <p className='p-parrafo'> Acá podrás agregar los clientes de tu organización, los cuales se dispondrán a los procesos de agendamiento y facturación.                
                De requerir alguna ayuda no dudes en comunicarte a nuestro centro de servicio (+57) 311-883-1928 COL o a través del correo mesadeservicio@agendate.com.co
            </p>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                    <div className='div-form'>
                        <p className='p-label-form'> Tipo documento: </p>
                        <Select onChange={changeInputTipoDocumento} options={tiposDocumentos} defaultValue={tipoDocumento} placeholder='Seleccione' />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                    <div className='div-form'>
                        <p className='p-label-form'> Número de documento: </p>
                        <input type="text" name='numeroDocumento' className='form-control' placeholder='' autoComplete='off'
                            value={numeroDocumento} onChange={changeInput}
                        />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                    <div className='div-form'>
                        <p className='p-label-form'> Nombres: </p>
                        <input type="text" name='nombres' className='form-control' placeholder='' autoComplete='off'
                            value={nombres} onChange={changeInput}
                        />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                    <div className='div-form'>
                        <p className='p-label-form'> Apellidos: </p>
                        <input type="text" name='apellidos' className='form-control' placeholder='' autoComplete='off'
                            value={apellidos} onChange={changeInput}
                        />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                    <div className='div-form'>
                        <p className='p-label-form'> Dirección: </p>
                        <input type="text" name='direccion' className='form-control' placeholder='' autoComplete='off'
                            value={direccion} onChange={changeInput}
                        />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                    <div className='div-form'>
                        <p className='p-label-form'> Correo: </p>
                        <input type="text" name='correo' className='form-control' placeholder='' autoComplete='off'
                            value={correo} onChange={changeInput}
                        />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                    <div className='div-form'>
                        <p className='p-label-form'> Telefono 1: </p>
                        <input type="text" name='telefono1' className='form-control' placeholder='' autoComplete='off'
                            value={telefono1} onChange={changeInput}
                        />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                    <div className='div-form'>
                        <p className='p-label-form'> Telefono 2: </p>
                        <input type="text" name='telefono2' className='form-control' placeholder='' autoComplete='off'
                            value={telefono2} onChange={changeInput}
                        />
                    </div>
                </div>
                <div className="col-12 col-sm-3 col-md-3 col-lg-4 " ></div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 div-buton-registra-cliente " >
                    <button onClick={actionRegistraCliente} className='bottom-custom'>
                        Agregar
                    </button>
                </div>
                <div className="col-12 col-sm-3 col-md-3 col-lg-4 " ></div>
            </div>
        </>
    )
}
