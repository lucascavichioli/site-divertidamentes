import Head from 'next/head'
import Mapa from '../src/components/Mapa';
import { FaPencilAlt, FaInstagram, FaWhatsapp} from 'react-icons/fa';
import { BiGame } from 'react-icons/bi';
import { GiRadarSweep, GiNotebook } from 'react-icons/gi';
import { MdOutlineAutoGraph } from 'react-icons/md';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const backgroundColorGreen = { backgroundColor: '#8BB1A1' };
const backgroundColorWhite = { backgroundColor: '#FEFBF5' };
const backgroundColorYellow = { backgroundColor: '#FCE5B5' };
const backgroundColorGray = { backgroundColor: '#EBEBEB'};




export default function Home() {
  return (
    <div className='container-fluid'>
      
      <Head>
        <title>Divertidamentes | O melhor reforço para o seu filho(a)</title>
        <link rel="icon" href="../imgs/favicon.png" />
        <link
          rel="preload"
          href="/fonts/futura-bk/FutuBk.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/peachy-rose/Peachy Rose.ttf"
          as="font"
          crossOrigin=""
        />
        <meta id="meta-description" name="description" content="Divertidamentes com crianças" />
      </Head>
    
      <main>

        <section>
          <article>
            <div className='row' style={backgroundColorGreen}>
              <div className='col-md-offset-6 text-center'>
                <img src="../imgs/logo-banner-divertidamentes.png" className="img-fluid" alt="Divertidamentes"/>
              </div>
            </div>                
          </article>
        </section>

        <section>
          {/* APRESENTAÇÃO */}
          <article>
                <div className='row' style={backgroundColorYellow}>
                  <div className='col-lg-12 text-center mb-5 mt-5'>
                      <h1>Ajudo seu filho(a) a perceber seus dons e a desenvolver novas habilidades e competências</h1>
                  </div>
                </div>
                <div className="row" style={backgroundColorYellow}>
                  <div className="col-md-5 offset-md-1 text-center mb-5">
                    <img src="../imgs/ideia.png" className='img' alt="Ideia" height='200px' />
                    <h2>As aulas acontecem de maneiras divertidas e atrativas para as crianças. O foco é sempre direcionado no que seu filho(a) precisa</h2>
                  </div>
                  <div className="col-md-6 mb-5 text-center">
                    <img src="../imgs/brincadeira-uno.png" className='img-fluid shadow rounded' alt="Brincadeira do UNO"/>
                  </div>
                </div>
          </article>
        </section>

        <section id="servicos">
          {/* SERVIÇOS */}
          <article>
              <div className='row' style={backgroundColorGreen}>
                <div className='col-md-6 offset-md-3 text-center'>
                  <div class="card border-0 m-5">
                    <div class="card-body shadow">
                      <h3>Estimulação e Educação Infantil</h3>
                    </div>
                  </div>
                  <div class="card border-0 m-5">
                    <div class="card-body shadow">
                      <h3>Ensino Fundamental I e II</h3>
                    </div>
                  </div>
                  <div class="card border-0 m-5">
                    <div class="card-body shadow">
                      <h3>Atendimento para autistas</h3>
                    </div>
                  </div>
                </div>
              </div>
          </article>
        </section>

        <section>
          {/* MISSÃO, VISÃO E VALORES */}
          <article>
             <div className="row" style={backgroundColorWhite}>
               <div className="col-md-6 align-self-center">
                 <div className="row">
                    <div className="col-md-6 text-center">
                      <FaPencilAlt size={80} style={{transform: 'rotate(225deg)', color: '#007F62'}}/>
                    </div>
                    <div className="col-md-6 align-self-center text-center">
                      <div style={{ display: 'block' }}>
                          <Accordion defaultActiveKey="0">
                                <Accordion.Toggle as={Button} style={{backgroundColor: '#FEFBF5', color: 'black', border:'0', cursor: 'pointer'}}
                                  eventKey="0">
                                  <h1>Missão</h1>
                                </Accordion.Toggle>
                              <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                  Desenvolver em cada criança, através do atendimento acolhedor e individualizado, o que há de melhor em sua essência, estimulando o aprendizado por meio de metodologias ativas onde aprende-se brincando.
                                </Card.Body>
                              </Accordion.Collapse>
                          </Accordion>
                      </div>
                    </div>
                 </div>
                 <div className="row">
                    <div className="col-md-6 text-center">
                      <FaPencilAlt size={80} style={{transform: 'rotate(225deg)', color: '#0264A1'}}/>
                    </div>
                    <div className="col-md-6 align-self-center text-center">
                      <div style={{ display: 'block' }}>
                          <Accordion defaultActiveKey="0">
                                <Accordion.Toggle as={Button} style={{backgroundColor: '#FEFBF5', color: 'black', border:'0'}}
                                  eventKey="0">
                                  <h1>Visão</h1>
                                </Accordion.Toggle>
                              <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                  Interligar e conduzir a educação, de modo que atenda as necessidades de pais (responsáveis), alunos e escolas, proporcionando autonomia, desenvolvendo habilidades motoras, cognitivas, social e emocional, e assim garantir um processo de aprendizagem mais assertivo.
                                </Card.Body>
                              </Accordion.Collapse>
                          </Accordion>
                      </div>
                    </div>
                 </div>
                 <div className="row">
                    <div className="col-md-6 text-center">
                      <FaPencilAlt size={80} style={{transform: 'rotate(225deg)', color: '#E4AF5C'}}/>
                    </div>
                    <div className="col-md-6 align-self-center text-center">
                      <div style={{ display: 'block' }}>
                          <Accordion defaultActiveKey="0">
                                <Accordion.Toggle as={Button} style={{backgroundColor: '#FEFBF5', color: 'black', border:'0'}}
                                  eventKey="0">
                                  <h1>Valores</h1>
                                </Accordion.Toggle>
                              <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                  Nosso método busca compartilhar vivência e aprendizado mediante a ética, acolhimento, confiança, colaboração, entusiasmo, cuidado, orientação, construindo e permitindo o sucesso na educação escolar e comunitária.
                                </Card.Body>
                              </Accordion.Collapse>
                          </Accordion>
                      </div>
                    </div>
                 </div>
               </div>
               <div className="col-md-6">
                   <img src="../imgs/logo-mvv.png" className='img-fluid' alt="Divertidamentes" height='400px' />
               </div>
             </div> 
          </article>
        </section>

        <section>
          {/* CARTILHA DE EXPLICAÇÕES */}
          <article>
            <div className="row" style={backgroundColorGreen}>
              <div className="col-md-12">
                  <div className="row justify-content-center mt-5 mb-5">
                    <h1>Aprendizado rápido</h1>
                  </div>
                  <div className="row justify-content-center mb-3">
                    <div className="col-md-2 text-center"><h2><GiRadarSweep size={80}/></h2></div>
                    <div className="col-md-6"><h3 className="align-self-center" style={{color: '#FEFBF5'}}>Por meio da sondagem inicial, identificamos todas as necessidades e dificuldades da criança</h3></div>
                  </div>
                  <div className="row justify-content-center mb-3">
                    <div className="col-md-2 text-center"><h2><GiNotebook size={80}/></h2></div>
                    <div className="col-md-6"><h3 className="align-self-center" style={{color: '#FEFBF5'}}>É montado um plano individual adaptado às necessidades reais de cada uma delas</h3></div>
                  </div>
                  <div className="row justify-content-center mb-3">
                    <div className="col-md-2 text-center"><h2><MdOutlineAutoGraph size={80}/></h2></div>
                    <div className="col-md-6"><h3 className="align-self-center" style={{color: '#FEFBF5'}}>Com o atendimento a criança aprende de verdade, atinge suas expectativas e melhora sua autonomia</h3></div>
                  </div>
                  <div className="row justify-content-center mb-3">
                    <div className="col-md-2 text-center"><h2><BiGame size={80}/></h2></div>  
                    <div className="col-md-6"><h3 className="align-self-center" style={{color: '#FEFBF5'}}>Os atendimentos acontecem de maneira lúdica, com diferentes propostas de ensino</h3></div>
                  </div>
              </div>
            </div>
          </article>
        </section>

        <section id="profissional">
          {/* INFORMAÇÕES DE CONTATO E MAPA */}
          <article>
            <div className="row" style={backgroundColorGray}>
              <div className="col-md-5 offset-md-1 text-center mt-5 mb-5">
                 <img src="../imgs/foto-dai.png" className='img-fluid' alt="Daiane Zimmermann" height='100px'/>
              </div>
              <div className="col-md-4 mb-5 text-center justify-content-center align-self-center">
                 {/*formação*/}
                 <h4>"Sou professora e Psicopedagoga. Faço atendimento especializado para bebês, crianças e adolescentes. Formada em Pedagogia. 
                 Pós-graduada em Educação e Psicopedagogia clínica e institucional.
                 Cursos: Práticas na educação infantil, inclusão alfabetização, autismo, TDA - TDAH e atualmente cursando o método ABA e DENVER."</h4>
              </div>
            </div>
          </article>
        </section>

        <section id="contato">
          {/* INFORMAÇÕES DE CONTATO E MAPA */}
          <article>
            <div className="row" style={backgroundColorWhite}>
              <div className="col-md-12 mt-5 mb-5 text-center justify-content-center align-self-center">
                  <a href="https://www.instagram.com/divertidaamentes" target="_blank" style={{color: '#FF00FF'}}><FaInstagram size={80}/></a>
                  &nbsp; &nbsp; &nbsp;
                  <a href="https://api.whatsapp.com/send?phone=5504792155482&text=Olá, quero conhecer o divertidamentes :D" target="_blank" style={{color: '#00BB2D'}}><FaWhatsapp size={80}/></a>
              </div>
            </div>
          </article>
          {/*<article>
            <div className="row">
              <div className="col">
                <Mapa />
              </div>
            </div>
          </article>*/}
        </section>
      </main>
      
      <footer className='footer text-center m-5'>
        Desenvolvido por <a href="https://cavica.com.br" target="_blank" rel="noopener noreferrer" className='text'>Cavica</a>
      </footer>
      <script src='../js/teste.js'></script>
    </div>
  )
}
