import React from 'react';
import Notifications from './Notifications' 
import { shallow } from 'enzyme';
import { expect } from 'chai';

describe('test Notifications component', () => {

    beforeEach( () => {
        const wrapper = shallow(<Notifications />);
    });

    it('test that Notifications renders without crashing', () => {
        expect(wrapper).to.not.be.an('undefined');
    });

    it('verify that Notifications renders three list items', () => {
        expect(wrapper.find('li')).to.have.lengthOf(3);
    });

    it("verify that Notifications renders the text 'Here is the list of notifications'", () => {
        expect(wrapper.contains(<p>Here is the list of notifications</p>)).to.equal(true);
    });

});