//class App {
//    public static void main(String[] args) {
//        Calculator obj = new Calculator();
//
//        System.out.println(obj.add(10, 20));
//        System.out.println(obj.sub());
//        obj.mul(10, 20);
//        obj.div();
//    }
//}

import java.util.Scanner;

class App {


    public static void main(String[] args) {
        System.out.println("Arithmetic Operations");
        System.out.println("1. Addition\n2. Subtraction\n3. Multiplication\n4. Division");
        System.out.println("Choose any option(number) and press ENTER");

        Scanner sc = new Scanner(System.in);
        int choose = sc.nextInt();

        Calculator calc = new Calculator();
        calc.setA(20);
        calc.setB(10);
        calc.options(choose);
    }
}