import React from 'react'

//Components
import Map from '../../components/Map'
import Card from '../../components/Card'

function Home() {

    return (
        <div className="p-5">
            <div className="row mt-5">
                <div className="col-6">
                    <div className="row">
                        <div className="col-5 pb-3">
                            <Card title="Casos Confirmados" content="30" />
                        </div>
                        <div className="col-5 pb-3">
                            <Card title="Casos de Curas" content="30" />
                        </div>
                        <div className="col-5 pb-3">
                            <Card title="Casos Descartados" content="30" />
                        </div>
                        <div className="col-5 pb-3">
                            <Card title="Casos de Mortes" content="30" />
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <Map />
                </div>
            </div>
        </div>
    )
}

export default Home
