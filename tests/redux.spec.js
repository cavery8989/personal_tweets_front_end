/* global, it, expect */
const expect = require('chai').expect;
const actions = require('../redux/actions/actions');
const appReducer = require('../redux/reducer/reducer');

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

describe('#appReducer', function () {
  it('is a function', function () {
    expect(appReducer).to.be.a('function');
  });
  it('is takes two arguments', function () {
    expect(appReducer.length).to.equal(2);
  });
  it('it returns default state if no args passed', function () {
    var expected = {
      loading: false,
      profileOne: null,
      profileTwo: null
    };
    expect(appReducer()).to.eql(expected);
  });
  it('returns the expected state for when passed a loading on actions ', function () {
    var action = actions.loadingOn();
    var initialState = appReducer();
    var expected = {
      loading: true,
      profileOne: null,
      profileTwo: null
    };
    expect(appReducer(initialState,action)).to.eql(expected);
    var initialStateTwo = appReducer(initialState,action);
    expect(appReducer(initialStateTwo,action)).to.eql(expected);
  });
  it('returns the expected result when passed a loading off action', function () {
    var initialState = appReducer(undefined, actions.loadingOn());
    var expected = {
      loading: false,
      profileOne: null,
      profileTwo: null
    };
    var action = actions.loadingOff();
    expect(appReducer(initialState, action)).to.eql(expected);
  });
  it('it returns the expected result when the passed a set profile one action', function () {
    var initialState = appReducer();
    var action = actions.setProfileOne({name:'test'});
    var expected = {
      loading: false,
      profileOne: {name: 'test'},
      profileTwo: null
    };
    expect(appReducer(initialState,action)).to.eql(expected);
  });
  it('it returns the expected result when the passed a set profile two action', function () {
    var initialState = appReducer();
    var action = actions.setProfileTwo({name:'test2'});
    var expected = {
      loading: false,
      profileOne: null,
      profileTwo: {name: 'test2'}
    };
    expect(appReducer(initialState,action)).to.eql(expected);
  });
  it('returns the expected result when given a remove profile one action ', function () {
    var initialState = appReducer(undefined, actions.setProfileOne({name:'test'}));
    initialState = appReducer(initialState, actions.setProfileTwo({name: 'test2'}));
    var actionOne = actions.removeProfileOne();
    var actiontwo = actions.removeProfileTwo();
    var expectedOne = {
      loading: false,
      profileOne: null,
      profileTwo: {name: 'test2'}
    };
    var expectedTwo = {
      loading: false,
      profileOne: {name: 'test'},
      profileTwo: null
    };
    console.log(initialState);
    expect(appReducer(initialState,actionOne)).to.eql(expectedOne);
  });
});


