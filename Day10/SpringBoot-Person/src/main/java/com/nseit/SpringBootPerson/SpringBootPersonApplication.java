package com.nseit.SpringBootPerson;

import com.nseit.SpringBootPerson.model.Person;
import com.nseit.SpringBootPerson.services.MainMenu;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.lang.reflect.Array;
import java.util.ArrayList;

@SpringBootApplication
public class SpringBootPersonApplication implements CommandLineRunner {
	@Autowired
	private MainMenu mainMenu;

	public static void main(String[] args) {
		SpringApplication.run(SpringBootPersonApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Person personOne = new Person(1, "Aravind", 42, "Intern", "13/08/2001", 1234567890, false);
		Person personTwo = new Person(2, "Koperuncholan", 80, "Associate Systems Analyst", "15/10/2002", 987654321, false);
		Person personThree = new Person(3, "Sathish", 42, "MD & CEO", "07/11/2000", 852589882, false);
		mainMenu.add(personOne);

		mainMenu.view();

		mainMenu.add(personTwo);

		mainMenu.view();

		mainMenu.delete(1);

		mainMenu.view();

		mainMenu.add(personThree);

		mainMenu.update(2);

		mainMenu.view();

	}
}
