import React,{useState, useEffect} from 'react'

//create hook personaties!!
// this is one kind to rearrange code is very interesting!!
//4 customize hoock
export const useFecthing = (url) => {
   const [data, setDate] = useState(null)
    
   //5 refactor post
   const [setting, setSetting] = useState(null)
   const [method, setMethod] = useState(null)
   const [callfec, setCallset] = useState(false)  
  
   // 6-LOADING
   const [loading, setLoading] = useState(false)

   const httpConfig =  (data, method) => {
    if(method === 'POST'){
        setSetting({
          method,
          headers:{
            "Content-type":"application/json"
          },
          body: JSON.stringify(data)
        })
        setMethod(method)
     }
    }
   
   useEffect(() => {
    const FetchingDate = async () => {
      //6 adding kind of loading here
      setLoading(true)
      const res = await fetch(url)
      const json = await res.json()
      
      setDate(json)
      setLoading(false)
    }; 
    FetchingDate() 
   },[url, callfec]);

   //5 refactor  post
   useEffect(() => {
    if(method === 'POST'){
       const httpRequest = async () => {
        if(method === "POST"){
            let fecthOptions = [url, setting]
            const res = await fetch(...fecthOptions)
            const json = await res.json()
            setCallset(json)
         }
        }
     httpRequest()
     } 
    },[setting, method, url])
    return { data, httpConfig, loading }
}

