import React, { useState, useEffect } from 'react';
import useFetch from './useFetch';
import Followers from './Followers';
import Title from './Title';
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';
const App = () => {
  const { loading, data } = useFetch(url);
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (!loading) {
      setFollowers(data[page]);
    }
  }, [loading, page]);

  const handlePrevPage = () => {
    setPage((oldPage) => {
      let newPage = oldPage - 1;
      if (newPage < 0) {
        newPage = data.length - 1;
      }
      return newPage;
    });
  };

  const handleNextPage = () => {
    setPage((oldPage) => {
      let newPage = oldPage + 1;
      if (newPage > data.length - 1) {
        newPage = 0;
      }
      return newPage;
    });
  };
  return (
    <>
      <main>
        <Title loading={loading} />

        <section className="followers">
          <div className="container">
            {followers.map((follower) => {
              return <Followers key={follower.id} {...follower} />;
            })}
          </div>
        </section>

        {!loading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={handlePrevPage}>
              previous
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${page === index && 'active-btn'}`}
                  onClick={() => setPage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="next-btn" onClick={handleNextPage}>
              next{' '}
            </button>
          </div>
        )}
      </main>
    </>
  );
};

export default App;
