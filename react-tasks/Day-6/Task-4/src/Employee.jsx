

const Employee = (props) => {
    const {anbu}=props
  return (
    <>
    <div className="bg-green-400 text-center p-2" >
        <h2 className="bg-yellow-200">Employee Details</h2>
        <p className="bg-blue-700 p-1 m-3 text-white"> {anbu.name}</p>
        <p className="bg-blue-700 p-1 m-3 text-white"> {anbu.role}</p>
        <p className="bg-blue-700 p-1 m-3 text-white"> {anbu.salary}</p>
        <p className="bg-blue-700 p-1 m-3 text-white"> {anbu.city}</p>
    </div>
    
    </>
  )
}

export default Employee