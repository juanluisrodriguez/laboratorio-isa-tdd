import Calculadora from '@/services/Calculadora.js'

describe('Calculadora', () => {
  it('al sumar 2 más 3 devuelve 5', () => {
    //Arrange
    const firstNumber = 2;
    const secondNumber = 3;
    const expectedResult = 5;

    //Act
    const result = Calculadora.add(firstNumber,secondNumber);

    //Assert
    expect(result).toBe(expectedResult);
  })
});
