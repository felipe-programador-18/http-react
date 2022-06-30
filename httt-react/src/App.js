import React,{useState} from 'react'
import './App.css';
import { useFecthing } from './hooks/useFetch'

const url ='http://localhost:3000/products'

 function App() {
  //const [products, Setproducts] = useState([])
  const [price, Setprice] = useState('')
  const [name, Setnome] = useState('')
    
  //4 works with hooks personalites
  const { data:items, httpConfig, loading, error } = useFecthing(url)

 //2-adding products!!
 const handSubmi = async(e) => {
    e.preventDefault()
    const product = {
      name, 
      price
    };
    httpConfig(product,"POST")
    Setprice('')
    Setnome('')
 }
 const handRemove = (id) => {
  httpConfig(id, "DELETE")
 }

 
  return ( 
    <div className="App">
     <h1>list of products!!</h1>
     {loading && <p>carregando dados ....</p>}
     {error && <p>{error}</p>}

     {!loading && (  <ul>
      { items &&  items.map((produts) => 
      (<li key={produts.id} > {produts.name} - R$:{produts.price} 
       <button onClick={() => handRemove(produts.id)} >Excluir</button>
      </li>))}

     </ul>  ) }
     
    
      <div className='add-products' >
        <h1>Adding products !!! </h1>
        <form onSubmit={handSubmi} >
          <label>
            Nome:
           <input type='text'  value={name} name='name' onChange={(e)=> Setnome(e.target.value)} />
          
          </label>
          <label>
            Price:
           <input type='text'  value={price} name='price' onChange={(e)=> Setprice(e.target.value)} />
          </label>
          { loading && <input type='submit' disabled  value='aguardar'/> }
          { !loading && <input type='submit'  value='criar produto'/>  }
         

        </form>
      </div>
    
    
    </div>
  );
}

export default App;
