import React from 'react';
import bin from '../trash3.png';
import handshake from '../handshake.png';
import logo from '../logo3.png';

const exports = {};

const config = {
  projectId: '7130535607edfe76a60647abfcab53cf',
  theme: 'dark',
  accentColor: 'default',
  ethereum: {
    appName: 'web3Modal'
  }
}

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="App">
        <header className="App-header" id="root">
          <div className="header">
            <a href="/"><img className="logo" src={logo}/></a>
          </div>
          {content}
        </header>
      
      {/* <Web3Modal config={config} /> */}

      </div>
    );
  }
}

exports.ConnectAccount = class extends React.Component {
  render() {
    return (
      <div>
        Please wait while we connect to your account.
        If this takes more than a few seconds, there may be something wrong.
      </div>
    )
  }
}

exports.FundAccount = class extends React.Component {
  render() {
    const {bal, standardUnit, defaultFundAmt, parent} = this.props;
    const amt = (this.state || {}).amt || defaultFundAmt;
    return (
      <div>
        <h2>Fund account</h2>
        <br />
        Balance: {bal} {standardUnit}
        <hr />
        Would you like to fund your account with additional {standardUnit}?
        <br />
        (This only works on certain devnets)
        <br />
        <input
          type='number'
          placeholder={defaultFundAmt}
          onChange={(e) => this.setState({amt: e.currentTarget.value})}
        />
        <button onClick={() => parent.fundAccount(amt)}>Fund Account</button>
        <button onClick={() => parent.skipFundAccount()}>Skip</button>
      </div>
    );
  }
}

exports.DeployerOrAttacher = class extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div id="mainParentDiv">
        <div id="sponsor">
          <img className="icon-img" src={bin}></img><br/>
          <button
            onClick={() => parent.selectDeployer()}
          >Sponsor R3CYCL3 Bin</button>
          <br /><br /> <span>No Space?  Purchase a R3CYCL3 Bin</span>
        </div>
        <div id="confirmOffer">
          <img className="icon-img" src={handshake}></img><br/>
          <button
            onClick={() => parent.selectAttacher()}
          >Confirm Offer</button>
          <br /><br /><span>Check offers to build R3CYCL3 Bin</span>
        </div>  
      </div>
    );
  }
}

export default exports;
