import SearchBar from "material-ui-search-bar";
import React, { Component } from "react";
//import axios from 'axios';

// *snip*
export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            value:null,
            apiResponse: ""
        };
        this.callAPI=this.callAPI.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    // handleRequest(event) {    
    //     // console.log(this.state.value);
    //     event.preventDefault();
    //   };
    handleOnChange(newValue){
        console.log(newValue);
        this.setState({value:newValue});
    }

    callAPI(){
        let value=this.state.value;
        fetch("http://localhost:5000/:"+value)
            .then(res => res.json())
            .then(res => {
                let url = res.url;
                window.location.href = url;
            })
            .catch(err =>{
                console.log(err);
            });  
    }
    // componentDidMount()
    // {
    //     this.callAPI();
    // }
    render(){
        // let reactData=this.state.props;
        // let url="localhost:5000/SearchBar";
return (
    <SearchBar
    value={this.state.value}
    onChange={this.handleOnChange}
    onRequestSearch= {this.callAPI}
    />
);
}
}