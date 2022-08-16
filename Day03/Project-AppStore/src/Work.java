import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Scanner;
import java.io.*;
import java.time.*;

public class Work {
    Scanner sc = new Scanner(System.in);
    Calculator calc = new Calculator();
    FileWriter det = new FileWriter("D:\\JAVA FSD\\Day03\\Project-AppStore\\src\\files\\userdetails.txt", true);
    FileWriter user = new FileWriter("D:\\JAVA FSD\\Day03\\Project-AppStore\\src\\files\\userdetails.txt", true);

    public Work() throws IOException {
    }

    void display() throws InterruptedException, IOException {
        System.out.println("\t\t\t\t\t\t\t\t\tWelcome to APP Store!!");
        System.out.println("==============================================================================================");
        System.out.print("\t\t\t\t\tPlease Enter your name: ");
        String name = sc.nextLine();
        det.write("\n\nUsername: " + name + "(" + LocalDate.now() + "\t" + LocalTime.now() + ")");
        calc.setPick(name);
        System.out.println("==============================================================================================");
        Thread.sleep(1000);
        System.out.println("\t\t\t\t\tOfficially Welcoming you to APP Store Mr/Ms. " + calc.getPick());
        System.out.println("==============================================================================================");
        Thread.sleep(2000);
        det.close();
    }

