import Table from "react-bootstrap/esm/Table";
import React, { useEffect, useState } from "react";
import './employee.css';
import Header from "../Header-Page/header";
import axios from 'axios';

function Employee() {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);

    const getResults = async () =>{
        await axios.get('https://randomuser.me/api/?results=100').then(response => {console.log(response.data.results); setResults(response.data.results)}).catch(error => {console.log(error)})
    }

    const filteredEmployee = 
    results.filter((detail) =>
        detail.name.first.toLowerCase().includes(searchQuery.toLowerCase())
        )

    useEffect(()=>{
        getResults()
    },[])

    return (
        <div>

            <Header />
            <div className="search-bar">
                <input
                placeholder="Search by First Name"
                value={searchQuery}
                type="text"
                onChange={(e)=> setSearchQuery(e.target.value)}
                />
            </div>
            <div className="employee-container">
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Photo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredEmployee.map((detail,index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{detail.name.first}</td>
                                <td>{detail.name.last}</td>
                                <td>{detail.email}</td>
                                <img
                                        src={detail.picture.thumbnail} // URL for the image
                                        alt={`${detail.name.first} ${detail.name.last}`} // Alt text for accessibility
                                        style={{ width: '50px', height: '50px', borderRadius: '50%' }} // Style to fit the image in the table
                                    />
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </div>
        </div>

    )
}


export default Employee;