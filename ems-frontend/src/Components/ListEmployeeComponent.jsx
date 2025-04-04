import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmployees } from '../Services/EmployeeService'
import { Navigate, useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    const navigator = useNavigate();
    
    useEffect (() => {
        getAllEmployee();
    }, [])

    function getAllEmployee(){
        listEmployees().then((response) =>{
            setEmployees(response.data)
        }).catch (error=>{
            console.error(error);
        })
    }

    function addNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id){
        navigator(`/update-employee/${id}`)
    }

    function removeEmployee(id){
        console.log(id);
        deleteEmployee(id).then(response => {
            getAllEmployee();
        }).catch(error => {
            console.error(error);
        })
    }
  return (
    <div className='container'>
      
        
        <h2 className='text-center'>List of Emoloyees</h2>
        <button class="btn btn-primary mb-2" onClick={addNewEmployee} >Add Employee</button>
        
        <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee FirstName</th>
                    <th>Employee LastName</th>
                    <th>Employee EmailId</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee => 
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td> {employee.firstName} </td>
                            <td> {employee.lastName} </td>
                            <td> {employee.email} </td>
                            <td>
                                <button className='btn btn-info' onClick={() => updateEmployee(employee.id)} >Update</button>
                                <button type='button' className='btn btn-danger' 
                                style={{marginLeft: '10px'}}
                                onClick={() => removeEmployee(employee.id)}>Delete</button>
                            </td>
                        </tr> )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent