import React, { useEffect } from 'react'
import axios from 'axios';

function App() {
    const [data, setData] = React.useState([])

    useEffect(() => { 
        axios
            .get(process.env.API_URL)
            .then((res) => {
                setData(res.data)
            })
    })

    return (
        <table >
            <thead >
                <tr>
                    <th scope="col">File Name</th>
                    <th scope="col">Text</th>
                    <th scope="col">Number</th>
                    <th scope="col">Hex</th>
                </tr>
            </thead>
            <tbody>
                {data.map(ele => (
                    ele.lines.map(col => (
                        <tr>
                            <td scope="row">{ele.file}</td>
                            <td scope="row">{col.text}</td>
                            <td scope="row">{col.number}</td>
                            <td scope="row">{col.hex}</td>
                        </tr>
                    ))
                ))}
            </tbody>
        </table>
    )

}

export default App;