import Web3 from 'web3';

import siteConfig from '../config/site.config';

const connect = async () => {
  const { ethereum } = window;
  if (ethereum) {
    try {
      
      else {
        return Promise.reject({message: `Change network to ${siteConfig.NETWORK.NAME}.`})
      }
    }
    catch (error) {
      return Promise.reject({message: "Something went wrong."})
    }
  }
  else {
    return Promise.reject({message: "Install Metamask."})
  }
}

export {
  connect
}
