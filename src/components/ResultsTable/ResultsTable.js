import { ResultsRow } from "./ResultsRow";


export const ResultsTable = ({ data }) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => <ResultsRow key={row.year} row={row} />)}
      </tbody>
    </table>
  );
};