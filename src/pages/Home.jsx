import React from 'react';
import Layout from '../layouts/default';
import Filter from '../components/filter';
import NewsCard from '../components/newsCard';
function Home() {
  return (
    <Layout>
      <div className='default-container container'>
        <Filter/>
        <div className='card-grid'>
          <NewsCard/>
          <NewsCard/>
          <NewsCard/>
          <NewsCard/>
          <NewsCard/>
          <NewsCard/>
        </div>
      </div>
    </Layout>
  );
}

export default Home;