import React from 'react'
import Navbar from './../component/Navbar'
import Footer from '../component/Footer'







class Main extends React.Component{
  render(){
    return(
      <div>
      <Navbar />
      {this.props.children}
      <Footer />

      </div>

    )
  }
}

export default Main;
