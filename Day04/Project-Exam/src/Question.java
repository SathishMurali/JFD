import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.LocalTime;
import java.util.Scanner;

public class Question {
    public static void main() throws IOException {

        FileWriter an = new FileWriter(Interface.path, true);
        Scanner sc = new Scanner(System.in);
        long ques = Files.lines(Paths.get("D:\\JAVA FSD\\Day03\\Project-Exam\\src\\qa\\questions.txt")).count();
        an.write("Exam Starting Time: " + LocalTime.now());
        an.write("\nYour Answers:\t\tCorrect Answers:\n");
        long cout = Files.lines(Paths.get("D:\\JAVA FSD\\Day03\\Project-Exam\\src\\qa\\answers.txt")).count();
        int total = 0;
        for (int n = 0, y = 0; n <= ques && y <= cout - 1; n += 2, y++) {
            System.out.println(Files.readAllLines(Paths.get("D:\\JAVA FSD\\Day03\\Project-Exam\\src\\qa\\questions.txt")).get(n));
            n = n + 1;
            System.out.println(Files.readAllLines(Paths.get("D:\\JAVA FSD\\Day03\\Project-Exam\\src\\qa\\questions.txt")).get(n));
            String ans = sc.nextLine();
            String st = Files.readAllLines(Paths.get("D:\\JAVA FSD\\Day03\\Project-Exam\\src\\qa\\answers.txt")).get(y);
            an.write("\t" + ans + "\t\t\t\t\t\t" + st + "\n");
            if (ans.equals(st)) {
                total = total + 1;
            }
        }
        an.write("Total Score: " + total + "/" + cout);
        System.out.println("========================================\nThank you for taking the Exam!\nYour answers are stored!\nYour Total Score is:" + total + "/" + cout + "\n========================================");
        an.close();
    }
}