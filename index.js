const platform = process.platform === 'win32' ? 'windows' : process.platform

module.exports = {
  type: 'client',
  displayName: 'Prysm Beacon Chain',
  name: 'prysm_beacon_chain',
  repository: 'https://github.com/PhilippLgh/prysm-mirror',
  binaryName: process.platform === 'win32' ? 'beacon-chain.exe' : 'beacon-chain'
}
