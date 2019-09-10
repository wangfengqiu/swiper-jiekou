import Mock from "mockjs";

var data=[
    {id:1,title:"swiper1"},
    { id: 2, title: "swiper2" },
    { id: 3, title: "swiper3" },
    { id: 4, title: "swiper4" },
    { id: 5, title: "swiper5" },
    { id: 6, title: "swiper6" },
    { id: 7, title: "swiper7" },
    { id: 8, title: "swiper8" },
    { id: 9, title: "swiper9" },
    { id: 10, title: "swiper10" },

]
Mock.mock("/cal", "post",(options)=>{
    let {count} =JSON.parse(options.body);
    let arr =data.slice(0,count)
    return{
        "data":arr
    }
})