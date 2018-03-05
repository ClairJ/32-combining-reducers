import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../../lib/utils.js';
import CategoryForm from '../category-form/index.js';
import {categoryUpdate, categoryDelete} from '../../../actions/category-action.js';
import { expenseCreate } from '../../../actions/expense-actions';
import ExpenseForm from '../../expense/expense-form/index.js';
import ExpenseList from '../../expense/expense-list/index.js';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.category ? this.props.category
        : {},
      updating: false,
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.CategoryListCategoryDelete(this.state);
  }
  render() {
    return(
      <section>
        <div
          key={this.props.category._id}
          onDoubleClick={() => this.setState({updating: !this.state.updating})}>
          <p>{this.props.category.title}</p>
          <p>${this.props.category.budget}</p>
          <button onClick={this.handleDelete}>Delete</button>
        </div>
        {renderIf(this.state.updating,
          <CategoryForm
            category={this.props.category}
            buttonText='update'
            onComplete={this.props.categoryListUpdate}/>
        )}

        <div>
          <h3>Add and Expense</h3>
          <ExpenseForm
            buttonText='Create'
            categoryId={this.props.category._id}
            oncomplete={this.props.expenseItemCreate}
          />
        </div>
        {renderIf(this.props.expenses[this.props.category._id].length,
          this.props.expenses[this.props.category._id].map(exp => (
            <ExpenseList
              key={exp._id}
              expense={exp}
            />
          ))
        )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch, getState) => ({
  categoryListUpdate: category => dispatch(categoryUpdate(category)),
  categoryItemDelete: category => dispatch(categoryDelete(category)),
  expenseItemCreate: expense => dispatch(expenseCreate(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
