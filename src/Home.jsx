import  Axios  from 'axios';
import './App.css';
import React, {useState, useEffect} from 'react';


function Home() {
  const [student, Setstudent] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:8000/').then((response) => {
      Setstudent(response.data);
    })
  }, [])

  console.log(student)

  return (
    <div className="App">
      <h1>Hello world!!! I am in the homepage</h1>
      <table class ="table table-hover">
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Age</th>
            <th scope='col'>Course</th>
            <th scope='col'>Subjects</th>
          </tr>
        </thead>
        <tbody>
          {student.map((val) => {
            return(
              <tr class="table-active">
                <th scope="row">{val.name}</th>
                <td>{val.age}</td>
                <td>{val.course}</td>
                <td>
                  {val.subjects.map((value, index) => {
                    return(
                      <span key={index}>{value}, </span>
                    )
                  })}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
