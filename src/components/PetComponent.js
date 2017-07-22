var React = require('react');

var styleContainer = {
  maxWidth: '400px',
  width: '50%',
  flex: 1,
  textAlign: 'center'
};

var styleImage = {
  width: '100%',
  display: 'block',
  margin: 'auto'
};

var PetComponent = function (props) {
  var result = null;
  var disabled = false;

  if (props.result !== 0){
    var resultStyle = null;
    if (props.result === 'Loser!'){
      resultStyle = {color: 'red'};
      disabled = true;
    } else {
      resultStyle = {color: 'green'};
      disabled = true;
    }
    result = <h2 style={resultStyle}>{props.result}</h2>;
  }

  return (
    <div style={styleContainer}>
      {result}
      {(props.result) ? (
        <h3>{props.petName} likes: {props.likesCount}</h3>
      ) : (
        <h3>{props.petName}</h3>
      )

      }
      <img 
        style={styleImage} 
        src={props.petImageURL} 
        alt={props.petName} 
      />
      <button value={props.petName} disabled={disabled} onClick={props.onLikeBtnClick}>Like</button>
      <button value={props.petName} disabled={disabled} onClick={props.onDislikeBtnClick}>Dislike</button>
    </div>
  );
}



module.exports = PetComponent;