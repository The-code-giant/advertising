import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { useState } from "react";
export default function Home() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});
  const changeStep = (newStep, data) => {
    if (newStep === 3) {
      setData(data);
      setStep(newStep);
    } else {
      setData(CONTENT[data]);
      setStep(newStep);
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* http://huffpost.sofiapulse.com/fvictoria.html */}
        {/* https://reactcommunity.org/react-transition-group/transition */}
        <link
          href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className={styles.page}>
        {step === 1 && <StepOne changeStep={changeStep} />}
        {step === 2 && <StepTwo changeStep={changeStep} data={data} />}
        {step === 3 && <StepThree changeStep={changeStep} data={data} />}
      </div>
    </div>
  );
}
const StepTwo = ({ data, changeStep }) => {
  return (
    <div className={styles.stepTwoWrapper}>
      <div className={styles.logoWrapper}>
        <img src="/images/logo.png" />
      </div>
      <div className={styles.contentWrapper}>
        <h2>{data.title}</h2>
        <div>
          <ul>
            {data.children.map((child) => {
              return <li onClick={() => changeStep(3, child)}>{child.text}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className={styles.imgBack}>
        <img src={data.backgroundUrl}></img>
      </div>
    </div>
  );
};
const StepThree = ({ data, changeStep }) => {
  console.log(data.backgroundUrl, "the  backgroundurl");
  return (
    <div
      className={styles.stepThreeWrapper}
      style={{ backgroundColor: data.bgColor }}
    >
      <div className={styles.logoWrapper}>
        <img src="/images/logo.png" />
      </div>
      <div className={styles.contentWrapper}>
        <h2>{data.title}</h2>
      </div>
      <div
        className={styles.imageThirdBack}
        style={{ backgroundImage: `url(${data.backgroundUrl})` }}
      >
      </div>
      <div className={styles.linkBtnWrapper}>
        <a className="exLink" href={data.link.href}>{data.link.text}</a>
      </div>
    </div>
  );
};
const StepOne = ({ changeStep }) => {
  return (
    <>
      <div className={styles.logoWrapper}>
        <img src="/images/logo.png" />
      </div>
      <h2 style={{ textAlign: "center" }}>
        DE QUEL DESSERT GLACÉ AVEZ-VOUS ENVIE CET ÉTÉ?
      </h2>
      <div className={styles.homeList}>
        <ul>
          <li onClick={() => changeStep(2, "fabulous")}>
            Les Fabuleux
            <img src="/images/lesFabuleux.png" />
          </li>
          <li onClick={() => changeStep(2, "classic")}>
            Les Classiques
            <img src="/images/classics.png" />
          </li>
          <li onClick={() => changeStep(2, "boire")}>
            À boire
            <img src="/images/drink.png" />
          </li>
        </ul>
      </div>
    </>
  );
};
const CONTENT = {
  classic: {
    title: "Découvrez tous nos classiques!",
    backgroundUrl: "/images/classic/icecreams3.png",
    children: [
      {
        text: "Crème Glacée Molle",
        bgColor: "#97d7df",
        title: "Découvrez nos crèmes molles enrobées!",
        backgroundUrl: "/images/icecreems.png",
        link: { text: "Trouver une succursale", href: "https://google.com" },
      },
      {
        text: "Crème Glacée Molle Enrobée",
        bgColor: "#dbb5bf",
        title: "Découvrez notre Banane royale!",
        backgroundUrl: "/images/icecreems.png",
        link: { text: "Trouver une succursale", href: "https://google.com" },
      },
      {
        text: "Découvrez notre Brownie!",
        bgColor: "#f7d873",
        title: "Découvrez notre Brownie!",
        backgroundUrl: "/images/icecreems.png",
        link: { text: "Trouver une succursale", href: "https://google.com" },
      },
      {
        text: "Vic-Mixte",
        bgColor: "#f1b1a8",
        title: "Découvrez notre Poutine Glacée!",
        backgroundUrl: "/images/icecreems.png",
        link: { text: "Trouver une succursale", href: "https://google.com" },
      },
    ],
  },
  fabulous: {
    title: "Découvrez tous nos fabuleux!",
    backgroundUrl: "/images/classic/icecreams1.png",
    children: [
      {
        text: "Poutine glacée",
        bgColor: "rgb(246 196 208)",
        title: "Découvrez nos crèmes molles!",
        backgroundUrl: "/images/fabulous/b1.jpg",
        link: { text: "Trouver une succursale", href: "https://google.com" },
      },
      {
        text: "Brownie",
        bgColor: "rgb(246 196 208)",
        title: "Découvrez nos slush!",
        backgroundUrl: "/images/fabulous/b2.jpg",
        link: { text: "Trouver une succursale", href: "https://google.com" },
      },
      {
        text: "Banane Royale",
        bgColor: "#f7d569",
        title: "Découvrez nos givrés!",
        backgroundUrl: "/images/fabulous/b3.jpg",
        link: { text: "Trouver une succursale", href: "https://google.com" },
      },
    ],
  },
  boire: {
    title: "Découvrez tous nos fabuleux!",
    backgroundUrl: "/images/classic/icecreams2.png",
    children: [
      {
        text: "Givré",
        bgColor: "#9dd4a3",
        title: "Découvrez nos Vic-Mixtes!",
        backgroundUrl: "/images/icecreems.png",
        link: { text: "Trouver une succursale", href: "https://google.com" },
      },
      {
        text: "Slush",
        bgColor: "#f3bbc4",
        title: "Découvrez nos sundaes!",
        backgroundUrl: "/images/icecreems.png",
        link: { text: "Trouver une succursale", href: "https://google.com" },
      },
      {
        text: "Milkshake",
        bgColor: "#f3bbc4",
        title: "Découvrez nos Milkshakes!",
        backgroundUrl: "/images/icecreems.png",
        link: { text: "Trouver une succursale", href: "https://google.com" },
      },
    ],
  },
};
