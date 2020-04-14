import React, { useState } from 'react'

//Components
import Map from '../../components/Map'
import Card from '../../components/Card'

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
            {data.state && <div className="col-lg-6 align-self-center">
                <h3 className="state-name mb-4">{data.state}</h3>
                <div className="row">
                    <div className="col-12 pb-3">
                        <Card title="Casos Confirmados" content={data.cases.toLocaleString('de-DE')} />
                    </div>
                    <div className="col-6 pr-2 pb-3">
                        <Card title="Suspeitas" content={data.suspects.toLocaleString('de-DE')} />
                    </div>
                    <div className="col-6 pl-2 pb-3">
                        <Card title="Mortes" content={data.deaths.toLocaleString('de-DE')} />
                    </div>
                </div>
            </div>}
        </div>

    )
}

export default React.memo(MapView)
