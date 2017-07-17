var React = require('react');

var PetComponent = require('./PetComponent');


var styleHeading = {
  textAlign: 'center',
  fontSize: '2.5rem',
  color: '#047DBF'
};

var styleContainer = {
  display: 'flex',
  justifyContent: 'center'
};

var btnStyle = {
  marginTop: '30px',
  marginRight: '5px',
  lineHeight: '25px'
};


class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      catLikesCount: 0,
      dogLikesCount: 0,
      catResult: '',
      dogResult: ''
    };
    this.handleLikeBtnClick = this.handleLikeBtnClick.bind(this);
    this.handleDislikeBtnClick = this.handleDislikeBtnClick.bind(this);
    this.handleShowWinnerBtnClick = this.handleShowWinnerBtnClick.bind(this);
    this.handleStartOverBtnClick = this.handleStartOverBtnClick.bind(this);
  }

  handleLikeBtnClick(event) {
    var petName = event.target.value;
    if(petName === 'Cat'){
      this.setState(function(prevState) {
        return {
          catLikesCount: prevState.catLikesCount + 1
        }
      });
    } else if(petName === 'Dog'){
      this.setState(function(prevState) {
        return {
          dogLikesCount: prevState.dogLikesCount + 1
        }
      });
    }
  }
  
  handleDislikeBtnClick(event) {
    var petName = event.target.value;
    if(petName === 'Cat'){
      this.setState(function(prevState) {
        if(prevState.catLikesCount> 0){
          return {
            catLikesCount: prevState.catLikesCount - 1
          }
        }
      });
    } else if(petName === 'Dog'){
      this.setState(function(prevState) {
        if(prevState.dogLikesCount> 0){
          return {
            dogLikesCount: prevState.dogLikesCount - 1
          }
        } 
      });
    }
  }

  handleShowWinnerBtnClick(){

    var catResult = 'Tie!',
        dogResult = 'Tie!'

    if(this.state.catLikesCount > this.state.dogLikesCount){
      catResult = 'Winner!';
      dogResult = 'Loser!';
    } else if(this.state.catLikesCount < this.state.dogLikesCount){
      catResult = 'Loser!';
      dogResult = 'Winner!';
    }

    this.setState({
      catResult: catResult,
      dogResult: dogResult
    });
  }

  handleStartOverBtnClick(){
    this.setState({
        catLikesCount: 0,
        dogLikesCount: 0,
        catResult: '',
        dogResult: ''
      }
    );
  }

  render() {
    return (
      <div>
        <h1 style={styleHeading}>
          Welcome to Cat Dog Cuteness Firght!
        </h1>
        <div style={styleContainer}>
          <PetComponent 
            petName="Cat" 
            likesCount={this.state.catLikesCount}
            petImageURL="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
            result={this.state.catResult}
            onLikeBtnClick={this.handleLikeBtnClick}
            onDislikeBtnClick={this.handleDislikeBtnClick}  
          />
          <PetComponent 
            petName="Dog" 
            likesCount={this.state.dogLikesCount}
            petImageURL="https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" 
            result={this.state.dogResult}
            onLikeBtnClick={this.handleLikeBtnClick}
            onDislikeBtnClick={this.handleDislikeBtnClick} 
          />
        </div>
        <div style={styleContainer}>
          {!this.state.dogResult &&
            <button style={btnStyle} onClick={this.handleShowWinnerBtnClick}>Show Winner</button>}
          <button style={btnStyle} onClick={this.handleStartOverBtnClick}>Restart</button>
        </div>
      </div>
    );
  }
}

module.exports = HomePage; 