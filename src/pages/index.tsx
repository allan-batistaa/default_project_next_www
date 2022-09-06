import type { NextPage } from 'next'
import Head from 'next/head'
import SecondComponent from '../components/ second-component/ Second-component'
import FirstComponent from '../components/first-component/First-component'

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Nome da sua empresa/marca</title>
      </Head>
      <div>HOME</div>
      <div><FirstComponent/></div>
      <div><SecondComponent/></div>
    </>
  )
}

export default Home
