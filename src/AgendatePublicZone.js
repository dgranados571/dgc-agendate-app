import React, { useState } from 'react'
import { LoginAgendaTe } from './LoginElements/LoginAgendaTe'
import { RegistraAgendaTe } from './LoginElements/RegistraAgendaTe'

const AgendatePublicZone = () => {

    const [selectActionView, setSelectActionView] = useState('LOGIN_AGENDATE')

    const componentValidated = () => {
        switch (selectActionView) {
            case 'LOGIN_AGENDATE':
                return (
                    <LoginAgendaTe setSelectActionLogin={setSelectActionView} />
                )
            case 'REGISTRA_AGENDATE':
                return (
                    <RegistraAgendaTe setSelectActionLogin={setSelectActionView} />
                )
            default:
                return (
                    <></>
                )
        }
    }

    return (
        <>
            {
                componentValidated()
            }
        </>
    )
}

export default AgendatePublicZone