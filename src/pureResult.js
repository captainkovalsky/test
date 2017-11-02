import React from 'react';

export default ({result}) => {
  console.log('result', result);
return (<div>
<h2> avoid</h2>
<ul>
  {result.skipVenues.map(name => (<li>{name}</li>))}
</ul>

  </div>);
}
