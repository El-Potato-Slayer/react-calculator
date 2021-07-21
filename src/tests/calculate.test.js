import { cleanup } from '@testing-library/react';
import Calculate from '../logic/calculate';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('ensures 2 + 3 is 5', () => {
  const total = Calculate({ total: '2', next: '3', operation: '+' }, '=');
  expect(total).toEqual({ total: '5', next: '', operation: '' });
});

it('ensures 2 + 3 is not 6', () => {
  const total = Calculate({ total: '2', next: '3', operation: '+' }, '=');
  expect(total).not.toEqual({ total: '6', next: '', operation: '' });
});

it('ensures 5 - 3 is 2', () => {
  const total = Calculate({ total: '5', next: '3', operation: '-' }, '=');
  expect(total).toEqual({ total: '2', next: '', operation: '' });
});

it('ensures 5 - 3 is not 1', () => {
  const total = Calculate({ total: '5', next: '3', operation: '-' }, '=');
  expect(total).not.toEqual({ total: '1', next: '', operation: '' });
});

it('ensures 5 × 3 is 15', () => {
  const total = Calculate({ total: '5', next: '3', operation: '×' }, '=');
  expect(total).toEqual({ total: '15', next: '', operation: '' });
});

it('ensures 5 × 3 is not 16', () => {
  const total = Calculate({ total: '5', next: '3', operation: '×' }, '=');
  expect(total).not.toEqual({ total: '16', next: '', operation: '' });
});

it('ensures 6 ÷ 3 is 2', () => {
  const total = Calculate({ total: '6', next: '3', operation: '÷' }, '=');
  expect(total).toEqual({ total: '2', next: '', operation: '' });
});

it('ensures 6 × 3 is not 3', () => {
  const total = Calculate({ total: '6', next: '3', operation: '÷' }, '=');
  expect(total).not.toEqual({ total: '3', next: '', operation: '' });
});

it("ensures 'AC' empties total", () => {
  const total = Calculate({ total: '6', next: '3', operation: '÷' }, 'AC');
  expect(total).toEqual({ total: '0', next: '', operation: '' });
});

it("ensures '+/-' changes 6 total -6", () => {
  const total = Calculate({ total: '6', next: '', operation: '' }, '+/-');
  expect(total).toEqual({ total: '-6', next: '', operation: '' });
});

it("ensures '+/-' changes -6 total 6", () => {
  const total = Calculate({ total: '-6', next: '', operation: '' }, '+/-');
  expect(total).toEqual({ total: '6', next: '', operation: '' });
});

it("ensures '+/-' changes 4 next -4", () => {
  const total = Calculate({ total: '6', next: '4', operation: '+' }, '+/-');
  expect(total).toEqual({ total: '6', next: '-4', operation: '+' });
});

it("ensures '+/-' changes -4 total 4", () => {
  const total = Calculate({ total: '6', next: '-4', operation: '+' }, '+/-');
  expect(total).toEqual({ total: '6', next: '4', operation: '+' });
});

it("ensures '+/-' changes 4 next -4", () => {
  const total = Calculate({ total: '6', next: '4', operation: '+' }, '+/-');
  expect(total).toEqual({ total: '6', next: '-4', operation: '+' });
});

it("ensures '+/-' changes -4 total 4", () => {
  const total = Calculate({ total: '6', next: '-4', operation: '+' }, '+/-');
  expect(total).toEqual({ total: '6', next: '4', operation: '+' });
});

it("ensures '%' changes total of 100 to 1", () => {
  const total = Calculate({ total: '100', next: '', operation: '' }, '%');
  expect(total).toEqual({ total: '1', next: '', operation: '' });
});

it("ensures '%' changes total of 100 does not equal 2", () => {
  const total = Calculate({ total: '100', next: '', operation: '' }, '%');
  expect(total).not.toEqual({ total: '2', next: '', operation: '' });
});

it("ensures '%' changes next of 100 to 1", () => {
  const total = Calculate({ total: '1', next: '100', operation: '+' }, '%');
  expect(total).toEqual({ total: '1', next: '1', operation: '+' });
});

it("ensures '%' changes next of 100 does not equal 2", () => {
  const total = Calculate({ total: '1', next: '100', operation: '+' }, '%');
  expect(total).not.toEqual({ total: '1', next: '2', operation: '+' });
});

it("ensures '.' changes total of 10 to 10.", () => {
  const total = Calculate({ total: '10', next: '', operation: '' }, '.');
  expect(total).toEqual({ total: '10.', next: '', operation: '' });
});

it("ensures '.' changes next of 10 to 10.", () => {
  const total = Calculate({ total: '1', next: '10', operation: '+' }, '.');
  expect(total).toEqual({ total: '1', next: '10.', operation: '+' });
});
