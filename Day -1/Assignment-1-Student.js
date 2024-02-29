import logo from './logo.svg';
import './App.css';

function App() {
  let sname = "krishna";
  let sid = 101
  let age = 35;
  let course = "Big data";
  let total = 100

  let StudentObj = { sname: "ram", sid: 304, age: 23, course: "AI", totally: 564 }


  return (

    <>
      <table border="2 merge" width="500" >
        <tr>
          <th>sid</th>
          <th>sname</th>
          <th>course</th>
          <th>age</th>
          <th>total</th>
        </tr>

        <tr>
          <td>{sid}</td>
          <td>{sname}</td>
          <td>{course}</td>
          <td>{age}</td>
          <td>{total}</td>

        </tr>

        <tr>
          <td>{StudentObj.sid}</td>
          <td>{StudentObj.sname}</td>
          <td>{StudentObj.course}</td>
          <td>{StudentObj.age}</td>
          <td>{StudentObj.totally}</td>

        </tr>


      </table>


    </>

  );
}

export default App;

