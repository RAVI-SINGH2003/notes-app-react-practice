import Header from './components/Header.js'
import Footer from './components/Footer.js'
import NotesArea from "./components/NotesArea.js";
import './App.css'
function App(){
  return (
    <div className="App">
      <Header />
       <NotesArea/>
      <Footer />
    </div>
  );
}
export default App;