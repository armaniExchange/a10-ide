import React, { Component, PropTypes } from 'react';
import { DragSource as dragSource } from 'react-dnd';
import _ from 'lodash';

import DndTypes from '../utils/DndTypes';

const componentSource = {
  isDragging(props, monitor) {
    return monitor.getItem()._componentId === props._componentId;
  },

  beginDrag(props) {
    const item = Object.assign({
      _componentId: _.uniqueId()
    }, props.schema);
    return item;
  }
};

@dragSource(DndTypes.COMPONENT, componentSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))

class GroupComponentCandidate extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func,
    addComponentByClicking: PropTypes.func.isRequired,
    onLayoutChange: PropTypes.func.isRequired,
    name: PropTypes.string,
    schema: PropTypes.object,
    style: PropTypes.object,
    iconClassName: PropTypes.string
  }

  onClick = () => {
    this.props.addComponentByClicking(componentSource.beginDrag(this.props));
  }

  render() {
    const {
      addComponentByClicking,
      onLayoutChange,
      connectDragSource,
      name,
      schema,
      style,
      iconClassName
    } = this.props;

    return connectDragSource(
      <span
        style={style}
        title={name}
        onClick={addComponentByClicking.bind(this, schema.schemaChildren[0])}
        onDoubleClick={onLayoutChange.bind(this, schema)}
      >
        <i className={iconClassName} />
        <br />
        {name}
      </span>
    );
  }
}
export default GroupComponentCandidate;
