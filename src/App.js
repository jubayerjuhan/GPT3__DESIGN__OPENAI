import { Brand, CTA, Navbar } from './components/componentIndex'
import { Blog, Features, Footer, Header, Possiblity, WhatGPT3 } from './containers/containerIndex'
import './App.css'
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possiblity />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
