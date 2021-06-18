import Head from "next/head";
import styles from "../styles/Home.module.scss";
import FadeInAnimation from '../hooks/FadeInHook'
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
        <title>ADs</title>
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
    <div className={styles.stepTwoWrapper} style={{ backgroundImage: `url(${data.backgroundUrl})` }}>
      <div className={styles.logoWrapper}>
        <img src="/images/logo.png" />
      </div>
      <div className={styles.contentWrapper}>
        <FadeInAnimation style={{ opacity: 0 }} wrapperElement="h2">{data.title}</FadeInAnimation>
        <div>
          <ul>
            {data.children.map((child, id) => {
              return (
                <FadeInAnimation style={{ opacity: 0 }} key={id} wrapperElement="li" delay={0.3 * id} onClick={() => changeStep(3, child)}>{child.text}</FadeInAnimation>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
const StepThree = ({ data, changeStep }) => {
  console.log(data.backgroundUrl, "the  backgroundurl");
  return (
    <div
      className={styles.stepThreeWrapper}
      style={{ backgroundImage: `url(${data.backgroundUrl})` }}
    >
      <div className={styles.logoWrapper}>
        <img src="/images/logo.png" />
      </div>
      <div className={styles.contentWrapper}>
      <FadeInAnimation style={{ opacity: 0 }} wrapperElement="h2" delay={0.5}>{data.title}</FadeInAnimation>
      </div>
      <div className={styles.linkBtnWrapper}>
        <FadeInAnimation wrapperElement="a" className={styles.externalLink} href={data.link.href} delay={0.7}>
          {data.link.text}
        </FadeInAnimation>
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
      <FadeInAnimation wrapperElement="h2" className={styles.h1} style={{ textAlign: "center", opacity: 0 }}>
        DE QUEL DESSERT GLACÉ AVEZ-VOUS ENVIE CET ÉTÉ?
      </FadeInAnimation>
      <div className={styles.homeList}>
        <ul>
          <FadeInAnimation wrapperElement="li" onClick={() => changeStep(2, "fabulous")} delay="0.5" style={{ opacity: 0 }}>
            Les Fabuleux
            <img src="/images/lesFabuleux.png" />
          </FadeInAnimation>
          <FadeInAnimation wrapperElement="li" onClick={() => changeStep(2, "classic")} delay="0.7"style={{ opacity: 0 }}>
            Les Classiques
            <img src="/images/classics.png" />
          </FadeInAnimation>
          <FadeInAnimation wrapperElement="li" onClick={() => changeStep(2, "boire")} delay="0.9" style={{ opacity: 0 }}>
            À boire
            <img src="/images/drink.png" />
          </FadeInAnimation>
        </ul>
      </div>
    </>
  );
};
const CONTENT = {
  classic: {
    title: "Découvrez tous nos classiques!",
    backgroundUrl: "step2/bg-classics.jpg",
    children: [
      {
        text: "Crème Glacée Molle",
        bgColor: "#97d7df",
        title: "Découvrez nos crèmes molles enrobées!",
        backgroundUrl: "/step3/bg-bees.jpg",
        link: { text: "Trouver une succursale", href: "https://google.com" },
      },
      {
        text: "Crème Glacée Molle Enrobée",
        bgColor: "#dbb5bf",
        title: "Découvrez notre Banane royale!",
        backgroundUrl: "/step3/bg-royal.jpg",
        link: { text: "Trouver une succursale", href: "https://google.com" },
      },
      {
        text: "Découvrez notre Brownie!",
        bgColor: "#f7d873",
        title: "Découvrez notre Brownie!",
        backgroundUrl: "/step3/bg-brownie.jpg",
        link: { text: "Trouver une succursale", href: "https://google.com" },
      },
      {
        text: "Vic-Mixte",
        bgColor: "#f1b1a8",
        title: "Découvrez notre Poutine Glacée!",
        backgroundUrl: "/step3/bg-glacee.jpg",
        link: { text: "Trouver une succursale", href: "https://google.com" },
      },
    ],
  },
  fabulous: {
    title: "Découvrez tous nos fabuleux!",
    backgroundUrl: "/step2/bg-fabelus.jpg",
    children: [
      {
        text: "Poutine glacée",
        bgColor: "rgb(246 196 208)",
        title: "Découvrez nos crèmes molles!",
        backgroundUrl: "/step3/bg-molles.jpg",
        link: { text: "Trouver une succursale", href: "https://google.com" },
      },
      {
        text: "Brownie",
        bgColor: "rgb(246 196 208)",
        title: "Découvrez nos slush!",
        backgroundUrl: "/step3/bg-slush.jpg",
        link: { text: "Trouver une succursale", href: "https://google.com" },
      },
      {
        text: "Banane Royale",
        bgColor: "#f7d569",
        title: "Découvrez nos givrés!",
        backgroundUrl: "/step3/bg-givres.jpg",
        link: { text: "Trouver une succursale", href: "https://google.com" },
      },
    ],
  },
  boire: {
    title: "Découvrez tous nos breuvages!",
    backgroundUrl: "/step2/bg-breuvages.jpg",
    children: [
      {
        text: "Givré",
        bgColor: "#9dd4a3",
        title: "Découvrez nos Vic-Mixtes!",
        backgroundUrl: "/step3/bg-mixtes.jpg",
        link: { text: "Trouver une succursale", href: "https://google.com" },
      },
      {
        text: "Slush",
        bgColor: "#f3bbc4",
        title: "Découvrez nos sundaes!",
        backgroundUrl: "/step3/bg-slush.jpg",
        link: { text: "Trouver une succursale", href: "https://google.com" },
      },
      {
        text: "Milkshake",
        bgColor: "#f3bbc4",
        title: "Découvrez nos Milkshakes!",
        backgroundUrl: "/step3/bg-milkshake.jpg",
        link: { text: "Trouver une succursale", href: "https://google.com" },
      },
    ],
  },
};
