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
                        <div className="col-6 pb-3">
                            <Card title="Casos Confirmados" />
                        </div>
                        <div className="col-6 pb-3">
                            <Card title="Casos de Curas"/>
                        </div>
                        <div className="col-6 pb-3">
                            <Card title="Casos Descartados" />
                        </div>
                        <div className="col-6 pb-3">
                            <Card title="Casos de Mortes"/>
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
