

import { Anim } from "../../components/David/Animate";
import { Fragment } from 'react';
import * as motion from "motion/react-client"

const ContactArray = [
  {
    key: 1,
    position: "Email",
    company: "parthsharma1401@proton.me",
    date: "Primary Contact",
    info: [
      "Feel free to reach out for collaboration opportunities, technical discussions, or general inquiries.",
    ],
    href: "mailto:parthsharma1401@proton.me"
  },
  {
    key: 2,
    position: "GitHub",
    company: "github.com/PsVenom",
    date: "Open Source",
    info: [
      "Check out my latest projects, contributions, and code repositories.",
    ],
    href: "https://github.com/PsVenom"
  },
  {
    key: 3,
    position: "LinkedIn",
    company: "Professional Network",
    date: "Connect",
    info: [
      "Let's connect for professional networking and industry discussions.",
    ],
    href: "https://www.linkedin.com/in/parth-sharma-🐈-1877bb203"
  }
];

const navigation = [
  { name: 'Home', href: '#/' },
  { name: 'My Projects', href: 'https://github.com/PsVenom' },
  { name: 'About', href: '#/about' },
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

function ContactCard(props) {
  let { position, company, date, info, href } = props.props;
  
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
          <div className="question flex-1/12">
            <a href={href} className="hover:text-blue-400 transition-colors">
              {company}
            </a>
          </div>
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

function ContactSection(props) {
  let a = props.array;
  let title = props.title;

  let cards = a.map(item => {
    return (
      <Fragment key={item.key}>
        <ContactCard props={item} />
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

export function ContactMe() {
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
            <div className=" h-full w-full place-content-center">
                        <ContactSection title={"Contact"} array={ContactArray} />

            </div>
        </div>
    </>
  );
}