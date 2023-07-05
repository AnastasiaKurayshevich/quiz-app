import React, { useEffect, useState } from 'react';

const TestComponent: React.FC = () => {
  const [test, setTest] = useState<any>(null);

  useEffect(() => {
    const fetchTest = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/test/1');
        const data = await response.json();
        setTest(data);
      } catch (error) {
        console.error('Error fetching test:', error);
      }
    };

    fetchTest();
  }, []);

  return (
    <div>
      {test ? (
        <div>
          <h1>Test Data</h1>
          <p>ID: {test.id}</p>
          <p>Test Message: {test.testMessage}</p>
        </div>
      ) : (
        <p>Loading test data...</p>
      )}
    </div>
  );
};

export default TestComponent;






