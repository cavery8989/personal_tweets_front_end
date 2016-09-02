/* global, it, expect */
const expect = require('chai').expect;
const actions = require('../redux/actions/actions');

describe('#actions creators', function () {
  describe('#loadingOn', function () {
    it('is a function' , function () {
      expect(actions.loadingOn).to.be.a('function');
    });
    it('returns an object with a type of LOADING_ON', function () {
      var expected = {type: 'LOADING_ON'};
      expect(actions.loadingOn()).to.eql(expected);
    });
  });
  describe('#loadingOff', function () {
    it('is a function' , function () {
      expect(actions.loadingOff).to.be.a('function');
    });
    it('returns an object with a type of LOADING_OFF', function () {
      var expected = {type: 'LOADING_OFF'};
      expect(actions.loadingOff()).to.eql(expected);
    });
  });
  describe('#setProfileOne', function () {
    it('is a function', function () {
      expect(actions.setProfileOne).to.be.a('function');
    });
    it('takes one arg', function () {
      expect(actions.setProfileOne.length).to.equal(1);
    });

    it('returns an expected object', function () {
      var expected = {
        type: 'SET_PROFILE_ONE',
        profile: {name: 'dummy Profile'}
      }
      expect(actions.setProfileOne({name: 'dummy Profile'})).to.eql(expected);
    })
  });
  describe('#setProfileTwo', function () {
    it('is a function', function () {
      expect(actions.setProfileTwo).to.be.a('function');
    });
    it('takes one arg', function () {
      expect(actions.setProfileTwo.length).to.equal(1);
    });

    it('returns an expected object', function () {
      var expected = {
        type: 'SET_PROFILE_TWO',
        profile: {name: 'dummy Profile 2'}
      };
      expect(actions.setProfileTwo({name: 'dummy Profile 2'})).to.eql(expected);
    })
  });
  describe('#removeProfileOne', function () {
    it('is a function', function () {
      expect(actions.removeProfileOne).to.be.a('function');
    });
    it('returns the expected object' , function () {
      var expected = {type: 'REMOVE_PROFILE_ONE'};
      expect(actions.removeProfileOne()).to.eql(expected);
    });
  });
  describe('#removeProfileTwo', function () {
    it('is a function', function () {
      expect(actions.removeProfileTwo).to.be.a('function');
    });
    it('returns the expected object' , function () {
      var expected = {type: 'REMOVE_PROFILE_TWO'};
      expect(actions.removeProfileTwo()).to.eql(expected);
    });
  });
});


