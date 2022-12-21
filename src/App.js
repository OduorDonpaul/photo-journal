import BannerImage from './components/BannerImage';
import AlbumMaker from './components/AlbumMaker';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <BannerImage />
        <div>
          <h1>Welcome to my Photojournal</h1>
          <h3>My name</h3>
        </div>
        <AlbumMaker />
        <div>&copy; 2022</div>  
      </div>
      
    </div>
  );
}

export default App;
