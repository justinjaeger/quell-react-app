module.exports = {
  setupFilesAfterEnv: ['<rootDir>/client/src/tests/TestingSetup.js'],
};

/*
  HOW TO SET UP JEST / ENZYME IN ANY FILE

  - installation (assuming use of babel)
    - npm install jest jest-enzyme babel-jest
    - npm install enzyme enzyme-adapter-react-16 --save-dev

  - inside package.json
    - add this anywhere:
      "jest": {
        "verbose": true
      },
    - add inside "scripts":
      "test": "jest --verbose"

  - create a file called jest.config.js in same folder as package.json
      - place inside of it:
        module.exports = {
          setupFilesAfterEnv: ['<rootDir>/client/src/tests/TestingSetup.js'],
        };

  - make a tests folder anywhere, doesn't matter what it's called
  - make a setup file in the folder, doesn't matter what it's called
      - place inside of it:
        import { configure } from 'enzyme';
        import Adapter from 'enzyme-adapter-react-16';
        configure({ adapter: new Adapter() });

      - this basically makes it so that enzyme is going to work across all your other files

  - then for other testing files, make sure to name them like ComponentName.test.js
    - and set them up like this:
      import React from 'react';
      import { shallow, mount, render } from 'enzyme';
      import SomeContainer from '../containers/SomeContainer'

      describe('SomeContainer', () => {
        it('if this passes jest is working', () => {
          const isTrue = true
          expect(isTrue).toBe(true)
        })
      })

  - now run npm jest
  - if that test passes you should be good

  SINON:
  - if you want test if functions have been called, test what they returned
  - npm i sinon --save-dev
  - import sinon from 'sinon'

  REACT TESTING LIBRARY:
  - npm i @testing-library/react --save-dev
  - import { render, fireEvent, getByTestId} from "@testing-library/react";
  - IF ALREADY USED ENZYME make sure not to import render and overlap it
*/