import React from 'react'
import * as math from 'mathjs'
import submitbtn from '../images/submit.png'
import Kid1 from '../images/kid1.png'
import Kid2 from '../images/kid2.png'

class Tutorial extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};

      this.a = math.randomInt(0,100)
      this.b = math.randomInt(0,100)
      this.sum = math.add(this.a,this.b)
      this.wrongCount = 3;
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      const regexCheck = /^\d+$/;
      const currInput = event.target.value;
      this.setState({value: event.target.value});
      if (!currInput.match(regexCheck)){
        this.setState({value: ''});
        alert('Please Enter a Number!');
      }
    }
  
    handleSubmit(event) {
      this.setState({value: ''});
      if (math.equal(this.sum, this.state.value)){
        alert('Yayy!! Correct Answer!');
        window.location.reload(false);
      }
      else {
        this.wrongCount = this.wrongCount - 1;
        if (this.wrongCount > 0){
          alert(`Wrong Answer. You have ${this.wrongCount} attempts left.`);
        }
        else {
          alert(`You have no attempts left. The correct answer is ${this.sum}.`);
          window.location.reload(false);
        }
        
      }
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className='tutorialblk'>
            <div className='kid1'>
              <img src={Kid1} width={300} height={250} alt='kid'></img>
            </div>
            <div>
              <div className='firstvar'>{this.a}</div>
              <div className='plussymbol'>+</div>
              <div className='secondvar'>{this.b}</div>
              <div className='equalsymbol'>=</div>
            
              <div className='inputfield'>
                <input type="text" value={this.state.value} onChange={this.handleChange} autoFocus/>
              </div>
              <div className='submitbtn'>
                <img src={submitbtn} onClick={this.handleSubmit} alt='submitbutton' width={280} height={85}/>
              </div>
            </div>
            <div className='kid2'>
              <img src={Kid2} width={250} height={270} alt='kid'></img>
            </div>
          </div>
        </form>
        
      );
    }
  }

  export default Tutorial;