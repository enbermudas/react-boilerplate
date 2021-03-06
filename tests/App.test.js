import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/App';

describe('App', () => {
  it('Renders correctly', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
