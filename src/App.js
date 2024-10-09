import './App.css';
import { Course } from './components/Course';
import Lion from './images/Lion.jpg';
import Dolphin from './images/Dolphin.jpg';
import Elephant from './images/Elephant.jpg';
import Penguin from './images/Penguin.jpg';
import Tiger from './images/Tiger.jpg';  
import Giraffe from './images/Giraffe.jpg';  
import Zebra from './images/Zebra.jpg';  
import Bear from './images/Bear.jpg';  

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Animal Cards</h1>
        <p>Explore the fascinating world of animals. Each card provides information about different animals from around the world.</p>
      </header>
      <div className="card-container">
        <Course 
          image={Lion}
          title="Lion" 
          description="The lion is known as the king of the jungle. It is a large, muscular, and powerful animal that lives in the savannas and grasslands of Africa."
          link="https://en.wikipedia.org/wiki/Lion"
        />
        <Course 
          image={Dolphin}
          title="Dolphin" 
          description="Dolphins are highly intelligent marine mammals known for their playful behavior and strong social bonds."
          link="https://en.wikipedia.org/wiki/Dolphin"
        />
        <Course 
          image={Elephant}
          title="Elephant" 
          description="Elephants are the largest land animals and are known for their intelligence and social behavior."
          link="https://en.wikipedia.org/wiki/Elephant"
        />
        <Course 
          image={Penguin}
          title="Penguin" 
          description="Penguins are flightless birds that primarily live in the Southern Hemisphere, especially in Antarctica."
          link="https://en.wikipedia.org/wiki/Penguin"
        />
        <Course 
          image={Tiger}
          title="Tiger" 
          description="Tigers are the largest wild cats in the world and are known for their strength and stealth."
          link="https://en.wikipedia.org/wiki/Tiger"
        />
        <Course 
          image={Giraffe}
          title="Giraffe" 
          description="Giraffes are the tallest land animals and feed on leaves from tall trees in Africa."
          link="https://en.wikipedia.org/wiki/Giraffe"
        />
        <Course 
          image={Zebra}
          title="Zebra" 
          description="Zebras are African equines known for their black and white stripes, and live in herds."
          link="https://en.wikipedia.org/wiki/Zebra"
        />
        <Course 
          image={Bear}
          title="Bear" 
          description="Bears are large mammals found in many parts of the world and are skilled swimmers and runners."
          link="https://en.wikipedia.org/wiki/Bear"
        />
      </div>
    </div>
  );
}

export default App;
