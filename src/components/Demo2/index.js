import React from 'react';
import { memo } from 'react';

export default function Demo2(props) {
  console.log('Demo2 is update')
    return (
        <div>
            <h1>Demo2</h1>
            <button onClick={() => {
                props.onClick();
            }}>Click me</button>
        </div>
    )
}
