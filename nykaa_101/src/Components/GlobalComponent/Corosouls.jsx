import {useState} from "react"


const Corousels =()=>{
     const [image , setImage] = useState(0)

     const imageArr = [`https://images-static.nykaa.com/uploads/42f8176c-8ca3-43e1-991a-32dfa4ca16f7.jpg?tr=w-1200,cm-pad_resize`,`https://images-static.nykaa.com/uploads/aa5a6aa1-6cc9-47ec-b31e-cd96e48dd5f5.jpg?tr=w-1200,cm-pad_resize`]
    
    
     console.log(imageArr.length)
    
    setInterval(function(){
        
       if(image === imageArr.length -1){
        setImage(0)
       }
    
        setImage((prev)=>(prev + 1))
    
    },2000)
    
    


    return (


      <div  style={{width:"100%" , height:"300px" , border:"2px solid red" , marginTop:"10px" }} >

        <img  style={{width:"100%" , height:"100%"}}   src={imageArr[image]} alt="Slider Image" />

      </div>

    )
}

export default Corousels;