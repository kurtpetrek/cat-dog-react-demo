var React = require('react');
var axios = require('axios');
var PetComponent = require('./PetComponent');


var styleContainer = {
  display: 'flex',
  justifyContent: 'center'
};

var btnStyle = {
  marginTop: '30px',
  marginRight: '5px',
  lineHeight: '25px'
};

var API_KEY = '123456789';

var CAT_URL = 'http://localhost:63000/cat/?api_key=' + API_KEY;
var DOG_URL = 'http://localhost:63000/dog/?api_key=' + API_KEY;


class PetGame extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cat: {
        likesCount: 0,
        result: 0,
        imageUrl: ''
      },
      dog: {
        likesCount: 0,
        result: 0,
        imageUrl: ''
      }
    };
    this.handleLikeBtnClick = this.handleLikeBtnClick.bind(this);
    this.handleDislikeBtnClick = this.handleDislikeBtnClick.bind(this);
    this.handleShowWinnerBtnClick = this.handleShowWinnerBtnClick.bind(this);
    this.handleStartOverBtnClick = this.handleStartOverBtnClick.bind(this);
  }
  
  componentDidMount(){
    this.fetchImages();
  }
  
  fetchCatImage(){
    axios.get(CAT_URL)
      .then(function(resp){
        var imageUrl = resp.data.imageUrl;
      
      this.setState(function(prevState){
         return {
            cat: {
              likesCount: prevState.cat.likesCount,
              result: prevState.cat.result,
              imageUrl: imageUrl
            }
          };
        });
      }.bind(this));
  }
  
  fetchDogImage(){
    axios.get(DOG_URL)
      .then(function(resp){
        var imageUrl = resp.data.imageUrl;
      
      this.setState(function(prevState){
        return {
            dog: {
              likesCount: prevState.dog.likesCount,
              result: prevState.dog.result,
              imageUrl: imageUrl
            }
          };
        });
      }.bind(this));
  }
  
  fetchImages(){
    this.fetchDogImage();
    this.fetchCatImage();
  }

  handleLikeBtnClick(event) {
    this.fetchImages();
    var petName = event.target.value;
    if(petName === 'Cat'){
      this.setState(function(prevState) {
        return {
          cat: {
            likesCount: prevState.cat.likesCount + 1,
            result: prevState.cat.result,
            imageUrl: prevState.cat.imageUrl
          }
        }
      });
    } else if(petName === 'Dog'){
      this.setState(function(prevState) {
        return {
          dog: {
            likesCount: prevState.dog.likesCount + 1,
            result: prevState.dog.result,
            imageUrl: prevState.dog.imageUrl
          }
        }
      });
    }
  }
  
  handleDislikeBtnClick(event) {
    this.fetchImages();
    var petName = event.target.value;
    if(petName === 'Cat'){
      this.setState(function(prevState) {
        if(prevState.cat.likesCount > 0){
          return {
            cat: {
              likesCount: prevState.cat.likesCount - 1,
              result: prevState.cat.result,
              imageUrl: prevState.cat.imageUrl
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
              result: prevState.dog.result,
              imageUrl: prevState.dog.imageUrl
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
          result: catResult,
          imageUrl: prevState.cat.imageUrl
        },
        dog: {
          likesCount: prevState.dog.likesCount,
          result: dogResult,
          imageUrl: prevState.dog.imageUrl
        }
      };
    });
  }

  handleStartOverBtnClick(){
    this.fetchImages();
    this.setState({
        cat: {
          likesCount: 0,
          result: 0,
          imageUrl: ''
        },
        dog: {
          likesCount: 0,
          result: 0,
          imageUrl: ''
        }
      }
    );
  }

  render() {
    return (
      <div>
        <div style={styleContainer}>
          <PetComponent 
            petName="Cat" 
            likesCount={this.state.cat.likesCount}
            petImageURL={this.state.cat.imageUrl}
            result={this.state.cat.result}
            onLikeBtnClick={this.handleLikeBtnClick}
            onDislikeBtnClick={this.handleDislikeBtnClick}  
          />
          <PetComponent 
            petName="Dog" 
            likesCount={this.state.dog.likesCount}
            petImageURL={this.state.dog.imageUrl}
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

module.exports = PetGame; 