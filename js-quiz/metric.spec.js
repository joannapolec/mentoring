import assert from 'assert';
import metric from './metric.js';

const generate = (length) =>
  [...Array(length).keys()].map(
    () =>
      (Math.round(Math.random()) ? 1 : -1) *
      Math.round(Math.round(Math.random() * 100))
  );

describe('metric', () => {
  it('should return the distance between two vectors', () => {
    let vector1 = [1, 1];
    let vector2 = [3, 1];

    assert.deepStrictEqual(metric(vector1, vector2), 2);

    let length = 4;
    vector1 = Array(4).fill(0);
    vector2 = generate(length);

    let expectedResult =
      vector2.reduce((sum, value) => sum + value ** length, 0) ** (1 / length);

    assert.deepStrictEqual(metric(vector1, vector2), expectedResult);

    length = 5;
    vector1 = generate(length);
    vector2 = generate(length);

    expectedResult =
      vector1.reduce(
        (sum, value, index) => sum + Math.abs(value - vector2[index]) ** length,
        0
      ) **
      (1 / length);

    assert.deepStrictEqual(metric(vector1, vector2), expectedResult);
  });
});
