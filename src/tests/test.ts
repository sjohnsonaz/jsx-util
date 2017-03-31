import { expect } from 'chai';

import { Switch, If } from '../scripts/JSXUtil';

describe('If', () => {
    it('should run true if true', () => {
        let runTrue = false;
        let runFalse = false;
        If(true,
            () => {
                runTrue = true;
            }, () => {
                runFalse = true;
            });
        expect(runTrue).to.equal(true);
        expect(runFalse).to.equal(false);
    });

    it('should run false if false', () => {
        let runTrue = false;
        let runFalse = false;
        If(false,
            () => {
                runTrue = true;
            }, () => {
                runFalse = true;
            });
        expect(runTrue).to.equal(false);
        expect(runFalse).to.equal(true);
    });
});

describe('Switch', () => {
    it('should run matching case', () => {
        let runA = false;
        let runB = false;
        let runDefault = false;
        Switch('a', {
            'a': () => {
                runA = true;
            },
            'b': () => {
                runB = true;
            }
        }, () => {
            runDefault = true;
        });
        expect(runA).to.equal(true);
        expect(runB).to.equal(false);
        expect(runDefault).to.equal(false);
    });

    it('should run default case', () => {
        let runA = false;
        let runB = false;
        let runDefault = false;
        Switch('c', {
            'a': () => {
                runA = true;
            },
            'b': () => {
                runB = true;
            }
        }, () => {
            runDefault = true;
        });
        expect(runA).to.equal(false);
        expect(runB).to.equal(false);
        expect(runDefault).to.equal(true);
    });
});
