import React from 'react';
import { memo } from 'react';

export default memo(function Demo2() {
  console.log('Demo2 is update')
    return (
        <div>
            <h1>Demo2</h1>
            <button onClick={() => {
            }}>Click me</button>
        </div>
    )
})
