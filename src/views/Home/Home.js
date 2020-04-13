import React, { useState } from 'react'

//Components
import Map from '../../components/Map'
import Card from '../../components/Card'

function Home() {

    const [data, setData] = useState([])
    
    return (
        <div className="p-5">
            <div className="row d-flex mt-5">
                <div className="col-md-6 align-self-center">
                    <h3 className="text-center">{data.state && `Casos em ${data.state}`}</h3>
                    <div className="card-deck">
                        <div className="col-lg-12 pb-3">
                            <Card title="Confirmados" content={data.cases} />
                        </div>
                        <div className="col-lg-6 pb-3">
                            <Card title="Suspeitas" content={data.suspects} />
                        </div>
                        <div className="col-lg-6 pb-3">
                            <Card title="Mortes" content={data.deaths} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <Map setData={setData} />
                </div>
            </div>
        </div>
    )
}

export default Home
