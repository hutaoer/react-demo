import React from 'react';

export default function Demo1(props) {
  console.log('Demo1 is update')
    return (
        <div>
            <h1>Demo1</h1>
            <button onClick={() => {
              props.onClick(100);
            }}>Click me</button>
        </div>
    )
}
