
import Navbar from"./components/Navbar"
const App = () => {
    const data={
        appname:"hello"
    }
    const logodata="vyshnavi"
    const test="Hello World:)"
  return (
    <>
   <p className="text-pink-500">{test}</p>
    <Navbar appdata={data} logo={logodata}/>
    </>
   
  )
}

export default App