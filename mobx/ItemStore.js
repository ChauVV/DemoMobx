import { observable, action } from 'mobx'

class Item {
  @observable name = 'MacBook'

  @observable price = 100

  @observable voteCount = 0

  @action increateVote = () => {
    this.voteCount += 1
  }

  @action increatePrice = () => {
    this.price += 100
  }
}
const ItemStore = new Item()
export default ItemStore
