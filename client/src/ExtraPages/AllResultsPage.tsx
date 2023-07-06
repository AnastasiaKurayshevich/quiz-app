import { useEffect, useState } from 'react'

export const AllResultsPage = () => {
    const [results, setResults] = useState([]);
    useEffect(() => {
        const fetchResults = async () => {
          try {
            const response = await fetch('http://localhost:3000/api/results');
            const data = await response.json();
            setResults(data);
          } catch (error) {
            console.error('Error fetching results:', error);
          }
        };
    
        fetchResults();
      }, []);
  return (
    <div>
        <h2>All Results</h2>
        <ul>
        {results.map((result, index) => (
          <li key={result.id}>{result.name} - {result.score}</li>
        ))}
      </ul>

    </div>
  )
}
