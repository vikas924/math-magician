import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes',
          {
            headers: { 'X-Api-Key': 'GbVR2HfUaUcTPyK8Qb13Yw==MIQBJGBQd4tL4cae' },
            contentType: 'application/json',
          });
        const json = await res.json();
        setData(json[0].quote);
        setLoading(false);
        return res;
      } catch (error) {
        console.log(1);
        setError('opps! something went wrong');
        setLoading(false);
        return error;
      }
    };
    fetchData();
  }, [setData]);

  if (loading) {
    return (
      <div className="quote">
        <h1>Quote</h1>
        <p>loading</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="quote">
        <h1>Quote</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="quote">
      <h1>Quote</h1>
      <p>{data}</p>
    </div>
  );
};

export default Quotes;
