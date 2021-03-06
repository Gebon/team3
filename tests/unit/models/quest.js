'use strict';
/* eslint-disable no-unused-expressions */

const expect = require('chai').expect;
const Quest = require('../../../models/quest');
const User = require('../../../models/user');

describe('Quest', () => {
    describe('isAccessibleToUser', () => {
        it('should return false if user does not defined', () => {
            const quest = new Quest({
                author: new User({}),
                name: 'asdqwer',
                description: 'sdgvbsbSDBX SGWEsADfdsv'
            });
            expect(quest.isAccessibleToUser(null)).to.be.false;
        });
    });
});
