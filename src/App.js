import logo from './logo.svg';
import './App.css';
import Header from './component/Header'

function App() {
  return (
    <div className="App">
      <Header className="App-header"></Header>
      <div class="container mt-3"> 
        <div class="row align-items-start grid">
          <div class="col-6 border border-primary">
            Logo
          </div>
          <div class="col-6 border border-primary text-start">
            <p>
              I am looking for an exciting position in a dynamic IT environment where I can improve my expertise,
              contribute to the company's success, and make use of my excellent communication skills.
            </p>
            <p>
              I have real-world experience with coding languages and a strong interest in artificial intelligence (AI) and
              machine learning (ML); therefore, I have problem-solving skills and the ability to analyze and preprocess data
              as well as train ML models. I am continuously exploring possibilities to advance my talents and contribute to
              the company's future achievements. I also experience in other area of programming such as front-end, back-
              end and web development.
            </p>
          </div>
        </div>

        <div class="row align-items-start grid mt-5">

          <div class="col-12 border border-primary text start">
            Logo
          </div>
          
        </div>

        
      </div>
    </div>
  );
}

export default App;
