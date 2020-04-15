import React from 'react'
import CardHome from '../../components/CardHome';
function Home() {

    return (
        <div>
            <div className="row">
                <div className="col-12 col-md-5 text-center">
                    <h1>
                        Trackovid
                    </h1>
                    <p>
                        Uma aplicação para te manter informado sobre a situação atual do país com o vírus covid-19.
                    </p>
                    <p>
                        Dividida em 3 sessões para facilitar a sua busca por informações. 
                    </p>
                </div>
                <div className="col-12 col-md-7">
                    <div className="wrapper-data-panel">
                        <div className="row row-data-panel">
                            <div className="col-12 col-sm-12 col-data-panel content-block-active mb-2 mb-sm-0">
                                <CardHome type="active" template="first template-purple" title="Mapa do Brasil" description="Visualize os casos de cada estado"/>
                            </div>
                            <div className="col-12 col-sm-12 col-data-panel content-block-small">
                                <CardHome template="second template-blue" title="Estatísticas do País" description="Visualize a situação atual do Brasil" />
                                <CardHome template="third template-pink" title="Todos os Estados" description="Visualize a tabela com dados de cada estado do Brasil" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
