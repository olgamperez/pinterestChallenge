import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBell, faUser, faComment, faEllipsisH, faCommentDots, faUpload, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import ImagesApi from './components/images-js/api.js';
import { createModal, closeModal } from './actions/actionModal';
import { connect } from 'react-redux';
import ModalComponent from './components/modal/modal';

library.add(fab, faBell, faUser, faComment, faEllipsisH, faCommentDots, faUpload, faAngleLeft)

class App extends Component {
  constructor(){
    super()
    this.state={
      pixeles: false,
    }
    this.scrollPixel = this.scrollPixel.bind(this);
  }
  scrollPixel() {
    // console.log("Llevamos  > "+(document.documentElement.scrollTop + window.innerHeight));
    // console.log("Limite > "+(document.documentElement.offsetHeight * 0.8 ));
    if (document.documentElement.scrollTop + window.innerHeight > document.documentElement.offsetHeight * 0.8 ){
      this.setState({
        pixeles: true,
      })
    }
  }
  componentDidMount(){
    window.onscroll = ()=> this.scrollPixel()
    console.log(window.screen.height)
  }
  render() {
    return (
      <div className="App">
      <Header/>
      <ImagesApi updateFunction={this.state.pixeles}/>
      {this.props.modalReducers.modal &&
      <ModalComponent />
      }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createModalAction: createModal.bind(null, dispatch),
  closeModalAction: closeModal.bind(null, dispatch)
});


  const mapStateToProps = state => ({
    ...state
    });

    export default 
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(App);