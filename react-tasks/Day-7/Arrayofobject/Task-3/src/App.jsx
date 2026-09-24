

const App = () => {
  const employee=[
    {id:1,name:"Anbu",department:"BCA",salary:"20000"},
    {id:2,name:"Sanjay",department:"FS",salary:"25000"},
    {id:3,name:"Akash",department:"Python",salary:"30000"},
    {id:4,name:"Vishnu",department:"Java",salary:"25000"}
  ]


  return (
    <>
    <h2 className="bg-black text-white text-center font-bold p-2 m-3">Employee Details</h2>
    <div className="bg-orange-500 flex  justify-center items-center p-2 m-3">

      {
        employee.map((employee)=>(
          <div className="bg-blue-400 p-2 m-3 font-bold" key={employee.id}>
            <p>Name:{employee.name}</p>
            <p>Department:{employee.department}</p>
            <p>Salary:{employee.salary}</p>

          </div>
        ))
      }
    </div>
    
    
    </>
  )
}

export default App