import React, { PropTypes, Component } from 'react';

class BoDomainServicesPane extends Component {

  constructor(params) {
    super(params);
    this._onClick = this._onClick.bind(this);
    this._onKeyPress = this._onKeyPress.bind(this);
  }

  render() {
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

BoDomainServicesPane.displayName = 'BoDomainServicesPane';

BoDomainServicesPane.propTypes = {
  onDomainGetClick: PropTypes.func.isRequired,
  onDomainTransferGetClick: PropTypes.func.isRequired
};


export default CreateModelDlg;

