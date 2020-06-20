import {
  validationLogin, validationPassLength,
} from '../src/lib/validation.js';

describe('validationLogin', () => {
  it('debería ser una función', () => {
    expect(typeof validationLogin).toBe('function');
  });
  it('debería retornar false por campo vacio', () => {
    expect(validationLogin('arturo@gmail.com', '')).toBe(false);
  });
  it('debería retornar true por campo lleno', () => {
    expect(validationLogin('arturo@gmail.com', '123456')).toBe(true);
  });
});

describe('validationPassLength', () => {
  it('debería ser una función', () => {
    expect(typeof validationPassLength).toBe('function');
  });
  it('Deberia retornar false para contraseña menor a 6 caracteres', () => {
    expect(validationPassLength('12345')).toBe(false);
  });
  it('Deberia retornar true para contraseña de 6 o mas caracteres', () => {
    expect(validationPassLength('12345A')).toBe(true);
  });
});
