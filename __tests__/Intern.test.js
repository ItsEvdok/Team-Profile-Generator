const Intern = require('../lib/Intern');

test('returns name of the intern', () => {
    let intern = new Intern('Brit', 'filler', 'filler@icloud.com', 'UCF');

    expect(intern.getName()).toBe('Brit');
});

test('returns id of the intern', () => {
    let intern = new Intern('Brit', 'filler', 'filler@icloud.com', 'UCF');

    expect(intern.getId()).toBe('filler');
});

test('returns email of the intern', () => {
    let intern = new Intern('Brit', 'filler', 'filler@email.com', 'UCF');

    expect(intern.getEmail()).toBe('filler@email.com');
});

test('returns school of the intern', () => {
    let intern = new Intern('Brit', 'filler', 'filler@email.com', 'UCF');

    expect(intern.getSchool()).toBe('UCF');
});

test('returns the role of the intern', () => {
    let intern = new Intern('Brit', 'filler', 'filler@email.com', 'UCF');

    expect(intern.getRole()).toBe('Intern');
});