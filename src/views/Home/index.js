import React from 'react'

//Assets
import washingHands from '../../assets/images/washing-hands.png'
import stayHome from '../../assets/images/family.png'
import cough from '../../assets/images/cough.png'
import keepDistance from '../../assets/images/distance.png'
import exercise from '../../assets/images/fitness.png'
import noVirus from '../../assets/images/no-virus.png'
import Wesley from '../../assets/images/Wesley.jpg'
import Clarisse from '../../assets/images/Clarisse.jpg'

//Components
import CardHome from '../../components/CardHome';

function Home() {

    return (
        <div>
            <div className="row">
                <div className="col-12 col-md-10 mx-auto home-header mb-5 p-5">
                    <h2>Te ajudando a se manter <strong>informado</strong>!</h2>
                    <p><strong>Trackovid</strong> é uma aplicação para facilitar a visualização da atual situação do país com a doença covid-19.</p>
                </div>
                <div className="col-12">
                    <h3 className="text-center font-weight-bold d-md-block d-none">Medidas Preventivas <img src={noVirus} alt="no virus" style={{ width: "40px", height: "40px" }} /></h3>
                    <h4 className="text-center font-weight-bold d-md-none d-block">Medidas Preventivas <img src={noVirus} alt="no virus" style={{ width: "40px", height: "40px" }} /></h4>
                </div>
                <div className="row card-deck justify-content-center my-5">
                    <div className="col-lg-2 col-6 px-0">
                        <CardHome img={keepDistance} text="Mantenha uma distância segura" />
                    </div>
                    <div className="col-lg-2 col-6 px-0">
                        <CardHome img={cough} text="Use o cotovelo para cobrir a tosse" />
                    </div>
                    <div className="col-lg-2 col-6 px-0">
                        <CardHome img={washingHands} text="Lave as mãos com frequência" />
                    </div>
                    <div className="col-lg-2 col-6 px-0">
                        <CardHome img={exercise} text="Adote uma rotina saudável" />
                    </div>
                    <div className="col-lg-2 col-6 px-0">
                        <CardHome img={stayHome} text={"Não saia de casa (Se possível)"} />
                    </div>
                </div>
                <div className="col-12">
                    <h3 className="text-center font-weight-bold mb-5">Quem está por trás do Trackovid ?</h3>
                    <div className="row card-deck col-lg-6 mx-auto">
                        <CardHome img={Wesley} title="Wesley Oliveira" link="https://www.linkedin.com/in/wesleyoliveiras/" text="Front-end Developer & Web Designer" desc="Atuou no desenvolvimento e na criação do Layout e Design da aplicação." />
                        <CardHome img={Clarisse} title="Clarisse Lima" link="https://www.linkedin.com/in/clarisse-lima-2bb729185/" text="Front-end Developer" desc="Atuou na gestão do projeto e auxiliou no desenvolvimento." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
