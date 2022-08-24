package com.nseit.SpringBootPerson.services;

import com.nseit.SpringBootPerson.model.Person;
import com.nseit.SpringBootPerson.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
@Service
public class MainMenu {

    @Autowired
    private PersonRepository personRepository;

    public void add(Person person) {
        ArrayList<Person> personArrayList = personRepository.getPerson();
        personArrayList.add(person);
    }

    public void view() {
        for (Person person1 : personRepository.getPerson()) {
            System.out.println(person1.getId() + " " + person1.getName() + " " + person1.getAge() + " " + person1.getDob() + " " + person1.getDesignation() + " " + person1.getPhoneNumber());
        }
    }

    public void update(int id) {
        for (Person person1: personRepository.getPerson()){
            if (person1.getId() == id){
                person1.setStatus(true);
            }
        }
    }

    public void delete(int id){
        ArrayList<Person> personArrayList = personRepository.getPerson();
        for(Person person1:personArrayList){
            if(person1.getId() == id){
                personArrayList.remove(id - 1);
            }
        }
    }
}
