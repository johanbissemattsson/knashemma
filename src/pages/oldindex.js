import React from 'react';
import Link from 'gatsby-link';
import ImageSlider from '../components/ImageSlider';

const IndexPage = () => (
  <div className='page-container'>
    <article className='index page'>
      <ImageSlider />
      <div className='page-sections'>
        <section>
          <header className='section-header'>
            <Link to="/om-knas-hemma/">
              <img src='' width='120' height='100' alt='hej' />
              <h3>Om Knas hemma</h3>
            </Link>
          </header>
          <div className='section-content'>
            <p>Knas hemma är en ungdomsdriven ideell förening som arbetar nationellt. Den främsta målgruppen för Knas hemma är ungdomar och unga vuxna i åldrarna ca 13–30 år, som antingen bor i eller har bott i familjehem, HVB-hem, eller annat boende för samhällsplacerade barn eller unga.<br /><Link to="/om-knas-hemma/">Läs mer</Link></p>
          </div>
        </section>
        <section>
          <header className='section-header'>
            <Link to="/ambassadorer/">
              <img src='' width='120' height='100' alt='hej' />
              <h3>Ambassadörer</h3>
            </Link>
          </header>
          <div className='section-content'>
            <p>Knas hemma startades 2013 som ett projekt (Allmänna arvsfonden) på Barnombudet i Uppsala. Vi ville ta reda på om ungdomar i Sverige ville vara med och skapa en ny barnrättsorganisation för att göra det bättre för barn och ungdomar som bor i olika placeringar. Idag är Knas hemma en ideell förening där styrelsen består av ungdomsambassadörer och medlemmar i Knas hemma.<br /><Link to="/ambassadorer/">Läs mer</Link></p>
          </div>
        </section>
        <section>
          <header className='section-header'>
            <Link to="/anlita-knas-hemma/">
              <img src='' width='120' height='100' alt='hej' />
              <h3>Anlita Knas hemma</h3>
            </Link>
          </header>
          <div className='section-content'>
            <p>Tillsammans med olika aktörer, erbjuder vi ett samskapande för att stärka barns och ungas röster och delaktighet. Det kan handla om att ta fram nya arbetssätt för ökad delaktighet och tillgänglighet (via sociala medier), ingå i referensgrupper och projekt utifrån unga människors egna perspektiv, i statliga rapporter, ge input på textmaterial samt via våra föreläsningar och utbildningspaket för socialtjänst, på familjehemsutbildningar, på universitet och högskolor etc. Vi kommer gärna och föreläser och inspirerar er!<br /><Link to="/anlita-knas-hemma/">Läs mer</Link></p>
          </div>
        </section>
        <section>
          <header className='section-header'>
            <Link to="/delaktighet-och-rattigheter/">
              <img src='' width='120' height='100' alt='hej' />
              <h3>Delaktighet och rättigheter</h3>
            </Link>
          </header>
          <div className='section-content'>        
            <p>Kreativa delaktighetsmetoder Knas hemma tar fram kreativa metoder för att lyfta barns och ungas delaktighet och röster inom Socialtjänst, familjehem, HVB-hem, samt andra aktörer som träffar målgruppen. Det handlar om att engagera barn och ungdomar genom att lyssna på hur de själva identifierar problem, föreslår lösningar och agera utifrån dem.<br /><Link to="/delaktighet-och-rattigheter/">Läs mer</Link></p>
          </div>
        </section>
      </div>
    </article>
  </div>
)

export default IndexPage
