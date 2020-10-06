import React, { Component } from "react";
import './index.css';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  padding: grid,
  width: 250,
});

export default class DragAndDropPlayers extends Component{
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items
    });
  }

  componentWillReceiveProps(newProps) 
  {
    this.setState({items: newProps.players});
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {this.state.items.map((item, index) => (
                <Draggable key={item.player_id} 
                  draggableId={item.player_id.toString()} 
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="isDraggingOver"
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <div className="nameAge">
                        <div>
                          <label className="lblDrag">Name:</label>
                          <label className="lblData">{item.player_name}</label>
                        </div>
                        <div>
                          <label className="lblDrag">Age:</label>
                          <label className="lblData">{item.age}</label>
                        </div>
                      </div>
                      <div>
                        <label className="lblDrag">Nacionality:</label>
                        <label className="lblData">{item.nationality}</label>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}