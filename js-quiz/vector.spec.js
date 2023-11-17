import assert from 'assert';
import vector from './vector.js';

describe('vector', () => {
  it('should return a vector of given length', () => {
    for (let i = 0; i < 5; i++) {
      const length = Math.round(Math.random() * 100) + 1;
      const v = vector(length);

      assert.deepStrictEqual(v.length, length);
      v.forEach((element) => {
        assert.deepStrictEqual(typeof element, 'number');
      });
    }
  });

  it('should return an empty value for a negative length argument', () => {
    const length = -1;
    const v = vector(length);

    assert.deepStrictEqual(v, []);
  });

  it('should produce two random vectors', () => {
    for (let i = 0; i < 5; i++) {
      const length = Math.round(Math.random() * 100) + 1;
      const v1 = vector(length);
      const v2 = vector(length);

      assert.notDeepStrictEqual(v1, v2);
    }
  });
});
