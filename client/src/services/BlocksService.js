import Api from '@/services/Api'
require('axios-debug-log')

export default {

  fetchBlocks () {
    return Api().get('block')
  },

  fetchBlock (block_id) {
    return Api().get('block/' + block_id)
  },

  fetchMiner (miner_address, show_all_transactions) {
    let extraURLParams = '?show_all_transactions=false'
    if (show_all_transactions) {
      extraURLParams = '?show_all_transactions=true'
    }
    return Api().get('address/' + encodeURIComponent(miner_address) + extraURLParams)
  }

}
