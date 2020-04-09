import React from 'react'

//Components
import Map from '../../components/Map'
import Card from '../../components/Card'

function Home() {

    return (
        <div>
            <div className="row">
                <div className="col-5">
                    <div className="row">
                        <div className="col-6">
                            <Card title="teste" />
                        </div>
                        <div className="col-6">
                            <Card title="teste"/>
                        </div>
                        <div className="col-6">
                            <Card title="teste" />
                        </div>
                        <div className="col-6">
                            <Card title="teste"/>
                        </div>
                    </div>
                </div>
                <div className="col-7">
                    <Map />
                </div>
            </div>
            
        </div>
    )
}

export default Home
