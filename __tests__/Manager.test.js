const Manager = require('../lib/Manager');

test('returns name of the manager', () => {
    let manager = new Manager('Steve', 'filler', 'filler@icloud.com', '1');

    expect(manager.getName()).toBe('Steve');
});

test('returns id of the manager', () => {
    let manager = new Manager('Dave', 'filler', 'filler@icloud.com', '1');

    expect(manager.getId()).toBe('filler');
});

test('returns email of the manager', () => {
    let manager = new Manager('Dave', 'filler', 'filler@email.com', '1');

    expect(manager.getEmail()).toBe('filler@email.com');
});

test('returns officeNumber of the manager', () => {
    let manager = new Manager('Dave', 'filler', 'filler@email.com', '1');

    expect(manager.getOfficeNumber()).toBe('1');
});

test('returns the role of the manager', () => {
    let manager = new Manager('Dave', 'filler', 'filler@email.com', '1');

    expect(manager.getRole()).toBe('Manager');
});