import axios from "axios";

var success ="success";
var start ="start";
function request_success(list){
    return{
        type:success,
        list
    }
}
function request_list(){
    return (dispatch)=>{
        axios.get("/getlist").then(res=>{
            dispatch(request_success(res.data.list))
        })
    }
}
export{
    success,start,request_list
}