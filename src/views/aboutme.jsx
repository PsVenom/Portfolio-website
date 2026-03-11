import PsychedelicSpiral from "../components/ui/shadcn-io/psychedelic-spiral"
import { AboutMe } from "./feels/aboutme"
export function About(props){
    return (<>
    <div className="aboutme-bg">
        <PsychedelicSpiral/>
        <div className="aboutme-container">
            <AboutMe/>
        </div>
    </div>
    </>)
}