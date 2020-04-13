import React, { useState, useEffect } from 'react'

//Services
import { clientAPICovid } from '../../services/api'

function HomeStates() {

    const [data, setData] = useState([])

    useEffect(() => {
        clientAPICovid.get()
            .then(res => {
                setData(res.data.data)
            })
            .catch(err => console.log(err.message))
    }, [])

    return (
        <div className="mt-5 p-5">
            <h1 className="text-center mb-5">Casos por Estado</h1>
            <table className="table table-hover text-dark">
                <thead>
                    <tr>
                        <th>UF</th>
                        <th>Estado</th>
                        <th>Casos</th>
                        <th>Suspeitas</th>
                        <th>Mortes</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(state =>
                            <tr key={state.uf}>
                                <th>{state.uf}</th>
                                <td>{state.state}</td>
                                <td>{state.cases}</td>
                                <td>{state.suspects}</td>
                                <td>{state.deaths}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default React.memo(HomeStates)
