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
            const firstNumber = Math.floor(Math.random() * 100) + 1;
            const secondNumber = 0;

            //Act
            const result = Calculadora.add(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(firstNumber);
        });

        it('Sumar un número A a otro B da el mismo resultado que sumar B a A', () => {
            //Arrange
            const firstNumber = Math.floor(Math.random() * 100) + 1;
            const secondNumber = Math.floor(Math.random() * 100) + 1;

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

        it('al restar 8 menos 3 devuelve 5', () => {
            //Arrange
            const firstNumber = 8;
            const secondNumber = 3;
            const expectedResult = 5;

            //Act
            const result = Calculadora.subtract(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(expectedResult);
        });

        it('al restar 1 menos 3 devuelve -2', () => {
            //Arrange
            const firstNumber = 1;
            const secondNumber = 3;
            const expectedResult = -2;

            //Act
            const result = Calculadora.subtract(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(expectedResult);
        });

        it('al restar -1 menos 3 devuelve -4', () => {
            //Arrange
            const firstNumber = -1;
            const secondNumber = 3;
            const expectedResult = -4;

            //Act
            const result = Calculadora.subtract(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(expectedResult);
        });

        it('al restar -1 menos -3 devuelve 2', () => {
            //Arrange
            const firstNumber = -1;
            const secondNumber = -3;
            const expectedResult = 2;

            //Act
            const result = Calculadora.subtract(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(expectedResult);
        });

        it('al restar 1 menos -3 devuelve 4', () => {
            //Arrange
            const firstNumber = 1;
            const secondNumber = -3;
            const expectedResult = 4;

            //Act
            const result = Calculadora.subtract(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(expectedResult);
        });

        it('al restar un número menos 0 devuelve el mismo número', () => {
            //Arrange
            const firstNumber = Math.floor(Math.random() * 100) + 1;
            const secondNumber = 0;

            //Act
            const result = Calculadora.subtract(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(firstNumber);
        });

        it('al restar 0 menos un número devuelve el mismo número cambiado de signo', () => {
            //Arrange
            const firstNumber = 0;
            const secondNumber = Math.floor(Math.random() * 100) + 1;
            const expectedResult = -1 * secondNumber;

            //Act
            const result = Calculadora.subtract(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(expectedResult);
        });

        it('Si el primer parámetro es una letra devuelve NaN', () => {
            //Arrange
            const firstNumber = "a";
            const secondNumber = 5;

            //Act
            const result = Calculadora.subtract(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(NaN);
        });

        it('Si el primer parámetro es un string Numérico devuelve NaN', () => {
            //Arrange
            const firstNumber = "12";
            const secondNumber = 5;

            //Act
            const result = Calculadora.subtract(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(NaN);
        });

        it('Si el segundo parámetro es una letra devuelve NaN', () => {
            //Arrange
            const firstNumber = 5;
            const secondNumber = "a";

            //Act
            const result = Calculadora.subtract(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(NaN);
        });

        it('Si el segundo parámetro es un string Numérico devuelve NaN', () => {
            //Arrange
            const firstNumber = 5;
            const secondNumber = "12";

            //Act
            const result = Calculadora.subtract(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(NaN);
        });

        it('Si el primer parámetro es un decimal devuelve NaN', () => {
            //Arrange
            const firstNumber = 1.1;
            const secondNumber = 5;

            //Act
            const result = Calculadora.subtract(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(NaN);
        });

        it('Si el segundo parámetro es un decimal devuelve NaN', () => {
            //Arrange
            const firstNumber = 5;
            const secondNumber = 1.1;

            //Act
            const result = Calculadora.subtract(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(NaN);
        });
    });

    describe('Multiplicación', () => {
        it('al multiplicar 2 por 3 devuelve 6', () => {
            //Arrange
            const firstNumber = 2;
            const secondNumber = 3;
            const expectedResult = 6;

            //Act
            const result = Calculadora.multiply(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(expectedResult);
        });

        it('al multiplicar 3 por 3 devuelve 9', () => {
            //Arrange
            const firstNumber = 3;
            const secondNumber = 3;
            const expectedResult = 9;

            //Act
            const result = Calculadora.multiply(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(expectedResult);
        });

        it('al multiplicar 2 por -5 devuelve -10', () => {
            //Arrange
            const firstNumber = 2;
            const secondNumber = -5;
            const expectedResult = -10;

            //Act
            const result = Calculadora.multiply(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(expectedResult);
        });

        it('al multiplicar -3 por -5 devuelve 15', () => {
            //Arrange
            const firstNumber = -3;
            const secondNumber = -5;
            const expectedResult = 15;

            //Act
            const result = Calculadora.multiply(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(expectedResult);
        });

        it('al multiplicar -3 por 4 devuelve -12', () => {
            //Arrange
            const firstNumber = -3;
            const secondNumber = 4;
            const expectedResult = -12;

            //Act
            const result = Calculadora.multiply(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(expectedResult);
        });

        it('al multiplicar cualquier número por 0 da 0', () => {
            //Arrange
            const firstNumber = Math.floor(Math.random() * 100) + 1;
            const secondNumber = 0;
            const expectedResult = 0;

            //Act
            const result = Calculadora.multiply(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(expectedResult);
        });

        it('al multiplicar un número A por otro B da el mismo resultado que multiplicar B por A', () => {
            //Arrange
            const firstNumber = Math.floor(Math.random() * 100) + 1;
            const secondNumber = Math.floor(Math.random() * 100) + 1;

            //Act
            const result1 = Calculadora.multiply(firstNumber, secondNumber);
            const result2 = Calculadora.multiply(secondNumber, firstNumber);

            //Assert
            expect(result1).toBe(result2);
        });

        it('Si el primer parámetro es una letra devuelve NaN', () => {
            //Arrange
            const firstNumber = "a";
            const secondNumber = 5;

            //Act
            const result = Calculadora.multiply(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(NaN);
        });

        it('Si el primer parámetro es un string Numérico devuelve NaN', () => {
            //Arrange
            const firstNumber = "12";
            const secondNumber = 5;

            //Act
            const result = Calculadora.multiply(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(NaN);
        });

        it('Si el segundo parámetro es una letra devuelve NaN', () => {
            //Arrange
            const firstNumber = 5;
            const secondNumber = "a";

            //Act
            const result = Calculadora.multiply(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(NaN);
        });

        it('Si el segundo parámetro es un string Numérico devuelve NaN', () => {
            //Arrange
            const firstNumber = 5;
            const secondNumber = "12";

            //Act
            const result = Calculadora.multiply(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(NaN);
        });

        it('Si el primer parámetro es un decimal devuelve NaN', () => {
            //Arrange
            const firstNumber = 1.1;
            const secondNumber = 5;

            //Act
            const result = Calculadora.multiply(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(NaN);
        });

        it('Si el segundo parámetro es un decimal devuelve NaN', () => {
            //Arrange
            const firstNumber = 5;
            const secondNumber = 1.1;

            //Act
            const result = Calculadora.multiply(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(NaN);
        });
    });

    describe('División', () => {
        it('al dividir 6 entre 2 devuelve 3', () => {
            //Arrange
            const firstNumber = 6;
            const secondNumber = 2;
            const expectedResult = 3;

            //Act
            const result = Calculadora.divide(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(expectedResult);
        });

        it('al dividir 12 entre 3 devuelve 4', () => {
            //Arrange
            const firstNumber = 12;
            const secondNumber = 3;
            const expectedResult = 4;

            //Act
            const result = Calculadora.divide(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(expectedResult);
        });

        it('al dividir 12 entre -3 devuelve -4', () => {
            //Arrange
            const firstNumber = 12;
            const secondNumber = -3;
            const expectedResult = -4;

            //Act
            const result = Calculadora.divide(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(expectedResult);
        });

        it('al dividir -20 entre -10 devuelve 2', () => {
            //Arrange
            const firstNumber = -20;
            const secondNumber = -10;
            const expectedResult = 2;

            //Act
            const result = Calculadora.divide(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(expectedResult);
        });

        it('al dividir -20 entre 5 devuelve -4', () => {
            //Arrange
            const firstNumber = -20;
            const secondNumber = 5;
            const expectedResult = -4;

            //Act
            const result = Calculadora.divide(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(expectedResult);
        });

        it('al dividir 5 entre 2 da 2', () => {
            //Arrange
            const firstNumber = 5;
            const secondNumber = 2;
            const expectedResult = 2;

            //Act
            const result = Calculadora.divide(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(expectedResult);
        });

        it('al dividir 0 entre cualquier número da 0', () => {
            //Arrange
            const firstNumber = 0;
            const secondNumber = Math.floor(Math.random() * 100) + 1;
            const expectedResult = 0;

            //Act
            const result = Calculadora.divide(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(expectedResult);
        });

        it('al dividir cualquier número entre 0 da NaN', () => {
            //Arrange
            const firstNumber = Math.floor(Math.random() * 100) + 1;
            const secondNumber = 0;
            const expectedResult = NaN;

            //Act
            const result = Calculadora.divide(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(expectedResult);
        });

        it('Si el primer parámetro es una letra devuelve NaN', () => {
            //Arrange
            const firstNumber = "a";
            const secondNumber = 5;

            //Act
            const result = Calculadora.divide(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(NaN);
        });

        it('Si el primer parámetro es un string Numérico devuelve NaN', () => {
            //Arrange
            const firstNumber = "12";
            const secondNumber = 5;

            //Act
            const result = Calculadora.divide(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(NaN);
        });

        it('Si el segundo parámetro es una letra devuelve NaN', () => {
            //Arrange
            const firstNumber = 5;
            const secondNumber = "a";

            //Act
            const result = Calculadora.divide(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(NaN);
        });

        it('Si el segundo parámetro es un string Numérico devuelve NaN', () => {
            //Arrange
            const firstNumber = 5;
            const secondNumber = "12";

            //Act
            const result = Calculadora.divide(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(NaN);
        });

        it('Si el primer parámetro es un decimal devuelve NaN', () => {
            //Arrange
            const firstNumber = 1.1;
            const secondNumber = 5;

            //Act
            const result = Calculadora.divide(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(NaN);
        });

        it('Si el segundo parámetro es un decimal devuelve NaN', () => {
            //Arrange
            const firstNumber = 5;
            const secondNumber = 1.1;

            //Act
            const result = Calculadora.divide(firstNumber, secondNumber);

            //Assert
            expect(result).toBe(NaN);
        });
    });

    describe('Raíz Cuadrada', () => {
        it('al hacer la raíz cuadrada de 4 da 2', () => {
            //Arrange
            const number = 4;
            const expectedResult = 2;

            //Act
            const result = Calculadora.sqrt(number);

            //Assert
            expect(result).toBe(expectedResult);
        });

        it('al hacer la raíz cuadrada de 25 da 5', () => {
            //Arrange
            const number = 25;
            const expectedResult = 5;

            //Act
            const result = Calculadora.sqrt(number);

            //Assert
            expect(result).toBe(expectedResult);
        });

        it('al hacer la raíz cuadrada de 10 se obtiene un resultado con precisión mayor a 0,00001', () => {
            //Arrange
            const number = 10;
            const realResult = Math.sqrt(number);
            const precision = 0.00001;

            //Act
            const result = Calculadora.sqrt(number);

            //Assert
            expect(Math.abs(result-realResult)).toBeLessThan(precision);
        });

        it('al hacer la raíz cuadrada de 20 se obtiene un resultado con precisión mayor a 0,00001', () => {
            //Arrange
            const number = 20;
            const realResult = Math.sqrt(number);
            const precision = 0.00001;

            //Act
            const result = Calculadora.sqrt(number);

            //Assert
            expect(Math.abs(result-realResult)).toBeLessThan(precision);
        });

        it('al hacer la raíz cuadrada de 0 se obtiene 0', () => {
            //Arrange
            const number = 0;
            const expectedResult = 0;

            //Act
            const result = Calculadora.sqrt(number);

            //Assert
            expect(result).toBe(expectedResult);
        });

        it('al intentar hacer la raíz cuadrada de una letra se obtiene NaN', () => {
            //Arrange
            const number = 'a';

            //Act
            const result = Calculadora.sqrt(number);

            //Assert
            expect(result).toBe(NaN);
        });

        it('al intentar hacer la raíz cuadrada de un string numérico se obtiene NaN', () => {
            //Arrange
            const number = '12';

            //Act
            const result = Calculadora.sqrt(number);

            //Assert
            expect(result).toBe(NaN);
        });

        it('al intentar hacer la raíz cuadrada de un decimal se obtiene NaN', () => {
            //Arrange
            const number = 5.5;

            //Act
            const result = Calculadora.sqrt(number);

            //Assert
            expect(result).toBe(NaN);
        });

        it('al intentar hacer la raíz cuadrada de un negativo se obtiene NaN', () => {
            //Arrange
            const number = -5;

            //Act
            const result = Calculadora.sqrt(number);

            //Assert
            expect(result).toBe(NaN);
        });
    });
});
