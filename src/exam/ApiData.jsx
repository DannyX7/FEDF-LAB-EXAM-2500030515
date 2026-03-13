import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ApiData() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummy-json.mock.beeceptor.com/companies")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>API Data</h2>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Zip</th>
            <th>Country</th>
          </tr>
        </thead>

        <tbody>
          {data.map((company) => (
            <tr key={company.id}>
              <td>{company.id}</td>
              <td>{company.name}</td>
              <td>{company.address}</td>
              <td>{company.zip}</td>
              <td>{company.country}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}