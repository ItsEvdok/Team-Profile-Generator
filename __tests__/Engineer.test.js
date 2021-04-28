const Engineer = require('../lib/Engineer');

test('returns name of the engineer', () => {
    let engineer = new Engineer('Mark', 'filler', 'filler@icloud.com', 'MarkyBoi');

    expect(engineer.getName()).toBe('Mark');
});

test('returns id of the engineer', () => {
    let engineer = new Engineer('Mark', 'filler', 'filler@icloud.com', 'MarkyBoi');

    expect(engineer.getId()).toBe('filler');
});

test('returns email of the engineer', () => {
    let engineer = new Engineer('Mark', 'filler', 'filler@email.com', 'MarkyBoi');

    expect(engineer.getEmail()).toBe('filler@email.com');
});

test('returns GitHub of the engineer', () => {
    let engineer = new Engineer('Mark', 'filler', 'filler@email.com', 'MarkyBoi');

    expect(engineer.getGithub()).toBe('MarkyBoi');
});

test('returns the role of the engineer', () => {
    let engineer = new Engineer('Mark', 'filler', 'filler@email.com', 'MarkyBoi');

    expect(engineer.getRole()).toBe('Engineer');
});