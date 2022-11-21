// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//isPhoneNumber unit tests
  test('checks number 8586666666', () => {
    expect(functions.isPhoneNumber('(858) 666-6666')).toBe(true);
  });
  test('checks number 6196666666', () => {
    expect(functions.isPhoneNumber('(619) 666-6666')).toBe(true);
  });
  test('checks number 666', () => {
    expect(functions.isPhoneNumber('666')).toBe(false);
  });
  test('checks number 420', () => {
    expect(functions.isPhoneNumber('420')).toBe(false);
  });

//isEmail unit tests
  test('checks email drake@gmail.com', () => {
    expect(functions.isEmail('drake@gmail.com')).toBe(true);
  });
  test('checks email josh@gmail.com', () => {
    expect(functions.isEmail('josh@gmail.com')).toBe(true);
  });
  test('checks email drake', () => {
    expect(functions.isEmail('drake')).toBe(false);
  });
  test('checks email josh', () => {
    expect(functions.isEmail('josh')).toBe(false);
  });

//isStrongPassword unit tests
  test('checks password Ilovecse110', () => {
    expect(functions.isStrongPassword('Ilovecse110')).toBe(true);
  });
  test('checks password Ihatecse101', () => {
    expect(functions.isStrongPassword('Ihatecse101')).toBe(true);
  });
  test('checks password _caffeinated', () => {
    expect(functions.isStrongPassword('_caffeinated')).toBe(false);
  });
  test('checks password yep', () => {
    expect(functions.isStrongPassword('yep')).toBe(false);
  });

//isDate unit tests
  test('checks date 5/4/2000', () => {
    expect(functions.isDate('5/4/2000')).toBe(true);
  });
  test('checks date 12/25/2014', () => {
    expect(functions.isDate('12/25/2014')).toBe(true);
  });
  test('checks date 12/25/20000', () => {
    expect(functions.isDate('12/25/20000')).toBe(false);
  });
  test('checks date 1/101/1996', () => {
    expect(functions.isDate('1/101/1996')).toBe(false);
  });

//isHexColor unit tests
  test('checks hex value 03de44', () => {
    expect(functions.isHexColor('03de44')).toBe(true);
  });
  test('checks hex value 5000de', () => {
    expect(functions.isHexColor('5000de')).toBe(true);
  });
  test('checks hex value no', () => {
    expect(functions.isHexColor('no')).toBe(false);
  });
  test('checks hex value 12', () => {
    expect(functions.isHexColor('12')).toBe(false);
  });
