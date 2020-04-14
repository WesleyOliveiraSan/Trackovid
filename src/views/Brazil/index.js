import React, { useState, useEffect } from 'react'

//Services
import { clientAPICovid } from '../../services/api'

//Components
import Card from '../../components/Card'

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
        <div className="row d-flex mt-5 p-5">
            <div className="col-md-12 align-self-center">
                <h1 className="text-center mb-5">Casos no Brasil</h1>
                <div className="card-deck">
                    <div className="col-lg-3 px-0 pb-3">
                        <Card title="Casos" content={data.cases} />
                    </div>
                    <div className="col-lg-3 px-0 pb-3">
                        <Card title="Confirmados" content={data.confirmed} />
                    </div>
                    <div className="col-lg-3 px-0 pb-3">
                        <Card title="Curados" content={data.recovered} />
                    </div>
                    <div className="col-lg-3 px-0 pb-3">
                        <Card title="Mortes" content={data.deaths} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Brazil)
