import { Myquote } from './myquote';

describe('Myquote', () => {
  it('should create an instance', () => {
    expect(new Myquote("","","",new Date())).toBeTruthy();
  });
});
