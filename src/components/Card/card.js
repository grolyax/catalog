import React, { Component } from 'react'

export default class Card extends Component {
  constructor() {
    super();

    this.state = {
      editCardId: null
    };

  }

  setEditCardId = (editCardId) => {
    this.setState({
      editCardId,
    });
  };

  handleEdit = (value) => {
    const { tasks, onEdit } = this.props;
    const { editCardId } = this.state;

    const task = tasks.find((t) => t.id === editCardId);

    onEdit({ ...task, name: value });

    this.setEditCardId(null);
  }


  handleEditButtonClick = (taskId) => {
    const { editCardId } = this.state;

    if (editCardId) {
      this.editEntityInput.current.handleEdit();

      return;
    }

    this.setEditCardId(taskId);
  };


  render() {
    return (
      <div>
        
      </div>
    )
  }
}
