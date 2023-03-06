import './App.css';
import Student from './components/first';


function App() {
  return (
    <div className="App">
      <Student firstName="Ruben" lastName="Ocasio" age={21} haircolor={"Brown"}/> 
      <Student firstName="Colby" lastName="Dumonchelle" age={21} haircolor={"Black"}></Student>
      <Student firstName="Jason" lastName="Yang" age={21} haircolor={"Brown"}></Student>
      <Student firstName="Mike" lastName="Connors" age={21} haircolor={"Red"}></Student>
      <Student firstName="Jonathan" lastName="G" age={21} haircolor={"Black"}></Student>
    </div>
  );
}

export default App;
