import { useState } from 'react';
import { Header } from './components/Header/Header';
import { ResultsTable } from './components/ResultsTable/ResultsTable';
import { UserInput } from './components/UserInput/UserInput';

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = []; // per-year results

  if (userInput) {
    let currentSavings = +userInput.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.yearlyContribution; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;
  
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        totalInterest: currentSavings - userInput.currentSavings - yearlyContribution * (i + 1),
        yearlyContribution: yearlyContribution,
        investedCapital: userInput.currentSavings + yearlyContribution * (i + 1),
      });
    }
  }

  return (
    <div className='main'>
      <Header />

      <UserInput onCalculate={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {yearlyData.length === 0 && <p style={{textAlign: 'center'}}>No investment calculated yet.</p>}
      {yearlyData.length > 0 && <ResultsTable data={yearlyData} />}
    </div>
  );
}

export default App;
