import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyConponent'; 
import Video from './components/Video';
 

function App() {
     
    const name = "Tân";
    const people = { name: "Namphan", age: 18, gender: "Male" }
    return ( 
        
        <div className = "App">
            <div id="focus" tabIndex="1" className="flex flex-col items-center snap-y snap-mandatory overflow-scroll h-screen overflow-x-hidden">
                <Video></Video>
                
            </div>
            <header className = "App-header">
            <img src = { logo }className = "App-logo"alt = "logo" />
            <h1 > heloo { name } </h1> { console.log(people) } 
            < MyComponent> </MyComponent> 
            </header> 
        </div>
    );
}

export default App;