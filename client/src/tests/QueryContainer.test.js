import React from 'react';
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme';
import { render, fireEvent, getByTestId} from "@testing-library/react";
import sinon from 'sinon'
// import files you want to test
import QueryContainer from '../containers/QueryContainer'
import App from '../App.js'

/* 
  Enzyme docs;
  https://enzymejs.github.io/enzyme/docs/api/shallow.html
  interesting:
  https://blog.carbonfive.com/shallow-testing-hooks-with-enzyme/

  Jest docs:
  https://jestjs.io/docs/en/expect
  Jest spying:
  https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname

  Sinon docs:
  https://sinonjs.org/releases/latest/spies/

  React-Testing-Library
  https://testing-library.com/docs/dom-testing-library/api-queries
  https://testing-library.com/docs/dom-testing-library/api-queries
  https://www.youtube.com/watch?time_continue=49&v=SSyy2sHpmIA&feature=emb_logo

  good enzyme/jest vid:
  https://www.youtube.com/watch?v=XUlGzJLZe2Q
*/

describe('Basic Tests', () => {
  it('if pass jest is working', () => {
    const isTrue = true
    expect(isTrue).toBe(true)
  })
  it('passes if enzyme is working', () => {
    const wrapper = shallow(<QueryContainer />)
    const text = wrapper.find('h1')
    expect(text.text()).toBe('testing text')
  })
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

describe('QueryContainer', () => {
  const wrapper = shallow(<QueryContainer />);

  // beforeEach(() => {})

  it("loads state with initial value", () => {
    const { getByTestId } = render(<QueryContainer />);
    expect(getByTestId("count").textContent).toBe("0");
  }); 

  it('should simulate button click, which triggers state change', () => {
    const { getByTestId } = render(<QueryContainer />);
    fireEvent.click(getByTestId("countFunc"));
    expect(getByTestId("count").textContent).toBe("1");
  })
})