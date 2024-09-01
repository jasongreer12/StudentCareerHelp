import './App.css';
import Logo from './classroomPhoto.jpg';

function App() {
  return (
    <div className="App">
      <img src={Logo} alt="Error loading image." className="logoID"></img>
      <header className="overlay">
        <div class="input-group mb-3 custom-width">
          <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">Choose a school:</label>
          </div>
          <select class="custom-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="okstate">Oklahoma State University</option>
          </select>
        </div>
      </header>
    </div>

  );
}

export default App;
