import React from 'react';

const AddQuestion = ({ questions }) => {
  return questions.map((ques, index) => (
    <div key={index} className='card mb-3'>
      <div className='card-header'>
        Question #{index + 1}
        {questions.length > 2 && (
          <button
            className='btn btn-danger btn-sm d-inline-block float-right'
            style={{ borderRadius: '90%', padding: '10px 15px' }}
            onClick={e => {
              e.preventDefault();
              questions.splice(index, 1);
              this.setState({ questions });
            }}
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

        {/* Mapping Options right here */}
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

        {/* finished Options Mapping */}

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
  ));
};
export default AddQuestion;
