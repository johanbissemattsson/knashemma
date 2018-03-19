import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div className='page-container'>
    <article className='page'>
      <h1>Hej</h1>
      <div className='page-sections'>
        <section>
          <header className='section-header'>
            <Link to="/page-2/">
              <h3>Om Knas hemma</h3>
            </Link>
          </header>
          <p>Knas hemma är en ungdomsdriven ideell förening som arbetar nationellt. Den främsta målgruppen för Knas hemma är ungdomar och unga vuxna i åldrarna ca 13–30 år, som antingen bor i eller har bott i familjehem, HVB-hem, eller annat boende för samhällsplacerade barn eller unga.<br /><Link to="/page-2/">Läs mer</Link></p>
        </section>
        <section>
          <header className='section-header'>
            <Link to="/page-2/">
              <h3>Ambassadörer</h3>
            </Link>
          </header>
          <p>Knas hemma startades 2013 som ett projekt (Allmänna arvsfonden) på Barnombudet i Uppsala. Vi ville ta reda på om ungdomar i Sverige ville vara med och skapa en ny barnrättsorganisation för att göra det bättre för barn och ungdomar som bor i olika placeringar. Idag är Knas hemma en ideell förening där styrelsen består av ungdomsambassadörer och medlemmar i Knas hemma.<br /><Link to="/page-2/">Läs mer</Link></p>
        </section>
        <section>
          <header className='section-header'>
            <Link to="/page-2/">
              <h3>Anlita Knas hemma</h3>
            </Link>
          </header>
          <p>Tillsammans med olika aktörer, erbjuder vi ett samskapande för att stärka barns och ungas röster och delaktighet. Det kan handla om att ta fram nya arbetssätt för ökad delaktighet och tillgänglighet (via sociala medier), ingå i referensgrupper och projekt utifrån unga människors egna perspektiv, i statliga rapporter, ge input på textmaterial samt via våra föreläsningar och utbildningspaket för socialtjänst, på familjehemsutbildningar, på universitet och högskolor etc. Vi kommer gärna och föreläser och inspirerar er!<br /><Link to="/page-2/">Läs mer</Link></p>
        </section>
        <section>
          <header className='section-header'>
            <Link to="/page-2/">
              <h3>Delaktighet och rättigheter</h3>
            </Link>
          </header>          
          <p>Kreativa delaktighetsmetoder Knas hemma tar fram kreativa metoder för att lyfta barns och ungas delaktighet och röster inom Socialtjänst, familjehem, HVB-hem, samt andra aktörer som träffar målgruppen. Det handlar om att engagera barn och ungdomar genom att lyssna på hur de själva identifierar problem, föreslår lösningar och agera utifrån dem.<br /><Link to="/page-2/">Läs mer</Link></p>
        </section>
      </div>
    </article>
  </div>
)

export default IndexPage
