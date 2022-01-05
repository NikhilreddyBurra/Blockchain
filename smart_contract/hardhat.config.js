require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url:'https://eth-ropsten.alchemyapi.io/v2/zARZIzbR4m8BAmrgjquvVIlo4jU0d705',
      accounts: [ '4cf946be00791b42849c49a3cf7a29f4fe63dad95098335c039c4eb8326b3fe4' ]
    }
  }
}