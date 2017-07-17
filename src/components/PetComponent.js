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
    
    this.state = {
      likesCount: 0
    };
    
    this.handleLikeBtnClick = this.handleLikeBtnClick.bind(this);
    this.handleDislikeBtnClick = this.handleDislikeBtnClick.bind(this);
  }
  
  handleLikeBtnClick() {
    this.setState(function(prevState) {
      return {
        likesCount: prevState.likesCount + 1
      };
    });
  }
  
  handleDislikeBtnClick() {
    this.setState(function(prevState){
      if(prevState.likesCount > 0){
        return {
          likesCount: prevState.likesCount - 1
        };
      }
    });
  }

  render(){
    return (
      <div style={styleContainer}>
        <h3>{this.props.petName} likes: {this.state.likesCount}</h3>
        <img 
          style={styleImage} 
          src={this.props.petImageURL} 
          alt={this.props.petName} 
        />
        <button onClick={this.handleLikeBtnClick}>Like</button>
        <button onClick={this.handleDislikeBtnClick}>Dislike</button>
      </div>
    );
  }
}



module.exports = PetComponent;