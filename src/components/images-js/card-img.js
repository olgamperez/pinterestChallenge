import React, {Component} from "react";
import { connect } from 'react-redux';
import { createModal, closeModal }   from '../../actions/actionModal';
import './api.css'



class CardImages extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalOpen: false
        };
        this.displayModal= this.displayModal.bind(this)
        this.closeModal= this.closeModal.bind(this)
    }
    displayModal(a){
        console.log('soy un modal')
        this.setState({
            ...this.state,
            modalOpen: true
        });
        this.props.createModalAction(a);
    }
    closeModal(){
        console.log('hice click')
        this.setState({
            modalOpen: false
        });
        this.props.closeModalAction();
    }
    render(){
        return(
            <div>
                <img src={this.props.img} alt="imagsCards" onClick={()=>this.displayModal(this.props.img)}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    createModalAction: createModal(dispatch),
    closeModalAction: closeModal.bind(null, dispatch)
  });


  const mapStateToProps = state => ({
    ...state
    });

    export default 
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(CardImages);


