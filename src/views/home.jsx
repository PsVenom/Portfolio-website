import "../App.css";
import { PsychedelicSpiral } from "../components/ui/shadcn-io/psychedelic-spiral";
import TerminalView from "./feels/index";
// import { Anim } from "./components/Animate";
function Home() {
  return (
    <>
      <div className="bg">
        <PsychedelicSpiral></PsychedelicSpiral>
        <div className="terminal-view">
          <TerminalView />
        </div>
      </div>
    </>
  );
}

export default Home;
