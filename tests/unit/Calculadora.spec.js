import Calculadora from '@/services/Calculadora.js'

describe('Calculadora', () => {
    it('al sumar 2 más 3 devuelve 5', () => {
        //Arrange
        const firstNumber = 2;
        const secondNumber = 3;
        const expectedResult = 5;

        //Act
        const result = Calculadora.add(firstNumber, secondNumber);

        //Assert
        expect(result).toBe(expectedResult);
    });

    it('al sumar 6 más 8 devuelve 14', () => {
        //Arrange
        const firstNumber = 6;
        const secondNumber = 8;
        const expectedResult = 14;

        //Act
        const result = Calculadora.add(firstNumber, secondNumber);

        //Assert
        expect(result).toBe(expectedResult);
    });

    it('al sumar -5 más 8 devuelve 3', () => {
        //Arrange
        const firstNumber = -5;
        const secondNumber = 8;
        const expectedResult = 3;

        //Act
        const result = Calculadora.add(firstNumber, secondNumber);

        //Assert
        expect(result).toBe(expectedResult);
    });

    it('al sumar 2 más -6 devuelve -4', () => {
        //Arrange
        const firstNumber = 2;
        const secondNumber = -6;
        const expectedResult = -4;

        //Act
        const result = Calculadora.add(firstNumber, secondNumber);

        //Assert
        expect(result).toBe(expectedResult);
    });

    it('Al sumar 0 a cualquier valor devuelve el mismo valor', () => {
        //Arrange
        const firstNumber = Math.floor(Math.random());
        const secondNumber = 0;

        //Act
        const result = Calculadora.add(firstNumber, secondNumber);

        //Assert
        expect(result).toBe(firstNumber);
    });
});
