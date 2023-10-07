import './App.css';

function App() {
  const greet = ()=>{
    alert("Hello click event occurs");
  }

  return (
    <>
      <button onClick={greet}>Click</button>
      {/* <button onClick={()=>{
        alert("Hello click event occurs");
      }}>Click</button> */}

    </>
  )
}

export default App
