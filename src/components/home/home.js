import React, { Component } from 'react';
import Header from "../../common/header/header";
import {request_list} from "../../store/action";
import {connect} from "react-redux";
class Home extends Component {
    componentDidMount(){
        this.props.isdata()
    }
    render() {
        let {list} =this.props;
        console.log(list)
        return (
            <div className="wrapper">
                <Header/>
               {
                   list.map((item,index)=>{
                       return (
                           <div className="box" key={index}>
                               <p>{item.name}</p>
                               <p>{item.count}</p>
                               <div>
                                   <button>-</button>
                                   <span>{item.count}</span>
                                   <button>+</button>
                               </div>
                           </div>
                       )
                   })
               }
            </div>
        );
    }
}
function aa(state){
    return{
        list:state.list
    }
}
function bb(dispatch){
    return{
        isdata:()=>{
            dispatch(request_list())
        }
    }
}

export default connect(aa,bb)(Home);