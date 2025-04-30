import React, { useState, useEffect } from 'react';

function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/properties')
      .then(res => res.json())
      .then(data => setProperties(data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Properties</h2>
      <ul>
        {properties.map((property, index) => (
          <li key={index} className="mb-2 border p-2 rounded">
            <strong>{property.address}</strong><br />
            Price: ${property.price}<br />
            Owner: {property.owner}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PropertyList;
