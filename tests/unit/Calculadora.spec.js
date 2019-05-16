import Calculadora from '@/services/Calculadora.js'

describe('Calculadora', () => {
    describe('Suma', () => {
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

        it('Sumar un número A a otro B da el mismo resultado que sumar B a A', () => {
            //Arrange
            const firstNumber = Math.floor(Math.random());
            const secondNumber = Math.floor(Math.random());

            //Act
            const result1 = Calculadora.add(firstNumber, secondNumber);
            const result2 = Calculadora.add(secondNumber, firstNumber);

            //Assert
            expect(result1).toBe(result2);
        });

        it('Si el primer parámetro es una letra devuelve NaN', () => {
            //Arrange
            const firstNumber = "a";
            const secondNumber = 5;

            //Act
            const result = Calculadora.add(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(NaN);
        });

        it('Si el primer parámetro es un string Numérico devuelve NaN', () => {
            //Arrange
            const firstNumber = "12";
            const secondNumber = 5;

            //Act
            const result = Calculadora.add(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(NaN);
        });

        it('Si el segundo parámetro es una letra devuelve NaN', () => {
            //Arrange
            const firstNumber = 5;
            const secondNumber = "a";

            //Act
            const result = Calculadora.add(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(NaN);
        });

        it('Si el segundo parámetro es un string Numérico devuelve NaN', () => {
            //Arrange
            const firstNumber = 5;
            const secondNumber = "12";

            //Act
            const result = Calculadora.add(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(NaN);
        });

        it('Si el primer parámetro es un decimal devuelve NaN', () => {
            //Arrange
            const firstNumber = 1.1;
            const secondNumber = 5;

            //Act
            const result = Calculadora.add(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(NaN);
        });

        it('Si el segundo parámetro es un decimal devuelve NaN', () => {
            //Arrange
            const firstNumber = 5;
            const secondNumber = 1.1;

            //Act
            const result = Calculadora.add(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(NaN);
        });
    });

    describe('Resta', () => {
        it('al restar 3 menos 2 devuelve 1', () => {
            //Arrange
            const firstNumber = 3;
            const secondNumber = 2;
            const expectedResult = 1;

            //Act
            const result = Calculadora.subtract(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(expectedResult);
        });
    });
});
