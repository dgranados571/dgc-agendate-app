import React, { useEffect, useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { useFetchListarClientes } from '../../Hooks/useFetchListarClientes'
import { PerfilCliente } from './PerfilCliente';

export const ListaClientes = () => {


    const [clientes, setClientes] = useState([])
    const [modal, setModal] = useState(false)

    const [clientePerfil, setClientePerfil] = useState({})

    const { data, error, loading } = useFetchListarClientes();

    useEffect(() => {
        setClientes(data)
    }, [data])

    const handleShow = () => {
        setModal(true)
    };
    const handleClose = () => {
        setModal(false)
    };

    return (
        <>
            {loading ?
                <p>Cargando...</p>
                :
                (error === null) ?
                    <table className="table table-striped table-responsive">
                        <thead className="head-table">
                            <tr>
                                <th>Nombres</th>
                                <th>Apellidos</th>
                                <th>Correo</th>
                                <th>Telefono 1</th>
                                <th>Telefono 2</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                clientes.map((cliente) => {
                                    return (
                                        <tr key={cliente.id} >
                                            <td > {cliente.nombres} </td>
                                            <td > {cliente.apellidos} </td>
                                            <td > {cliente.correo} </td>
                                            <td > {cliente.telefono1} </td>
                                            <td > {cliente.telefono2} </td>
                                            <th>
                                                <button onClick={() => {
                                                    setClientePerfil(cliente)
                                                    handleShow()
                                                }} className='btn btn-link a-link'>
                                                    Ver perfil
                                                </button>

                                            </th>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    :
                    <>
                        <table className="table table-striped">
                            <thead className="head-table">
                                <tr>
                                    <th>Nombres</th>
                                    <th>Apellidos</th>
                                    <th>Tpo documento</th>
                                    <th>Número documento</th>
                                    <th>Dirección</th>
                                    <th>Correo</th>
                                    <th>Telefono 1</th>
                                    <th>Telefono 2</th>
                                </tr>
                            </thead>
                        </table>
                        <p>No fue posible consultar la información</p>
                    </>
            }
            <Modal isOpen={modal} onHide={handleClose} className='modal-perfil-cliente'>
                <ModalHeader closeButton>
                    <h3>Perfil cliente</h3>
                </ModalHeader>
                <ModalBody>
                    <PerfilCliente clientePerfil={clientePerfil} />
                </ModalBody>
                <ModalFooter>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar perfil
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}
