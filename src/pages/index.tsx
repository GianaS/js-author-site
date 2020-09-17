import React from 'react'

import Header from '../components/Header'

const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <div style={{height: '1000px', display: 'flex', justifyContent: 'center', paddingTop: '40px'}}>Janelle's Website</div>
    </>
  )
}

export default Home