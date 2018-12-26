import React, { Component } from 'react';

export default class AddQuiz extends Component {
  state = {
    title: '',
    description: '',
    questions: [
      { question: '', options: ['', ''], answer: '' },
      { question: '', options: ['', ''], answer: '' }
    ]
  };

  createQuestionHandler = e => {
    e.preventDefault();
    let questions = this.state.questions;
    questions.push({ question: '', options: ['', ''], answer: '' });
    return this.setState({ questions });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    let { title, description, questions } = this.state;
    return (
      <div className='row'>
        <div className='col-md-8 mx-auto'>
          <h2 className='display-4 text-center'> Add a Quiz</h2>
          <form>
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              <input
                name='title'
                type='text'
                className='form-control'
                id='title'
                placeholder='Question Title'
                value={title}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='decription'>Description</label>
              <textarea
                id='decription'
                name='description'
                onChange={this.onChange}
                className='form-control'
                rows='3'
                value={description}
                placeholder='Describe the Quiz'
              />
            </div>

            <h4 className='display-5'>Questions</h4>

            {questions.map((ques, index) => (
              <div key={index} className='card mb-3'>
                <div className='card-header'>
                  Question #{index + 1}
                  {questions.length > 2 && (
                    <button
                      className='btn btn-danger btn-sm d-inline-block float-right'
                      style={{ borderRadius: '90%', padding: '10px 15px' }}
                    >
                      &times;
                    </button>
                  )}
                </div>
                <div className='card-body'>
                  <div className='form-group'>
                    <label htmlFor='question'> Question </label>
                    <input
                      key={index}
                      type='text'
                      className='form-control'
                      placeholder='Type your question'
                      id='question'
                      name='question'
                      onChange={e => {
                        questions[index].question = e.target.value;
                        return this.setState({ questions });
                      }}
                      value={ques.question}
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='answer'>Answer</label>
                    <input
                      key={index}
                      type='text'
                      id='answer'
                      onChange={e => {
                        questions[index].answer = e.target.value;
                        return this.setState({ questions });
                      }}
                      className='form-control'
                      value={ques.answer}
                      placeholder='Please enter the correct Answer'
                      name='answer'
                    />
                  </div>
                  <label htmlFor='option'>Options</label>
                  {ques.options.map((option, i) => (
                    <div key={i} className='form-group d-flex align-item-center'>
                      <input
                        type='text'
                        className='form-control'
                        value={option}
                        onChange={e => {
                          questions[index].options[i] = e.target.value;
                          return this.setState({ questions });
                        }}
                        placeholder={`Option ${i + 1}`}
                      />
                      {ques.options.length > 2 && (
                        <button
                          className='btn btn-danger btn-sm ml-2'
                          onClick={e => {
                            e.preventDefault();
                            ques.options.splice(i, 1);
                            return this.setState({ questions });
                          }}
                        >
                          &times;
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    className='btn btn-success btn-sm'
                    onClick={e => {
                      e.preventDefault();
                      let { options } = questions[index];
                      options.push('');
                      this.setState({ questions });
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
            <button className='btn btn-success' onClick={this.createQuestionHandler}>
              New Question
            </button>
          </form>
        </div>
      </div>
    );
  }
}
