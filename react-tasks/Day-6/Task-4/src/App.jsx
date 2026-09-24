import Employee from "./Employee"


const App = () => {
  const data={
    name:"Anbu",
    role:"HR",
    salary:25000,
    city:"chennai"
  }
  return (
    <>
    <Employee anbu={data}/>
    </>
  )
}

export default App