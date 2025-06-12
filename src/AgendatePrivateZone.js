import React, { useState } from 'react'
import Agendate from "./Agendate";

const AgendatePrivateZone = () => {

    const [selectActionView, setSelectActionView] = useState('ZONE_ROOT')

    const componentValidated = () => {
        switch (selectActionView) {
            case 'ZONE_ROOT':
                return (
                    <Agendate />
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

export default AgendatePrivateZone