!function () {
    function writeCode(prefix,code,fn) {
        let container=document.querySelector('#code')
        let styleTag=document.querySelector('#styleTage')
        let n=0
    let id = setInterval(()=>{
            n+=1
            container.innerHTML=code.substring(0,n)
            styleTag.innerHTML=code.substring(0,n)
            container.scrollTop=container.scrollHeight;
            if(n>=code.length){
             window.clearInterval(id) 
             fn&&fn.call()
            }
        },15)
    }
    let code=`
    /*
     * 画一个皮卡丘前，先来个黄色！
     */
       .preview{
        height: 100%;
        border: 1px solid green;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FFE600;
        }
        .wrapper{
            width: 100%;
            height: 186px;
            position: relative;
        }
        .wrapper>:not(:last-child){
            z-index: 1;
        }
        /*先来个鼻子吧~*/
        .nose{
            width: 0px;
            height: 0px;
            border: 12px solid red;
            border-color: black transparent transparent;
            border-radius: 12px;
            position: absolute;/*使用绝对定位*/
            left:50%;
            top: 28px;
            margin-left: -12px;
        }
        /*来个眼睛吧~*/
        .eye{width: 49px;
            height: 49px;
            background:#2e2e2e;
            position: absolute;
            border-radius: 50%;
        }
        .eye::before{
            content: '';
            display: block;
            width: 24px;
            height: 24px;
            background: white;
            position: absolute;
            border-radius: 50%;
            left: 7px;
            top:2px;
            border: 2px solid #030;
        }
        /*左眼在左边*/
        .eye.left{
            right: 50%;
            margin-right: 90px;
        }
        /*右眼在右边*/
        .eye.right{
            left: 50%;
            margin-left: 90px;
        }
        /*来个腮*/
        .face{
            width: 67px;
            height: 67px;
            background: #FF0000;
            border-radius: 50%;
            border: 2px solid #030; 
            position: absolute;  
            top: 85px;
        }
        /*左腮*/
        .face.left{
            right: 50%;
            margin-right: 116px;
        }
        /*右腮*/
        .face.right{
            left: 50%;
            margin-left: 116px;
        }
        /*嘴唇来也*/
        .upperLip{
        height: 23px;
        width: 75px;
        border: 2px solid black;
        position: absolute; 
        top: 31%;
        background: #FFE600;
        }
        .upperLip.left{
        right: 50%;
        border-bottom-left-radius: 40px 25px;
        border-top: none;
        border-right: none;
        transform: rotate(-20deg);
        }
        .upperLip.right{
        left: 50%;
        border-bottom-right-radius: 40px 25px;
        border-top:none;
        border-left: none; 
        transform: rotate(20deg);
        }
        /*嘴巴*/
        .lowerLip-wrapper{
            bottom: 0;
            position: absolute;
            left: 50%;
            margin-left: -150px;
            height: 120px; 
            width: 300px;
            overflow: hidden;
            top:36%
        }
        .lowerLip{
            width: 300px;
            height: 3500px;
            background: #A71412;
            border-radius: 200px/2000px;
            border: 2px solid black;
            position: absolute;
            bottom: 0;
            overflow: hidden;
        }
        /*舌头*/
        .lowerLip::after{
            content: '';
            position: absolute;
            bottom: 0;
            height: 100px;
            width: 100px;
            border-radius: 50%;
            background: #FF5D62;
            
            left: 50%;
            margin-left: -50px;
        }
        /*画好啦*/`
    writeCode('',code)
}.call()
