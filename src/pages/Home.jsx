import React from "react";
import IntroSection from '../components/IntroSection'
import ImproveSkills from '../components/ImproveSkills'
import QuoteSection from '../components/QuoteSection'
import ChefSection from '../components/ChefSection'

const Home = () =>{
    return(
        <div>
          <IntroSection />
          <ImproveSkills />
          <QuoteSection />
          <ChefSection/>
        </div>
    )
}
export default Home;