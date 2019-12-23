//hash tables store data in associative manners/ array format
//hash functions are irreversable
//hash functions are deterministic>>same result each time
//collision is when you get same answer from two different inputs
//direct access to look up entries and add them no matter how big the data is

const hash = (key, size) => {
  let hashedkey = 0

  for (let i = 0; i < key.length; i++ ){
    hashedkey += key.charCodeAt(i)
  }


  return hashedkey % size
}



class HashTable {
  costructor() {
    this.size = 20
    this.buckets = Array(this.size)

    for (let i = 0; i < this.buckets.length; i++) {
       this.buckets[i] = new Map()
    }
  }

  insert(key, value) {
    let idx = hash(key, this.size)
    this.buckets[idx].set(key, value)
  }


  remove(key) {
    let idx = hash(key, this.size)
    let deleted = this.buckets[idx].get(key)
    this.buckets[idx].delete(key)
    return deleted
  }

  search(key) {
    let idx = hash(key, this.size)
    return this.buckets[idx].get(key)
  }
}
