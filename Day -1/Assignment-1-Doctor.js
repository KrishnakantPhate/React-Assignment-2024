import logo from './logo.svg';
import './App.css';

function App() {
 


  let DocArr = [{ doctorid: 101, dname: "aam", designation: "senior", exp: 5, contact: 998998 }, 
  { doctorid: 102, dname: "atharv", designation: "senior", exp: 5, contact: 998998 }, 
  { doctorid: 103, dname: "sahil", designation: "senior", exp: 5, contact: 998998 }, 
  { doctorid: 104, dname: "hule", designation: "senior", exp: 5, contact: 998998 },
   { doctorid: 105, dname: "yash", designation: "senior", exp: 5, contact: 998998 }]


  let resultArray2 = DocArr.map( item => 
    {
      return <tr>
          <td>{item.doctorid}</td>
          <td>{item.dname}</td>
          <td>{item.designation}</td>
          <td>{item.exp}</td>
          <td>{item.contact}</td>
      </tr>
    })



  return (

    <>
      <h1 style={{color:"red" , marginLeft:"50px"}} >DOCTOR DETAILS</h1>
      <table border="4">
        <tr>
          <th>doctorid</th>
          <th>dname</th>
          <th>designation</th>
          <th>experience</th>
          <th>contact</th>

        </tr>

        {resultArray2}
      </table>
    </>

  );
}

export default App;

