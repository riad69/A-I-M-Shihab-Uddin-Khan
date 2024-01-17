import React from 'react';
import { Card } from './card';

export const Underreview = () => {
  return (
    <div>
        <div className='flex'>
            <h1 className='title'>Under Review</h1>
            <p className='number'>0</p>
        </div>
        <div className='scroll'>
        <div>
            {[...Array(12)].map((_, index) => (
            <Card key={index} />
            ))}
        </div>
        </div>
    </div>
  );
};
