package com.example;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;

public class CalculatorTest {

    Calculator calculator = new Calculator();
    
    @Test
    void testAdd() {
        Assertions.assertEquals(2, calculator.add(1, 1));
    }

    @Test
    void testDivide() {
        Assertions.assertEquals(1, calculator.divide(1, 1));
    }

    @Test
    void testMultiply() {
        Assertions.assertEquals(1, calculator.multiply(1, 1));
    }

    @Test
    void testSubtract() {
        Assertions.assertEquals(0, calculator.subtract(1, 1));  
    }
    
    @Test
    void testDivideByZero() {
        Assertions.assertThrows(ArithmeticException.class, () -> calculator.divide(1, 0));
    }
}
