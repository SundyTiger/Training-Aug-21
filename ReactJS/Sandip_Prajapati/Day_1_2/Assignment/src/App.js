import "./App.css";
import Hello from "./component/hello/hello";
import StudentID from './StudentID';
const details = ()=>(
  <>
  <p>Student Details</p>
  </>
)
function App() {
  return (
    <>
      <Hello key={1} />
      <StudentID key={2} details={details} />
    </>
  );
}

export default App;
