import './App.css';
import * as React from "https://cdn.skypack.dev/react@17.0.1";

const quotes = ["The greatest glory in living lies not in never falling, but in rising every time we fall.","The way to get started is to quit talking and begin doing.", "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."]
const authors = ["Nelson Mandela", "Walt Disney", "Oprah Winfrey"]


class App extends React.Component {
  
  constructor(props) {
    super(props);
    let index = Math.floor(Math.random() * quotes.length)
    this.state = {
      quote: quotes[index],
      author: authors[index]
    };
      this.submit = this.submit.bind(this);
  }
  submit() {
    let index = Math.floor(Math.random() * quotes.length);
    this.setState(state => ({
      quote: quotes[index],
      author: authors[index]
    }));
  }
  
  render () {
    return(
      <div id="quote-box" class="hhu center" >
        <div id="text" class="nice-text">
          <h2><span>&#10077;</span> {this.state.quote}<span>&#10078;</span></h2>
        </div>
        <div id="author" class="nice-text">
          <p>- {this.state.author}</p>
        </div>
        
        
        <div class="parent">
                    <div class="child" id="tweet-quote">
              <a href="twitter.com/intent/tweet"> <span>&#10084;</span></a>
          </div>
          <div class="child" id="new-quote">
            <button class="button" onClick={this.submit}>New Quote!</button>
          </div>

        
        </div>
      </div>
    );
  }
}


export default App;
