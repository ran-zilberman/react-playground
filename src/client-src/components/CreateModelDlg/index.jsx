import React, { PropTypes, Component } from 'react';

class CreateModelDlg extends Component {

  constructor(params) {
    super(params);
    this._onClick = this._onClick.bind(this);
    this._onKeyPress = this._onKeyPress.bind(this);
  }

  render() {
    let {value} = this.props;
    return (<div>
      <input ref="modelName" onKeyPress={ this._onKeyPress } />
      <button onClick={ this._onClick }>Create new Model</button>
    </div>);
  }

  _onClick() {
    let {onCreateModelClick} = this.props;
    let val = this.refs.modelName.value;
    onCreateModelClick(this.refs.modelName.value);
  }

  _onKeyPress(event) {
    if(event.which == 13){
      this._onClick();
    }
  }

}

CreateModelDlg.displayName = 'CreateModelDlg';

CreateModelDlg.propTypes = {
  onCreateModelClick: PropTypes.func.isRequired
};


export default CreateModelDlg;

