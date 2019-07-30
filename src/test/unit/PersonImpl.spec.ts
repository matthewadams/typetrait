/* global describe, it */
import { expect } from 'chai';
import Person from '../../main/Person';
import PersonImpl from '../../main/PersonImpl';

describe('PersonImpl', () => {
    it('should work', () => {
        const p: Person = new PersonImpl().withName('foobar');
        expect(p.name).to.equal('foobar');
    });
});
