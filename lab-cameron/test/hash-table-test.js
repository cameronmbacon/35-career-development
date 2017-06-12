'use strict';

const expect = require('chai').expect;
const faker = require('faker');
const HashTable = require('../lib/hash-table.js');

describe('Hash Table Module', function() {
  before(done => {
    this.fakeKeys = [...Array(100)].map(key => key = faker.hacker.phrase());
    done();
  })
  after(done => {
    delete this.fakeKeys;
    done();
  })
  beforeEach(done => {
    this.hashTable = new HashTable();
    done();
  })
  afterEach(done => {
    this.hashTable = null;
    done();
  })

  describe('Instantiate new Hash Table', () => {
    it('should instantiate a new empty hash table', done => {
      expect(this.hashTable).to.be.instanceOf(HashTable);
      done();
    })
    it('should have a default size of 8192', done => {
      expect(this.hashTable.buckets.length).to.equal(8192);
      done();
    });
    it('should create a new hash table with a specified size of 1024', done => {
      this.hashTable = new HashTable(1024);
      expect(this.hashTable.buckets.length).to.equal(1024);
      done();
    });
    it('should have a default buckets property with ', done => {;
      expect(this.hashTable.buckets).to.be.instanceOf(Array);
      done();
    });
  });

  describe('Hash a key for the Hash Table: ', () => {
    it('should hash a key', done => {
      let expectHash = this.hashTable.hashKey('testy mcTest');
      let actualHash = 1225;
      expect(expectHash).to.equal(actualHash);
      done();
    });
    it('should always hash a key less than 8092', done => {
      this.fakeKeys.forEach(key => {
        expect(this.hashTable.hashKey(key)).to.be.lessThan(8192);
      });
      done();
    });
  });

  describe('Set value to Hash Table: ', () => {
    it('should add a new value to the hash table', done => {
      let expectKey = this.hashTable.hashKey('testy mcTest');
      this.hashTable.set('testy mcTest', 'test value');
      expect(this.hashTable.buckets[expectKey]).to.equal('test value');
      done();
    });
  });

  describe('Get value in Hash Table: ', () => [
    it('should retrieve a value from the hash table by it\'s key', done => {
      this.hashTable.set('test key', 'test value');
      let expectKey = this.hashTable.hashKey('test key');
      let expectValue = this.hashTable.hashKey('test value');
      let actualValue = this.hashTable.get('test key');
      expect(expectValue).to.equal(1021);
      done();
    })
  ]);

  describe('Remove value from Hash Table: ', () => [
    it('should remove an item from the hash table', done => {
      this.hashTable.set('test key', 'test value');
      let expectKey = this.hashTable.hashKey('test key');
      let expectValue = this.hashTable.hashKey('test value');
      let actualValue = this.hashTable.get('test key');
      expect(expectValue).to.equal(1021);
      this.hashTable.remove('test key');
      expect(this.hashTable.buckets[expectKey]).to.equal(undefined);
      done();
    })
  ]);
});
