import java.io.File;
import java.io.IOException;
import java.util.Scanner;
import java.time.*;

public class Interface {
    static String path;

    void ui() throws InterruptedException, IOException {
        Scanner sc = new Scanner(System.in);
        System.out.println("\t\t\t\t\t\t\tWelcome to Examination Center!\n\t\t\t\t\t============================================");
        Thread.sleep(2000);
        System.out.print("\nEnter your Name: ");
        String name = sc.nextLine();
        System.out.print("\nEnter your Roll No/Emp Code: ");
        int roll = sc.nextInt();

        File link = new File("D:\\JAVA FSD\\Day03\\Project-Exam\\src\\results\\" + name + "(" + roll + ")" + LocalDate.now() + ".txt");
        link.createNewFile();
        path = link.toString();

        Thread.sleep(3000);
        System.out.println("\nYou have successfully entered into an EXAM INTERFACE!\n=========================================");
        Thread.sleep(2000);
        System.out.println("Instructions!\n=========================================");
        Thread.sleep(2000);
        System.out.println("There will be MCQ Questions asked one by one.\nYou need to choose an option and press ENTER.\nYou can't undo or go to previous question.");
        Thread.sleep(5000);
        System.out.println("\n=====================================================\nPress ENTER to Continue......");
        System.in.read();

        Question.main();
    }
}