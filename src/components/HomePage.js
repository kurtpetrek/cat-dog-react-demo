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
    this.handleShowWinnerBtnClick = this.handleShowWinnerBtnClick.bind(this);
    this.handleStartOverBtnClick = this.handleStartOverBtnClick.bind(this);
  }

  handleShowWinnerBtnClick(){
    console.log('winner');
  }

  handleStartOverBtnClick(){
    console.log('start over');
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
            petImageURL="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" 
          />
          <PetComponent 
            petName="Dog" 
            petImageURL="https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" 
          />
        </div>
        <div style={styleContainer}>
          <button style={btnStyle} onClick={this.handleShowWinnerBtnClick}>Show Winner</button>
          <button style={btnStyle} onClick={this.handleStartOverBtnClick}>Restart</button>
        </div>
      </div>
    );
  }
}

module.exports = HomePage; 