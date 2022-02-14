import React from 'react';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing : false,
    };
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    })
  }

  render() {
    let viewMode = {}
let editMode = {}

if (this.state.editing) {
  viewMode.display = "none"
} else {
  editMode.display = "none"
}
    const { completed, id, title } = this.props.todo;
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
          <span style={completed ? completedStyle : null}>{title}</span>
        </div>
       <input 
       type="text" 
       style={editMode} 
       className={styles.textInput} 
       value={title}
       />
      </li>
    );
  }
}

export default TodoItem;
