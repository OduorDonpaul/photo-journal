
import AlbumMaker from './components/AlbumMaker';
import './App.css';
import NavBar from './components/navcomponents/NavBar';
import SearchBar from './components/SearchBar';



function App() {
  return (
    <div className="App">
      <div className="App-header">
        <NavBar />
        <div style={{color:"black"}}>
          <h1 style={{background:"	#F0F8FF", borderRadius:"1em",paddingRight:"20px",paddingLeft:"20px"}}>Welcome to my Photojournal</h1>
        </div>
   
        <SearchBar />
 
     </div>
     <div style={{fontSize:"2em"}}><h2>This is the my story</h2></div>       
      <div>
        <AlbumMaker />
        <div>&copy; 2022</div>  
      </div>
      
    </div>
  );
}

export default App;
