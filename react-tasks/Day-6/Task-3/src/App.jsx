

const App = () => {

  const product=[
    
    {id:100,name:"mobile",price:1000,category:"electronics"},
    {id:101,name:"laptop",price:15000,category:"electronics"},
    {id:102,name:"mouse",price:450,category:"electronics"},
    {id:103,name:"keyboard",price:500,category:"electronics"}
  ]
  return (
    <>
    <div>
      {
        product.map((product)=>(
         <div  key={product.id}>
          <h2 className="bg-blue-300">{product.name}</h2>
          <p>Price: ₹{product.price}</p>
          <p>Category: {product.category}</p>
        </div>
        ))
      }
    </div>
    
    </>
  )
}

export default App