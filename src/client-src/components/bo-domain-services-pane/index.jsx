import React, { PropTypes, Component } from 'react';

class BoDomainServicesPane extends Component {

  constructor(params) {
    super(params);
    this._onDomainGetClick = this._onDomainGetClick.bind(this);
    this._onDomainTransferGetClick = this._onDomainTransferGetClick.bind(this);
    this._onRegistryCheckClick = this._onRegistryCheckClick.bind(this);
    this._onPremiumDomainDataClick = this._onPremiumDomainDataClick.bind(this);
  }

  render() {
    return (<div>
      <input ref="domainName" />
      <button className="domain-get-button" onClick={ this._onDomainGetClick }>Domain Get</button>
      <button className="domain-transfer-get-button" onClick={ this._onDomainTransferGetClick }>Domain Transfer Get</button>
      <button className="registry-check-button" onClick={ this._onRegistryCheckClick }>Domain Registry Check</button>
      <button className="premium-domain-data-button" onClick={ this._onPremiumDomainDataClick }>Premium domain data</button>
    </div>);
  }

  _onDomainGetClick() {
    let {onDomainGetClick} = this.props;
    let domainName = this.refs.domainName.value;
    onDomainGetClick(domainName);
  }

  _onDomainTransferGetClick() {
    let {onDomainTransferGetClick} = this.props;
    let domainName = this.refs.domainName.value;
    onDomainTransferGetClick(domainName);
  }

  _onRegistryCheckClick() {
    let {onRegistryCheckClick} = this.props;
    let domainName = this.refs.domainName.value;
    onRegistryCheckClick(domainName);
  }

  _onPremiumDomainDataClick() {
    let {onPremiumDomainDataClick} = this.props;
    let domainName = this.refs.domainName.value;
    onPremiumDomainDataClick(domainName);
  }

}

BoDomainServicesPane.displayName = 'BoDomainServicesPane';

BoDomainServicesPane.propTypes = {
  onDomainGetClick: PropTypes.func.isRequired,
  onDomainTransferGetClick: PropTypes.func.isRequired,
  onRegistryCheckClick: PropTypes.func.isRequired,
  onPremiumDomainDataClick: PropTypes.func.isRequired
};


export default BoDomainServicesPane;

