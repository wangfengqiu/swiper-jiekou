import React, { Component } from 'react';
import "antd/dist/antd.css";
import axios from "axios";
import {Carousel} from "antd";
class Detail extends Component {
    constructor(){
        super()
        this.state={
            list:[]
        }
    }
        componentDidMount(){
            axios.post("/cal",{count:3}).then(res=>{
                this.setState({
                    list:res.data.data
                })
            })
        }
        render() {
            const list = this.state.list;
            console.log(list)
            return (
                <div className="detail">
                    <div className="swiper">
                       <Carousel autoplay>
                         {
                            list.map((item,index)=>{
                                return (
                                    <div key={index}>
                                        <div>{item.title}</div>
                                    </div>
                                )
                            })     
                         }  
                       </Carousel>
                    </div>

                </div>
            );
        }
    }

    export default Detail;