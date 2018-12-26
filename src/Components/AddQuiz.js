import React, { Component } from 'react';
import AddQuestion from './AddQuestion';
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
            <AddQuestion questions={questions} />
            <button className='btn btn-success' onClick={this.createQuestionHandler}>
              New Question
            </button>
          </form>
        </div>
      </div>
    );
  }
}
