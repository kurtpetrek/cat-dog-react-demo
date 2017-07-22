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
      cat: {
        likesCount: 0,
        result: 0
      },
      dog: {
        likesCount: 0,
        result: 0
      }
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
          cat: {
            likesCount: prevState.cat.likesCount + 1,
            result: prevState.cat.result
          }
        }
      });
    } else if(petName === 'Dog'){
      this.setState(function(prevState) {
        return {
          dog: {
            likesCount: prevState.dog.likesCount + 1,
            result: prevState.dog.result
          }
        }
      });
    }
  }
  
  handleDislikeBtnClick(event) {
    var petName = event.target.value;
    if(petName === 'Cat'){
      this.setState(function(prevState) {
        if(prevState.cat.likesCount > 0){
          return {
            cat: {
              likesCount: prevState.cat.likesCount - 1,
              result: prevState.cat.result
            }
          }
        }
      });
    } else if(petName === 'Dog'){
      this.setState(function(prevState) {
        if(prevState.dog.likesCount > 0){
          return {
            dog: {
              likesCount: prevState.dog.likesCount - 1,
              result: prevState.dog.result
            }
          }
        } 
      });
    }
  }

  handleShowWinnerBtnClick(){

    var catResult = 'Tie!',
        dogResult = 'Tie!';

    if(this.state.cat.likesCount > this.state.dog.likesCount){
      catResult = 'Winner!';
      dogResult = 'Loser!';
    } else if(this.state.cat.likesCount < this.state.dog.likesCount){
      catResult = 'Loser!';
      dogResult = 'Winner!';
    }

    this.setState(function(prevState){
      return{
        cat: {
          likesCount: prevState.cat.likesCount,
          result: catResult
        },
        dog: {
          likesCount: prevState.dog.likesCount,
          result: dogResult
        }
      };
    });
  }

  handleStartOverBtnClick(){
    this.setState({
        cat: {
          likesCount: 0,
          result: 0
        },
        dog: {
          likesCount: 0,
          result: 0
        }
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
            likesCount={this.state.cat.likesCount}
            petImageURL="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
            result={this.state.cat.result}
            onLikeBtnClick={this.handleLikeBtnClick}
            onDislikeBtnClick={this.handleDislikeBtnClick}  
          />
          <PetComponent 
            petName="Dog" 
            likesCount={this.state.dog.likesCount}
            petImageURL="https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" 
            result={this.state.dog.result}
            onLikeBtnClick={this.handleLikeBtnClick}
            onDislikeBtnClick={this.handleDislikeBtnClick} 
          />
        </div>
        <div style={styleContainer}>
          {!this.state.dog.result &&
            <button style={btnStyle} onClick={this.handleShowWinnerBtnClick}>Show Winner</button>}
          <button style={btnStyle} onClick={this.handleStartOverBtnClick}>Restart</button>
        </div>
      </div>
    );
  }
}

module.exports = HomePage; 