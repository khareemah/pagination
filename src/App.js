import React, { useState, useEffect } from 'react';
import useFetch from './useFetch';
import Followers from './Followers';
import Title from './Title';
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';
const App = () => {
  const { loading, data } = useFetch(url);
  console.log(data);
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (!loading) {
      setFollowers(data[page]);
      console.log(followers);
    }
  }, [loading]);

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
      </main>
    </>
  );
};

export default App;
