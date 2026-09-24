const App = () => {
  const students = [
    { id: 1, name: "Anbu", age: 20, course: "Frontend" },
    { id: 2, name: "Akash", age: 23, course: "Python" },
    { id: 3, name: "Sanjay", age: 22, course: "FS" },
    { id: 4, name: "Vishnu", age: 23, course: "BCA" },
  ];
  return <>
   <div>
    {
      students.map((students)=>(
        <div className="bg-blue-700 text-white flex-wrap p-2 m-3 w-50" key={students.id}>
          <p>{students.name}</p>
          <p>{students.age}</p>
          <p>{students.course}</p>


        </div>
      ))
    }
   </div>
  
  
  </>;
};

export default App;
