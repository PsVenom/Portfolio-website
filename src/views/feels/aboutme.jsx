import { Anim } from "../../components/David/Animate";
import { Fragment, useState } from 'react';
import * as motion from "motion/react-client"
// import type { Variants } from "motion/react";
const ExperienceArray = [
  {
    key:1,
    position: "Co-Founder",
    company: "OrangeCat Technologies",
    date: "August 2024 - Present",
    info: [
      "Designed and built Lagrange, one of the first offline-capable AI development platform that orchestrates multi-step agentic workflows on local LLMs, enabling developers to prototype and run tools, retrieval, and code-generation pipelines without cloud dependencies.",
      "Deployed Lagrange locally and demonstrated it with enterprise partners (including Qualcomm, Tech Mahindra, Sarvam AI, among others), showcasing end-to-end workflows for code assistance and internal knowledge retrieval in constrained compute environments.",
      "Pivoted the platform into SyntX, a VSCode extension-cum-software engineering productivity tool that integrates LLM-based code completion, refactoring, and multi-file edits; built on ReactJS and VsCode API, SyntX scaled to 10,000+ users and onboarded B2B clients.",
      "Presented SyntX and Lagrange at Indian Mobile Congress and CII, translating low-level workflow/agent design patterns into developer-friendly stories and live demos."
    ]
  },
  {
    key:2,
    position: "Contract AI Engineer",
    company: "Gauge Advertising",
    date: "June 2024 – August 2024",
    info: [
      "Built a Python/Flask-based ad creative generation workflow that parses PSD templates, resizes assets, and generates multi-variant banners automatically, cutting manual design time by 50–70%.",
      "Developed an LLM-powered system using OpenAI API capable of generating 80+ ad copies in parallel, wired into the banner pipeline to create end-to-end text+design workflows for campaigns.",
      "Automated PSD creation using a custom JSX pipeline in Photoshop, enabling up to 100 ad banners per hour with minimal manual input and robust logging/monitoring to support production use."
    ]
  },
  {
    key:3,
    position: "Summer Research Assistant",
    company: "Georgia Tech",
    date: "May 2024 – July 2024",
    info: [
      "Collaborated with the Financial Services Innovation Lab (FSIL) to explore useful and scalable systems using state-of-the-art large language models to create intelligent financial advisory systems.",
      "Developed data-crawling and preprocessing pipelines using ScraPy and Spyder to build a large-scale financial language corpus for fine-tuning LLMs."
    ]
  }
];

const AchievementsArray = [
  {
    key: 1,
    position: "National Winner",
    company: "Dark Patterns Buster Hackathon",
    date: "2023",
    info: [
      "Secured the National Winner title by designing an intervention tool that detects and mitigates manipulative dark patterns in digital user interfaces.",
    ]
  },
  {
    key: 2,
    position: "National Winner",
    company: "Smart India Hackathon (SIH)",
    date: "2022",
    info: [
      "Awarded National Winner status for creating reconnaissance drone software that uses monocular depth estimation and YOLO target detection to autonomously navigate rescue zones.",
    ]
  },
  {
    key: 3,
    position: "Youngest Mentor",
    company: "UNESCO India–Africa Hackathon",
    date: "2022",
    info: [
      "Selected as the youngest mentor for the inaugural UNESCO India–Africa Hackathon, providing strategic guidance to international student teams.",
      "Mentored the eventual winner and runner-up teams specifically on responsible ML practices, bias mitigation, and ethical deep learning deployment."
    ]
  },
  {
    key: 4,
    position: "Global Finalist (Ranked #52)",
    company: "Shell AI Hackathon",
    date: "2023",
    info: [
      "Achieved a top global ranking of 52nd place out of thousands of international participants in the Shell AI Hackathon.",
    ]
  }
];

const ProgrammingLanguagesAndTools = [
  { key: "python", name: "Python", proficiency: 5 },
  { key: "flutter", name: "Flutter", proficiency: 4 },
  { key: "javascript", name: "JavaScript", proficiency: 4 },
  { key: "html", name: "HTML", proficiency: 4 },
  { key: "css", name: "CSS", proficiency: 4 },
  { key: "rust", name: "Rust", proficiency: 3 },
  { key: "arduino", name: "Arduino", proficiency: 3 },
  { key: "cpp", name: "C++", proficiency: 2 }
];

const PlatformsAndFrameworks = [
  { key: "runway", name: "Runway", proficiency: 4 },
  { key: "aws", name: "AWS", proficiency: 4 },
  { key: "ros", name: "ROS", proficiency: 3 },
  { key: "gazebo", name: "Gazebo", proficiency: 3 },
  { key: "sitl", name: "SITL", proficiency: 3 },
  { key: "langgraph", name: "LangGraph", proficiency: 5 },
  { key: "langchain", name: "LangChain", proficiency: 5 },
  { key: "crewai", name: "CrewAI", proficiency: 4 },
  { key: "react", name: "React", proficiency: 5 },
  { key: "framer-motion", name: "Framer-Motion", proficiency: 4 },
  { key: "mongodb", name: "MongoDB", proficiency: 4 },
  { key: "mysql", name: "MySQL", proficiency: 4 },
  { key: "qdrant", name: "Qdrant", proficiency: 4 }
];

const MachineLearningAndDeepLearning = [
  { key: "pytorch", name: "PyTorch", proficiency: 4 },
  { key: "tensorflow", name: "TensorFlow", proficiency: 4 },
  { key: "scikit-learn", name: "Scikit-Learn", proficiency: 4 }
];

