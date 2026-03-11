import PsychedelicSpiral from "../components/ui/shadcn-io/psychedelic-spiral"
import { ContactMe } from "./feels/contact"
export function Contact(){
    return (
    <>
        <div className="aboutme-bg">
            <PsychedelicSpiral/>
                    <div className="aboutme-container">
                    <ContactMe/>
                    </div>
        </div>
    </>)
}