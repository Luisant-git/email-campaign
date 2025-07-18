import React, { useState, useEffect } from 'react';

const FieldMapper = ({ fields = [] }) => {
  const [mappedFields, setMappedFields] = useState(fields);

  useEffect(() => {
    setMappedFields(fields);
  }, [fields]);

  return (
    <div>
      <h2>Field Mapper</h2>
      {mappedFields && mappedFields.length > 0 ? (
        mappedFields.map((field, idx) => (
          <div key={idx}>
            <span>{field.name || `Field ${idx + 1}`}</span>
          </div>
        ))
      ) : (
        <p>No fields to map.</p>
      )}
    </div>
  );
};

export default FieldMapper;
