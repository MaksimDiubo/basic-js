const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {

    if (value === undefined) {
      this.chain.push(`( )`);
    } else {
      this.chain.push(`( ${value} )~~`);
    }
    return this
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position <= 0 || position >= this.getLength()) {
      this.chain = [];
      throw 'error';
    } else {
      this.chain.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
  let result = this.chain.join('').slice(0, -2);
  this.chain = [];
  return result;
  }
};

module.exports = chainMaker;