    void options(String choice) throws InterruptedException, IOException {
        Scanner sc = new Scanner(System.in);
        Work w = new Work();
        switch (choice) {
            case "1":
                System.out.println("\t\t\t\t\t\t\tWhatsapp\n\t\t\t\t\t\t=================");
                for (int n = 0; n <= 1; n++) {
                    System.out.println(Files.readAllLines(Paths.get("D:\\JAVA FSD\\Day03\\Project-AppStore\\src\\files\\appdetails.txt")).get(n));
                }
                System.out.println("Are you sure want to Download Whatsapp? Mr/Ms. " + calc.getPick());
                System.out.println("1. Yes\t\t\t2. No");
                int sChoice = sc.nextInt();
                if (sChoice == 1) {
                    user.write("\n1. WhatsApp");
                    System.out.println("Downloading....");
                    Thread.sleep(3000);
                    System.out.println("Successfully Downloaded!");
                    Thread.sleep(3000);
                    w.finale();
                } else {
                    System.out.println("Download Cancelled!");
                    Thread.sleep(6000);
                    w.finale();
                }
                break;
            case "2":
                System.out.println("\t\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t=================");
                for (int n = 3; n <= 4; n++) {
                    System.out.println(Files.readAllLines(Paths.get("D:\\JAVA FSD\\Day03\\Project-AppStore\\src\\files\\appdetails.txt")).get(n));
                }
                System.out.println("Are you sure want to Download Instagram? Mr/Ms. " + calc.getPick());
                System.out.println("1. Yes\t\t\t2. No");
                sChoice = sc.nextInt();
                if (sChoice == 1) {
                    user.write("\n2. Instagram");
                    System.out.println("Downloading....");
                    Thread.sleep(3000);
                    System.out.println("Successfully Downloaded!");
                    Thread.sleep(3000);
                    w.finale();
                } else {
                    System.out.println("Download Cancelled!");
                    Thread.sleep(6000);
                    w.finale();
                }
                break;
            case "3":
                System.out.println("\t\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t=================");
                for (int n = 6; n <= 7; n++) {
                    System.out.println(Files.readAllLines(Paths.get("D:\\JAVA FSD\\Day03\\Project-AppStore\\src\\files\\appdetails.txt")).get(n));
                }
                System.out.println("Are you sure want to Download Facebook? Mr/Ms. " + calc.getPick());
                System.out.println("1. Yes\t\t\t2. No");
                sChoice = sc.nextInt();
                if (sChoice == 1) {
                    user.write("\n3. Facebook");
                    System.out.println("Downloading....");
                    Thread.sleep(3000);
                    System.out.println("Successfully Downloaded!");
                    Thread.sleep(3000);
                    w.finale();
                } else {
                    System.out.println("Download Cancelled!");
                    Thread.sleep(6000);
                    w.finale();
                }
                break;
            case "4":
                System.out.println("\t\t\t\t\t\t\tSnapchat\n\t\t\t\t\t\t=================");
                for (int n = 9; n <= 10; n++) {
                    System.out.println(Files.readAllLines(Paths.get("D:\\JAVA FSD\\Day03\\Project-AppStore\\src\\files\\appdetails.txt")).get(n));
                }
                System.out.println("Are you sure want to Download Snapchat? Mr/Ms. " + calc.getPick());
                System.out.println("1. Yes\t\t\t2. No");
                sChoice = sc.nextInt();
                if (sChoice == 1) {
                    user.write("\n4. Snapchat");
                    System.out.println("Downloading....");
                    Thread.sleep(3000);
                    System.out.println("Successfully Downloaded!");
                    Thread.sleep(3000);
                    w.finale();
                } else {
                    System.out.println("Download Cancelled!");
                    Thread.sleep(6000);
                    w.finale();
                }
                break;
            case "5":
                System.out.println("\t\t\t\t\t\t\tLinkedin\n\t\t\t\t\t\t=================");
                for (int n = 12; n <= 13; n++) {
                    System.out.println(Files.readAllLines(Paths.get("D:\\JAVA FSD\\Day03\\Project-AppStore\\src\\files\\appdetails.txt")).get(n));
                }
                System.out.println("Are you sure want to Download Linkedin? Mr/Ms. " + calc.getPick());
                System.out.println("1. Yes\t\t\t2. No");
                sChoice = sc.nextInt();
                if (sChoice == 1) {
                    user.write("\n5. Linkedin");
                    System.out.println("Downloading....");
                    Thread.sleep(3000);
                    System.out.println("Successfully Downloaded!");
                    Thread.sleep(3000);
                    w.finale();
                } else {
                    System.out.println("Download Cancelled!");
                    Thread.sleep(6000);
                    w.finale();
                }
                break;
            case "6":
                System.out.println("\t\t\t\t\t\t\tYouTube\n\t\t\t\t\t\t=================");
                for (int n = 15; n <= 16; n++) {
                    System.out.println(Files.readAllLines(Paths.get("D:\\JAVA FSD\\Day03\\Project-AppStore\\src\\files\\appdetails.txt")).get(n));
                }
                System.out.println("Are you sure want to Download YouTube? Mr/Ms. " + calc.getPick());
                System.out.println("1. Yes\t\t\t2. No");
                sChoice = sc.nextInt();
                if (sChoice == 1) {
                    user.write("\n6. YouTube");
                    System.out.println("Downloading....");
                    Thread.sleep(3000);
                    System.out.println("Successfully Downloaded!");
                    Thread.sleep(3000);
                    w.finale();
                } else {
                    System.out.println("Download Cancelled!");
                    Thread.sleep(6000);
                    w.finale();
                }
                break;
            case "7":
                System.out.println("\t\t\t\t\t\t\tDarwin Box\n\t\t\t\t\t\t=================");
                for (int n = 18; n <= 19; n++) {
                    System.out.println(Files.readAllLines(Paths.get("D:\\JAVA FSD\\Day03\\Project-AppStore\\src\\files\\appdetails.txt")).get(n));
                }
                System.out.println("Are you sure want to Download Darwin Box? Mr/Ms. " + calc.getPick());
                System.out.println("1. Yes\t\t\t2. No");
                sChoice = sc.nextInt();
                if (sChoice == 1) {
                    user.write("\n7. DarwinBox");
                    System.out.println("Downloading....");
                    Thread.sleep(3000);
                    System.out.println("Successfully Downloaded!");
                    Thread.sleep(3000);
                    w.finale();
                } else {
                    System.out.println("Download Cancelled!");
                    Thread.sleep(6000);
                    w.finale();
                }
                break;
            case "q":
                System.out.println("Thank you for using APP Store!");
                break;

        }
        user.close();
    }

    void finale() throws InterruptedException, IOException {
        System.out.println("\t\t\t\t\tHere are the most popular Apps!\n======================================================");
        File fl = new File("D:\\JAVA FSD\\Day03\\Project-AppStore\\src\\files\\apps.txt");
        BufferedReader br = new BufferedReader(new FileReader(fl));
        String st;
        while ((st = br.readLine()) != null) {
            System.out.println(st);
        }
        System.out.println("==============================================================================================");
        System.out.println("Please Select any number and Press ENTER to Continue or q to Exit");
        String choice = sc.nextLine();

        options(choice);
    }
}