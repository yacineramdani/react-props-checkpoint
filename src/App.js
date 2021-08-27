import ProfileComponent from './profile/ProfileComponent';
import './App.css';
import ProfileImg from "./propic.jpg"

function App() {
  const handleName = (fullName) => {
    alert(`Name of the profile user is ${fullName}`)
  }
  return (
    <div className="App">
      <ProfileComponent fullName="Afaf" profession="Developer" bio="I know everything" handleName={handleName}><img src={ProfileImg} alt="" /></ProfileComponent>
      <ProfileComponent fullName="Yacine" profession="Developer" bio="I know nothing" handleName={handleName}><img src={ProfileImg} alt="" /></ProfileComponent>
      <ProfileComponent/>
    </div>
  );
}


export default App;
