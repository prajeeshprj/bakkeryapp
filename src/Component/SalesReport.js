import React from 'react';
import { CSVLink } from 'react-csv';

const SalesReport = ({ sales }) => {
  const headers = [
    { label: 'Purchase Sale', key: 'sale' },
    { label: 'Profit', key: 'profit' },
    { label: 'Loss', key: 'loss' },
    { label: 'Discount', key: 'discount' }
  ];

  const csvReport = {
    filename: 'SalesReport.csv',
    headers: headers,
    data: sales
  };

  return (
    <div className="sales-report">
      <h2>Sales Report</h2>
      <CSVLink {...csvReport}>Download Report</CSVLink>
    </div>
  );
};

export default SalesReport;
