import React from 'react';

const Title = ({ loading }) => {
  return (
    <div className="section-title">
      <h1>{loading ? 'loading' : 'pagination'}</h1>
      <div className="underline"></div>
    </div>
  );
};

export default Title;
