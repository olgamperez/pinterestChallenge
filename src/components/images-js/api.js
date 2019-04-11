import React, {Component} from 'react';
import './api.css'
import CardImages from './card-img.js';
import { connect } from 'react-redux';
import { createModal }   from '../../actions/actionModal';


class ImagesApi extends Component{
    constructor(props){
        super(props)
        this.state={
            imag: [],
            upload: false,
        }
    }
    componentDidMount(){
        fetch('https://api.unsplash.com/search/photos?page=1&per_page=100&query=love&client_id=f548773e48f40366d0c1cb18ec4fb32c9fc3dc4ec9c6aa09b06a0e9d68e6bcf0')
        .then(response => response.json())
        .then(json =>{
            this.setState({
                ...this.state,
                imag: json.results,
            })
        });
    }
    componentDidUpdate(){
        console.log(this.props)
        if(this.props.updateFunction !== this.state.upload){
            this.setState({
                ...this.state,
                upload: true,
                
            })
            fetch('https://api.unsplash.com/search/photos?page=2&per_page=100&query=love&client_id=f548773e48f40366d0c1cb18ec4fb32c9fc3dc4ec9c6aa09b06a0e9d68e6bcf0')
            .then(response => response.json())
            .then(json =>{
                this.setState({
                    upload: true,
                    imag: this.state.imag.concat(json.results)
                })
            });
        }
    }
    render(){
        const dataImag = this.state.imag
        const dataImagAcc = dataImag.map((i,index)=> {
            return <CardImages img={i.urls.thumb} alt="imagsApi" key={index} id="card-img"/>
        })
        return(
            <div className="cards" id="returnApi">
                {dataImagAcc}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    createModalAction: createModal
});


const mapStateToProps = state => ({
    ...state
    });

    export default 
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(ImagesApi);