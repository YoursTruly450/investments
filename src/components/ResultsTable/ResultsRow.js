const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const ResultsRow = ({ row }) => {
  return (
    <tr>
      <td>{row.year}</td>
      <td>{formatter.format(row.savingsEndOfYear)}</td>
      <td>{formatter.format(row.yearlyInterest)}</td>
      <td>{formatter.format(row.totalInterest)}</td>
      <td>{formatter.format(row.investedCapital)}</td>
    </tr>
  );
};