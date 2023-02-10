const btn = document.querySelector('.btn')
const ele = document.querySelector('.main')
btn.addEventListener('click',()=>{
setTimeout(()=>{
    ele.innerHTML=10
    ele.style.color="green";
    setTimeout(()=>{
        ele.innerHTML=9
        ele.style.color="orange";
        setTimeout(()=>{
            ele.innerHTML=8
            ele.style.color="blue";
            setTimeout(()=>{
                ele.innerHTML=7
                ele.style.color="orange";
                setTimeout(()=>{
                    ele.innerHTML=6
                    ele.style.color="orange";
                    setTimeout(()=>{
                        ele.innerHTML=5
                        ele.style.color="orange";
                        setTimeout(()=>{
                            ele.innerHTML=4
                            ele.style.color="orange";
                            setTimeout(()=>{
                                ele.innerHTML=3
                                ele.style.color="orange";
                                setTimeout(()=>{
                                    ele.innerHTML=2
                                    ele.style.color="orange";
                                    setTimeout(()=>{
                                        ele.innerHTML=1
                                        ele.style.color="orange";
                                        setTimeout(()=>{
                                            
                                            ele.innerHTML= 'Happy Independence Day <br> <img src="./img.jpg" alt="flag">'
                                            
                                            
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)})