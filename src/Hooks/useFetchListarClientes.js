import { useEffect, useState } from 'react'

export const useFetchListarClientes = () => {

    const url = `http://localhost:8082/service/agendaTe/obtieneClientes?idUsuario=0`;

    const [state, setState] = useState({
        data: [],
        loading: true,
        error: null
    })

    useEffect(() => {
        setState({
            data: [],
            loading: true,
            error: null
        })

        fetch(url, {
            method: 'GET',
            headers: new Headers(
                {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                    "Access-Control-Allow-Origin": '*'
                }),
            mode: 'cors',
        }).then(resp => {
            return resp.json()
        }).then(data => {
            setTimeout(() => {
                setState({
                    loading: false,
                    error: null,
                    data
                });
            }, 1000)
        }).catch((error) => {
            setState({
                data: [],
                loading: false,
                error: error
            })
        })
    }, [url])

    return state;

}
