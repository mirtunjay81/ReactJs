import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme'
import App from './App'
import Button from './Button'
import Sinon from 'sinon'

configure ({adapter: new Adapter()});


it('renders without crashing', () => {
const wrapper = shallow(<App />);

expect (wrapper.find('.App')).toHaveLength(1);

});

it('should show button', () => {
const wrapper = shallow(<Button />);

expect (wrapper.find('.Button')).toHaveLength(1);
});


it('should show Click me', () => {
const props = {
buttonText: 'click me',
};
//const wrapper = shallow(<Button />);
const wrapper = shallow(<Button {...props}/>);

const result = wrapper.find('.Button-text').text();

expect (result).toEqual(props.buttonText);

});


it('should show the text passed to button', () => {
const props = {
buttonText: 'click me again',
};


//const buttonText = 'click me again'
//const wrapper = shallow(<Button buttonText=(buttonText)/>);

const wrapper = shallow(<Button {...props}/>);

const result = wrapper.find('.Button-text').text();

expect (result).toEqual(props.buttonText);

});


it('should show zero', () => {
 const props = {
   buttonValue: '0'
 };
 const wrapper = shallow(<Button {...props}/>);
 const result = wrapper.find('.Button-click-count').text();

 expect(result).toEqual('0');
});

it('should call onClick when clicked', () => {
 const props = {
     onClick: Sinon.spy(),
 };
 const wrapper = shallow(<Button {...props}/>);

 const button = wrapper.find('.Button');
 const result = wrapper.find('.Button-click-count').text();

 Sinon.assert.callCount(props.onClick, 0)
 button.simulate('click');
 Sinon.assert.callCount(props.onClick, 1)
});