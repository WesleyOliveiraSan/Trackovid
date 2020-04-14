import React, { useState, useEffect } from 'react'

//Services
import { clientAPICovid } from '../../services/api'

//Components
import Card from '../../components/Card'
import Chart from '../../components/Chart'

function Brazil() {

    const [data, setData] = useState([])

    useEffect(() => {
        clientAPICovid.get(`/brazil`)
            .then(res => {
                setData(res.data.data)
            })
            .catch(err => console.log(err.message))
    }, [])

    return (
        <div className="row d-flex">
            <div className="body-header col-12 mb-4">
                <h1>Estatísticas do País</h1>
                <p>Visualize a situação atual do Brasil</p>
            </div>
            {
                data.country &&
                <>
                    <div className="col-md-12">
                        <Chart data={[
                            {
                                color: '#c02739',
                                title: 'Casos Ativos',
                                value: data.cases
                            },
                            {
                                color: '#29c7ac',
                                title: 'Curados',
                                value: data.recovered
                            },
                            {
                                color: '#54123b',
                                title: 'Mortes',
                                value: data.deaths
                            },
                        ]} 
                        size="250px"
                        />
                    </div>
                    <div className="col-md-12 align-self-center mt-5">
                        <div className="row">
                            <div className="col-lg-3 col-6 pb-3">
                                <Card title="Confirmados" content={data.confirmed.toLocaleString('de-DE')} color="#84142d" />
                            </div>
                            <div className="col-lg-3 col-6 pb-3">
                                <Card title="Casos Ativos" content={data.cases.toLocaleString('de-DE')} color="#c02739" />
                            </div>
                            <div className="col-lg-3 col-6 pb-3">
                                <Card title="Curados" content={data.recovered.toLocaleString('de-DE')} color="#29c7ac" />
                            </div>
                            <div className="col-lg-3 col-6 pb-3">
                                <Card title="Mortes" content={data.deaths.toLocaleString('de-DE')} color="#54123b" />
                            </div>
                        </div>
                    </div>
                </>
            }

        </div>
    )
}

export default React.memo(Brazil)
