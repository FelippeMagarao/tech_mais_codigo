import React from "react";
import Menu from "../components/Menu/Menu";
import Cartao from "../components/Cartao/Cartao";
import { Tudo } from "../components/Cartao/style";
import "../pages/style.css";
import logo from './minha_foto.jpg';
import fotoFernanda from '../components/media/fotofernanda.png';
import fotoGi from '../components/media/fotogi.png';
import fotoLari from '../components/media/fotolari.png';
import fotoPedro from '../components/media/fotopedro.png';
import fotoFelippe from '../components/media/fotofelippe.png';
import fotoJp from '../components/media/fotojp.png';



function Sobre() {
  return (
  <div className="Suporte">
    <Menu />
    <header className="Suporte-logo">
      <img src={logo} className="Suporte-logo" alt="logo" />
    </header>
    <body className='Sobre-area'>
      <h1>Sobre a TechMais</h1>
      <h2>Quem somos?</h2>
      <div>
      <p className="paragrafo">Nós somos uma empresa tech renomada, impulsionando a inovação e transformando o mundo através da tecnologia. Desde a nossa fundação, nos dedicamos a oferecer soluções de ponta e serviços excepcionais para empresas e clientes em todo o mundo.</p>
      
      <p className="paragrafo">Com uma equipe de profissionais altamente qualificados e apaixonados pelo que fazem, estamos comprometidos em fornecer produtos de alta qualidade que atendam às necessidades e superem as expectativas dos nossos clientes. Estamos constantemente atualizados com as últimas tendências tecnológicas para garantir que nossas soluções sejam modernas, eficientes e alinhadas com as demandas do mercado.</p>
      
      <p className="paragrafo">Nossa cultura corporativa é baseada em colaboração, criatividade e excelência. Valorizamos a diversidade e acreditamos que a combinação de diferentes perspectivas e habilidades nos torna mais fortes e mais capazes de resolver desafios complexos. Acreditamos também no trabalho em equipe e na parceria com nossos clientes, pois acreditamos que juntos podemos alcançar resultados extraordinários.</p>
      </div>
      <h2>Nossos objetivos</h2> 
      <div>
      <p className="paragrafo">Estamos comprometidos em causar um impacto positivo na sociedade e no meio ambiente. Buscamos constantemente maneiras de usar a tecnologia para promover a sustentabilidade, a inclusão e a responsabilidade social. Acreditamos que a tecnologia tem o poder de mudar vidas e estamos empenhados em usá-la para construir um futuro melhor para todos.</p>
      
      <p className="paragrafo">Se você está em busca de soluções tecnológicas inovadoras, confiáveis e personalizadas, você veio ao lugar certo. Junte-se a nós em nossa jornada de transformação digital e descubra o que a nossa empresa pode fazer por você.</p>
      </div> 
      <div>
      <h2>Nossa equipe</h2>  

      <img
      src={fotoFernanda}
      alt="Minha Imagem"
      style={{ width: '200px', height: '250px' }}
      />

      <img
      src={fotoLari}
      alt="Minha Imagem"
      style={{ width: '200px', height: '250px' }}
      />

      <img
      src={fotoGi}
      alt="Minha Imagem"
      style={{ width: '200px', height: '250px' }}
      />

      <img
      src={fotoPedro}
      alt="Minha Imagem"
      style={{ width: '200px', height: '250px' }}
      />

      <img
      src={fotoFelippe}
      alt="Minha Imagem"
      style={{ width: '200px', height: '250px' }}
      />

      <img
      src={fotoJp}
      alt="Minha Imagem"
      style={{ width: '200px', height: '250px' }}
      />


      </div>
    </body>
    <footer className='footer'>
      <p>Desenvolvido por @Techmais. Todos os direitos reservados. </p>
    </footer>
  </div>
);
}

export default Sobre;