const Other = [
  { key: "dsa", name: "Data Structures and Algorithms", proficiency: 4 },
  { key: "rest-apis", name: "REST APIs", proficiency: 4 },
  { key: "microservices", name: "Microservices", proficiency: 4 },
  { key: "agents", name: "Agents", proficiency: 5 },
  { key: "ai-workflows", name: "AI workflows", proficiency: 5 }
];

const navigation = [
  { name: 'Home', href: '#/' },
  { name: 'My Projects', href: 'https://github.com/PsVenom' },
  { name: 'Contact', href: '#/contact' },
];


const cardVariants = {
    initial: {
        y: 50,
        opacity:0
    },
    onscreen: {
        y: 0,
        opacity:1,
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.8,
        },
    },
    exit:{
      y:0,
      opacity:0
    }
}

function Card(props) {
  let { position, company, date, info } = props.props;
  
  const infoList = info.map((item, index) => {
    return <li key={index}>{item}</li>
  });

  return (
    <motion.div
    initial="initial"
    whileInView="onscreen"
    exit="exit"
    >
      <motion.div className="text-white" variants={cardVariants}>
        <div className="metadata flex flex-row relative left-8">
          <div className="question flex-1/12">{company}</div>
          <div className="font-extralight place-self-center">{date}</div>
        </div>
        <div className="w-5/12 border-b"></div>
        <div className="font-extralight relative left-8">{position}</div>
        <br />
        <ul className="answer relative left-12 list-disc">{infoList}</ul>
      </motion.div>
    </motion.div>
  );
}


function ProficiencyCard(props){
  let {key, name, proficiency} = props.props;
    return (
    <motion.div
    initial="initial"
    whileInView="onscreen"
    exit="exit"
    >
      <motion.div className="text-white" variants={cardVariants}>
        <div className="metadata flex flex-row relative left-8">
          <div className="question flex-1/12">{name}</div>
                          <div class="progress w-4/12 bg-neutral-quaternary place-self-center h-2.5 me-2">
                    <motion.div className="progress bg-white h-2.5" initial={{width:"0%"}} animate={{width: `${proficiency/5*100}%`, duration: 1}}></motion.div>
                </div>
          <div className="font-extralight place-self-center">{proficiency}</div>
        </div>
        <div className="w-5/24 border-b"></div>
      </motion.div>
    </motion.div>
  );
}

function Experience(props) {
  let a = props.array;
  let title = props.title;

  let cards = a.map(item => {
    return (
      <Fragment key={item.key}>
        <Card props={item} />
        <br />
      </Fragment>
    );
  });

  return (
    <div className="relative left-2/24">
      <span className="font-extrabold text-9xl">{title}</span>
      <div className="relative w-10/12 border-l-4">
        <br />
        <div className="relative">
          {cards}
        </div>
      </div>
    </div>
  );
}

function Proficiency(props) {
  let arrays = props.arrays
  let len = arrays.length
  let [arr, getArr] = useState(0); //will cycle from elements 0  to 3 
  let titles = ["Languages","Frameworks","ML/DL/AI tools", "Other"]
  let a = arrays[arr];
  let title = props.title;

  let cards = a.map(item => {
    return (
      <Fragment key={item.key}>
        <ProficiencyCard props={item} />
        <br />
      </Fragment>
    );
  });
  function changeValPlus(){
    getArr((arr+1)%len);
  }
  function changeValMinus(){
    if (arr<=0){
     getArr((len-arr-1)%len);

    }
    else{
      getArr((arr-1))

    }
  }
  return (
    <div className="relative left-2/24">
      <div className="flex flex-row w-10/12">
      <span className="flex-1/12 font-extrabold text-9xl relative ">{title}</span>
      <div className="relative place-self-center flex flex-row">
      <button className="button" onClick={changeValMinus}>{"<"}</button>
      <span> {titles[arr]} </span>
      <button className="button" onClick={changeValPlus}>{">"}</button>
      </div>
      </div>
      <div className="relative w-10/12 border-l-4">
        <br />
        <div className="relative">
          {cards}
        </div>
      </div>
    </div>
  );
}
export function AboutMe() {
  return (
    <>
      <div className="flex-row">
        <nav aria-label="Global" className="flex-initial left-0 items-center justify-center p-6 lg:px-8 order-10 z-10">
          <div className="flex lg:gap-x-18 gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="nav" style={{ fontSize: '1rem' }}>
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <div className="relative w-150 h-150 place-self-center">
          <Anim/>
        </div>
        <div className="relative text-white text-[1.3rem] left-1/24 w-11/12 gap-2">
          <p className="text-center text-2xl">
            Hi, I'm Parth. Welcome to my website!<br />
            I am a self-taught developer, AI engineer, startup co-founder, and an occasional speedcuber.
            I have been building random stuff for almost 6 years now, ranging from silly Arduino projects to fully-deployed products trusted by thousands of developers worldwide.
          </p>
          <br />
          <br />
          <br/>
          <br />
          <br/>
          <Experience title={"Experience"} array={ExperienceArray} />
          <br />
          <br />
          <br/>
          <br />
          <br/>
          <Proficiency title={"Skills"} arrays={[ProgrammingLanguagesAndTools, PlatformsAndFrameworks, MachineLearningAndDeepLearning, Other]}/>
          <br />
          <br />
          <br/>
          <br />
          <br/>
          <Experience title={"Achievements"} array={AchievementsArray}/>
        </div>
      </div>
    </>
  );
}

