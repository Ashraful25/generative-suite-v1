import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";
import LandingPoweredby from "@/components/landing-poweredby";

const LandingPage = () => {

    return (
        <div>
            <LandingNavbar/>
            <LandingHero/>
            <LandingContent/>
            <LandingPoweredby/>
            
            
           
        </div>

      )
}

export default LandingPage;