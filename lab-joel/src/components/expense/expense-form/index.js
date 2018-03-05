import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.expense
      ? this.props.expense
      : {
        name: '',
        cost: '',
        categoryId: this.props.categoryId,
      };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props);
    this.props.oncomplete(this.state);
    this.setState({
      name: '',
      cost:'',
    });
  }

  render() {
    return (
      <form className="expense-form" onSubmit={this.handleSubmit}>
        <input
          className='expense-name-input'
          type='text'
          name='name'
          placeholder='name'
          value={this.state.name}
          onChange={this.handleChange}/>

        <input
          className='expense-cost-input'
          type='number'
          name='cost'
          placeholder='cost'
          value={this.state.cost}
          onChange={this.handleChange}/>

        <button type='submit'>{this.props.buttonText}</button>
      </form>
    );
  }

}

export default ExpenseForm;
