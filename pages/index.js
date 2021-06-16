import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { useState } from 'react'
export default function Home() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState({})
  const changeStep = (newStep, data) => {
    setData(CONTENT[data])
    setStep(newStep)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      </Head>
      <div className={styles.page}>
        {step === 1 && (
          <StepOne changeStep={changeStep} />
        )}
        {step === 2 && (
          <StepTwo changeStep={changeStep} data={data} />
        )}
        {step === 3 && (
          <StepThree changeStep={changeStep} />
        )}
      </div>
    </div>
  )
}
const StepTwo = ({ data, changeStep }) => {
  return (
    <>
      <div className={styles.logoWrapper}>
        <img src="/images/logo.png" />
      </div>
      <h2 style={{ textAlign: 'center' }}>{data.title}</h2>
      <div>
        <ul>
          { 
            data.children.map(child => {
              return <li>{child.text}</li>
            })
          }
          <li>dad</li>
        </ul>
      </div>
    </>
  )
}
const StepThree = () => {
  return (
    <div>Three</div>
  )
}
const StepOne = ({ changeStep }) => {
  return (
    <>
      <div className={styles.logoWrapper}>
        <img src="/images/logo.png" />
      </div>
      <h2 style={{ textAlign: 'center' }}>DE QUEL DESSERT GLACÉ AVEZ-VOUS ENVIE CET ÉTÉ?</h2>
      <div className={styles.homeList}>
        <ul>
          <li onClick={() => changeStep(2, 'fabulous')}>Les Fabuleux<img src="/images/lesFabuleux.png" /></li>
          <li onClick={() => changeStep(2, 'classic')}>Les Classiques<img src="/images/classics.png" /></li>
          <li onClick={() => changeStep(2, 'boire')}>À boire<img src="/images/drink.png" /></li>
        </ul>
      </div>
    </>
  )
}
const CONTENT = {
  classic: {
    title: "Découvrez tous nos classiques!",
    backgroundUrl: '/images/icecreems.png',
    children: [
      { text: "Crème Glacée Molle", title: "Découvrez nos crèmes molles enrobées!", backgroundUrl: '/images/icecreems.png', link: { text: "Trouver une succursale", href: "https://google.com" } },
      { text: "Crème Glacée Molle Enrobée", title: "Découvrez notre Banane royale!", backgroundUrl: '/images/icecreems.png', link: { text: "Trouver une succursale", href: "https://google.com" } },
      { text: "Découvrez notre Brownie!", title: "Découvrez notre Brownie!", backgroundUrl: '/images/icecreems.png', link: { text: "Trouver une succursale", href: "https://google.com" } },
      { text: "Vic-Mixte", title: "Découvrez notre Poutine Glacée!", backgroundUrl: '/images/icecreems.png', link: { text: "Trouver une succursale", href: "https://google.com" } },
    ]
  },
  fabulous: {
    title: "Découvrez tous nos fabuleux!",
    backgroundUrl: '/images/icecreems2.png',
    children: [
      { text: "Poutine glacée", title: "Découvrez nos crèmes molles!", backgroundUrl: '/images/icecreems.png', link: { text: "Trouver une succursale", href: "https://google.com" } },
      { text: "Brownie", title: "Découvrez nos slush!", backgroundUrl: '/images/icecreems.png', link: { text: "Trouver une succursale", href: "https://google.com" } },
      { text: "Banane Royale", title: "Découvrez nos givrés!", backgroundUrl: '/images/icecreems.png', link: { text: "Trouver une succursale", href: "https://google.com" } },
    ]
  },
  boire: {
    title: "Découvrez tous nos fabuleux!",
    backgroundUrl: '/images/icecreems2.png',
    children: [
      { text: "Givré", title: "Découvrez nos Vic-Mixtes!", backgroundUrl: '/images/icecreems.png', link: { text: "Trouver une succursale", href: "https://google.com" } },
      { text: "Slush", title: "Découvrez nos sundaes!", backgroundUrl: '/images/icecreems.png', link: { text: "Trouver une succursale", href: "https://google.com" } },
      { text: "Milkshake", title: "Découvrez nos Milkshakes!", backgroundUrl: '/images/icecreems.png', link: { text: "Trouver une succursale", href: "https://google.com" } },
    ]
  }
}
