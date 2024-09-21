import correctSentence from './correctSentence';

test('Возвращает false для неправильного типа данных', () => {
  expect(correctSentence(123)).toBe(false);
  expect(correctSentence(10n)).toBe(false);
  expect(correctSentence(true)).toBe(false);
  expect(correctSentence(null)).toBe(false);
  expect(correctSentence(undefined)).toBe(false);
  expect(correctSentence(Symbol('id'))).toBe(false);
  expect(correctSentence('string' / 5)).toBe(false);
  expect(correctSentence({bytes: 1024})).toBe(false);
  expect(correctSentence(function () {})).toBe(false);
  expect(correctSentence([1024])).toBe(false);
});

test('Возвращает false для неправильного класса данных', () => {
  expect(correctSentence('')).toBe(false);
  expect(correctSentence('        ')).toBe(false);
});

test('Возвращает корректное значение для непустых строк', () => {
  expect(correctSentence('а')).toBe('А.');
  expect(correctSentence('   а    ')).toBe('А.');
  expect(correctSentence('аааа')).toBe('Аааа.');
  expect(correctSentence('Аааа')).toBe('Аааа.');
  expect(correctSentence('аааа.')).toBe('Аааа.');
  expect(correctSentence('Аааа.')).toBe('Аааа.');
  expect(correctSentence('greetings, friends')).toBe('Greetings, friends.');
  expect(correctSentence('Greetings, friends')).toBe('Greetings, friends.');
  expect(correctSentence('Greetings, friends.')).toBe('Greetings, friends.');
});
