import { useEffect, useState } from 'react'

type Result =  {
    id: number;
    name: string;
    score: number;
  }

export const AllResultsPage = () => {
    const [results, setResults] = useState<Result[]>([]);
    const [selectedResult, setSelectedResult] = useState<string>('');
    useEffect(() => {
        const fetchResults = async () => {
          try {
            const response = await fetch('http://localhost:3000/api/question/results');
            const data = await response.json();
            setResults(data);
          } catch (error) {
            console.error('Error fetching results:', error);
          }
        };
    
        fetchResults();
      }, []);

      const handleDeleteResult = async(resultId: number) => {
        try{
            await fetch(`http://localhost:3000/api/question/results/${resultId}`, {
                method: 'DELETE',
            });
            setResults((prev) => prev.filter((result) => result.id !== resultId));
        } catch (error) {
            console.error('Error deleting result:', error);
          }
      };

      const handleSelect = (id: string) => {
        setSelectedResult(id);
    };
  return (
    <div>
        <h2>All Results</h2>
        <ul>
        {results.map((result) => (
          <li key={result.id}
          onMouseEnter={() => handleSelect(result.id.toString())}
          onMouseLeave={() => handleSelect('')}
          >{result.name} - {result.score}
         
          {selectedResult === result.id.toString() && <button
              className="delete-button"
              onClick={() => handleDeleteResult(result.id)}
            > Delete
            </button>}
             </li>
        ))}
      </ul>

    </div>
  )
}
