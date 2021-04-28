const Employee = require('../lib/Employee');

test('returns name of the employee', () => {
    let employee = new Employee('Dave', 'filler', 'filler@icloud.com');

    expect(employee.getName()).toBe('Dave');
});

test('returns id of the employee', () => {
    let employee = new Employee('Dave', 'filler', 'filler@icloud.com');

    expect(employee.getId()).toBe('filler');
});

test('returns email of the employee', () => {
    let employee = new Employee('Dave', 'filler', 'filler@email.com');

    expect(employee.getEmail()).toBe('filler@email.com');
});

test('returns the role of the employee', () => {
    let employee = new Employee('Dave', 'filler', 'filler@email.com');

    expect(employee.getRole()).toBe('Employee');
});