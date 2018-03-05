import React from 'react';
import { connect } from 'react-redux';
import { renderIf } from '../../../lib/utils';
import ExpenseForm from '../expense-form/index.js';
import { expenseUpdate, expenseDelete } from '../../../actions/expense-actions';

class ExpenseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updating: false,
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleDelete() {
    this.props.expenseListDelete(this.props.expense);
  }

  handleUpdate() {
    this.setState({ updating: !this.state.updating });
  }

  render() {
    return (
      <div>
        <p>Expense: {this.props.expense.name}</p>
        <p>Cost: {this.props.expense.cost}</p>
        <button onClick={this.handleDelete}>Delete</button>
        {renderIf(this.state.updating,
          <ExpenseForm
            expense={this.props.expense}
            buttonText='Update'
            onComplete={this.props.expenseListUpdate}
          />
        )}
      </div>
    );
  }
}


const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, getState) => ({
  expenseListUpdate: expense => dispatch(expenseUpdate(expense)),
  expenseListDelete: expense => dispatch(expenseDelete(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);
