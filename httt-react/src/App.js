import React,{useState, useEffect} from 'react'
import './App.css';
import { useFecthing } from './hooks/useFetch'

const url ='http://localhost:3000/products'

 function App() {
  const [products, Setproducts] = useState([])
  const [price, Setprice] = useState('')
  const [name, Setnome] = useState('')
    
  //4 works with hooks personalites
  const { data:items, httpConfig } = useFecthing(url)


  //1 rescuers data!!
 // useEffect( () => {
   //  const FetchingDate = async() =>{
    // const res = await fetch(url)
    // const data = await res.json()
    // Setproducts(data)
   // }
   // FetchingDate()
  //}, []);
  //console.log(products)
 //}

 //2-adding products!!
 const handSubmi = async(e) => {
    e.preventDefault()
    const product = {
      name, 
      price
    };
    //headers are requested
    //const res = await fetch(url, {
     // method:"POST",
      //headers:{
       //"Content-Type":'application/json'
      //},
      //body: JSON.stringify(product),
    //})
   // 3 create another functions that handle with loaded dynamic
    //const AddingProduct =  await res.json()
    //Setproducts((prevProducts) => [...prevProducts, AddingProduct] )
    
    //5  refactor code and 
    httpConfig(products,"POST")

    Setprice('')
    Setnome('')
 }


 
  return ( 
    <div className="App">
     <h1>list of products!!</h1>
     { items &&  items.map((produts) => (<li key={produts.id} > {produts.name} - R$:{produts.price} </li>))}
    
    
      <div className='add-products' >
        <h1>Adding products !!! </h1>
        <form onSubmit={handSubmi} >
          <label>
            Nome:
           <input type='text'  value={name} name='name' onChange={(e)=> Setnome(e.target.value)} />
          
          </label>
          <label>
            Price:
           <input type='text'  value={price} name='name' onChange={(e)=> Setprice(e.target.value)} />
          </label>
          <input type='submit'  value='criar produto'/>

        </form>
      </div>
    
    
    </div>
  );
}

export default App;
