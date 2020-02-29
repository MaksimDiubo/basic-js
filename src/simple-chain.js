const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (value !== undefined) {
      this.chain.push(`~~( ${value} )`)
    } else {
      this.chain.push("( )")
    }
    return this
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 0 || position >= this.chain.length) {
      throw "Error"
    }
    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
  return this.chain.join("").slice(2)
  }
};

module.exports = chainMaker;
