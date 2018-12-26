import React, { Component } from 'react';
class Questions extends Component {
  state = {
    questions: [
      {
        id: 1,
        question: 'What is official name of latest major JavaScript Version?',
        options: ['ES5', 'ES6', 'ES2015', 'ES7'],
        answer: 'ES2015'
      }
    ]
  };
  submitHandler = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          {this.state.questions.map((question, i) => (
            <div key={i} className='card card-body'>
              <h2 className='display-5'>
                #{i + 1} {question.question}
              </h2>
              <fieldset className='form-group'>
                {question.options.map((option, index) => {
                  return (
                    <div key={index} className='form-check'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='form'
                        id={option}
                        value={option}
                      />
                      <label className='form-check-label' htmlFor={option}>
                        {option}
                      </label>
                    </div>
                  );
                })}
              </fieldset>
            </div>
          ))}
          <button className='btn btn-lg btn-outline-success mt-5 mx-auto d-block'>Sumbit</button>
        </form>
      </div>
    );
  }
}

export default Questions;
