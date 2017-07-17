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

class PetComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div style={styleContainer}>
        <h3>{this.props.petName} likes: {this.props.likesCount}</h3>
        <img 
          style={styleImage} 
          src={this.props.petImageURL} 
          alt={this.props.petName} 
        />
        <button value={this.props.petName} onClick={this.props.onLikeBtnClick}>Like</button>
        <button value={this.props.petName} onClick={this.props.onDislikeBtnClick}>Dislike</button>
      </div>
    );
  }
}



module.exports = PetComponent;