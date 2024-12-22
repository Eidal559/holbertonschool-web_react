import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { expect } from 'chai'


describe('testing the App component', () => {

    beforeEach(() => {
        const wrapper = shallow(<App />);
    });

    it("test that App renders without crashing", () => {
        expect(wrapper).to.not.be.an('undefined')
    });

    it("verify that App renders a div with the class App-header", () => {
        expect(wrapper.find('.App-header')).to.have.lengthOf(1);
    });

    it("verify that App renders a div with the class App-body", () => {
        expect(wrapper.find('.App-body')).to.have.lengthOf(1);
    });

    it("verify that App renders a div with the class App-footer", () => {
        expect(wrapper.find('.App-footer')).to.have.lengthOf(1);
    });

});