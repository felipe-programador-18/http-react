import {useState, useEffect} from 'react'

//create hook personaties!!
// this is one kind to rearrange code is very interesting!!
//4 customize hoock
export const useFecthing = (url) => {
   const [data, setDate] = useState(null)
    
   //5 refactor post
   const [setting, setSetting] = useState(null)
   const [method, setMethod] = useState(null)
   const [callfec, setCallfet] = useState(false)  
  
   // 6-LOADING
   const [loading, setLoading] = useState(false)

   //7- treat error
   const [error, setError] = useState(null)
   
   //8 deleted id
   const[itemid, setItemid] = useState(null)
 

   const httpConfig =  (data, method) => {
    if(method === 'POST'){
        setSetting({
          method,
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify(data)
        })
        setMethod("POST")
     }else if(method === 'DELETE'){
      setSetting({
        method,
        headers:{
          "Content-Type":"application/json"
        },
      })
      setMethod('DELETE')
      setItemid(data)
     }
    }
   
   useEffect(() => {
    const FetchingDate = async () => {
      //6 adding kind of loading here
      setLoading(true)
      try {
       const res = await fetch(url)
       const json = await res.json()
       setDate(json)
       setMethod(null)
       setError(null)
      } catch (error) {
       console.log(error.message)
       setError("Have error here!!!")     
      }
      setLoading(false)
    }; 
    FetchingDate() 
   },[url, callfec]);

   //5 refactor  post

   useEffect(() => {
    if(method === "POST"){
       const httpRequest = async () => {
        if(method === "POST"){
          setLoading(true)
          let fecthOptions = [url, setting]
          const res = await fetch(...fecthOptions)
          const json = await res.json();
          setCallfet(json)
        }else if(method === "DELETE"){
          const deleteUrl = `${url}/${itemid}`
          const res = await fetch(deleteUrl,setting)
          const json = await res.json();
          setCallfet(json) 
         }
        
        };
     httpRequest()
     }
    },[setting])
    console.log(setting)
    return { data, httpConfig, loading, error }
}

