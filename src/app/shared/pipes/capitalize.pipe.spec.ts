import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  let pipe: CapitalizePipe;
  beforeEach(() => {
    pipe = new CapitalizePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should capitalize 1st char of each word', () => {
    const inputStr = 'hemant Kumar singh';
    expect(pipe.transform(inputStr)).toEqual('Hemant Kumar Singh');

    const inputStr1 = 'hemant';
    expect(pipe.transform(inputStr1)).toEqual('Hemant');
  });
});
