import React from 'react';

export default ({ skipVenues, goodVenues, drinkProblems, eatProblems }) => {
return (<div>
<h2>Avoid this</h2>
<ul>
  {skipVenues.length > 0 && skipVenues.map(name => (<li>{name}</li>))}
</ul>

  </div>);
}
