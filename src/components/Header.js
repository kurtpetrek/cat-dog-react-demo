var React = require('react');

var styleHeading = {
  textAlign: 'center',
  fontSize: '2.5rem',
  color: '#047DBF'
};

var Header = function(){
  return(
    <h1 style={styleHeading}>
      Welcome to Cat Dog Cuteness Firght!
    </h1>
  )
};

module.exports = Header;