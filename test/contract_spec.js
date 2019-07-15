// /*global contract, config, it, assert*/

const Contract = require('Embark/contracts/Contract');

let accounts;

// For documentation please see https://embark.status.im/docs/contracts_testing.html
config(
  {
    contracts: {
      Contract: {},
    },
  },
  (_err, web3_accounts) => {
    accounts = web3_accounts;
  },
);

contract('Contract', function() {
  this.timeout(0);

  it('should retrieve value', async function() {
    let record = await Contract.records(web3.utils.padLeft('0x1', 64));
    console.log(record);
  });

  it('should log the provided sender', async function() {
    let receipt = await Contract.logSender({ from: accounts[2] });
    console.log('account 1 address: ', accounts[0]);
    assert.equal(receipt.events.Sender.returnValues.sender, accounts[2]);
  });
});
