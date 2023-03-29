import MathCharacter from '../js/characters';

test('attack strength without dope', () => {
  const daemon = new MathCharacter('Daemon', 100, false, 3);
  expect(daemon.attack).toBe(80);
});

test('attack strength with dope', () => {
  const magician = new MathCharacter('Magician', 100, true, 2);
  magician.stoned = true;
  expect(magician.attack).toBe(85);
});

test('get attack if attack < 0', () => {
  const magician = new MathCharacter('Magician', -20, false, 2);
  expect(magician.attack).toBe(0);
});

test('get attack if attack > 100', () => {
  const daemon = new MathCharacter('Daemon', 120, true, 3);
  expect(daemon.attack).toBe(92);
});

