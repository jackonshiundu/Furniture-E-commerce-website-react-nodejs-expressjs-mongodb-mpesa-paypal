import React, { useEffect, useState } from 'react';
import { CirclesWithBar, Puff } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

const LoadingtoRedirect = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    if (count === 0) {
      navigate('/login');
    }
    return () => clearInterval(interval);
  }, [count, navigate]);
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <CirclesWithBar height={80} width={80} color="#d1b112" />
      <h5>Redirecting you in {count} Seconds</h5>
    </div>
  );
};

export default LoadingtoRedirect;
