import React, { PropTypes, Component } from 'react';

class CreateModelDlg extends Component {

  constructor(params) {
    super(params);
    this._onClick = this._onClick.bind(this);
  }

  render() {
    let {value} = this.props;
    return (<div>
      <input ref="modelName"/>
      <button onClick={ this._onClick }>Create new Model</button>
    </div>);
  }

  _onClick() {
    let {onCreateModelClick} = this.props;
    let val = this.refs.modelName.value;
    onCreateModelClick(this.refs.modelName.value);
  }

}

CreateModelDlg.displayName = 'CreateModelDlg';

CreateModelDlg.propTypes = {
  onCreateModelClick: PropTypes.func.isRequired
};


export default CreateModelDlg;

