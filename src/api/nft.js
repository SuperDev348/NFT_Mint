import siteConfig from '../config/site.config';
import {getContractInstance} from './index'

async function owner() {
  try {
    const contractInstance = getContractInstance()
    const res = await contractInstance.methods.owner().call()
    return Promise.resolve(res)
  } catch (error) {
    return Promise.reject(error)
  }
}


export {
  mint,
  owner
}
