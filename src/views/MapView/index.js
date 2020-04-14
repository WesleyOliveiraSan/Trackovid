import React, { useState } from 'react'

//Components
import Map from '../../components/Map'
import Card from '../../components/Card'
import Chart from '../../components/Chart'

function MapView() {

    const [data, setData] = useState([])

    return (
        <div className="row d-flex">
            <div className="body-header col-12 mb-4">
                <h1>Mapa do Brasil</h1>
                <p>Visualize a situação de cada estado</p>
            </div>
            <div className="col-lg-6 px-0">
                <Map setData={setData} />
            </div>
            {data.state ? <div className="col-lg-6 align-self-center">
                <h3 className="state-name mb-4">{data.state}</h3>
                <div className="row">
                    <div className="col-6 pb-3">
                        <Card title="Casos Confirmados" color="#c02739" content={data.cases.toLocaleString('de-DE')} />
                    </div>
                    <div className="col-6 pb-3">
                        <Card
                            title="Gráfico"
                            chart={<Chart
                                data={[
                                    {
                                        color: '#c02739',
                                        title: 'Casos Confirmados',
                                        value: data.cases
                                    },
                                    {
                                        color: '#29c7ac',
                                        title: 'Suspeitos',
                                        value: data.suspects
                                    },
                                    {
                                        color: '#54123b',
                                        title: 'Mortes',
                                        value: data.deaths
                                    },
                                ]}
                                size={window.innerWidth <= "420" ? "50px" : "60px"}
                                label={true}
                            />}
                        />
                    </div>
                    <div className="col-6 pr-2 pb-3">
                        <Card title="Suspeitas" color="#29c7ac" content={data.suspects.toLocaleString('de-DE')} />
                    </div>
                    <div className="col-6 pl-2 pb-3">
                        <Card title="Mortes" color="#54123b" content={data.deaths.toLocaleString('de-DE')} />
                    </div>
                </div>
            </div>
            :
            <div className="col-lg-6 row d-flex align-content-center justify-content-center">
                 <h2 className="font-weight-bold">Selecione um Estado</h2>
            </div>
            }
        </div>

    )
}

export default React.memo(MapView)
