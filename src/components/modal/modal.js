import React, {Component} from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { createModal, closeModal }   from '../../actions/actionModal';
import './modal.css';
// import CardImages from '../images-js/card-img';

class ModalComponent extends Component {
    render(){
        return(
            <div className="container-modal">
                <div className="info-modal">
                    <FontAwesomeIcon onClick={this.props.closeModalAction} icon="angle-left" id="icon-angle"/>
                </div>
                <div className="main-modal">
                    <div className="header-modal">
                        <FontAwesomeIcon icon="ellipsis-h" id="icon-ellipsis"/>
                        <button className="btn-modal" ><FontAwesomeIcon icon="upload" id="icon-upload"/>Enviar</button>
                        <button className="btn-modal save">Guardar</button>
                    </div>
                <div className="body-modal">
                    <div className="cont-imag">
                        <img id="modal-cards" src={this.props.modalReducers.modal} alt="imgModal"/>
                    </div>
                </div>
                </div>
            </div>
        )
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
    )(ModalComponent);

