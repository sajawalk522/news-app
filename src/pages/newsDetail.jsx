import React from 'react';
import Layout from '../layouts/default';
import Filter from '../components/filter';
import DetailCard from '../components/detailCard';
import AdsCard from '../components/ads';
function NewsDetail() {
  return (
    <Layout>
      <div className='default-container container'>
        <Filter/>
        <div className='detail-card'>
          <div className='left-side'>
          <DetailCard/>
          </div>
          <div className='right-side'>
             <AdsCard/>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default NewsDetail;