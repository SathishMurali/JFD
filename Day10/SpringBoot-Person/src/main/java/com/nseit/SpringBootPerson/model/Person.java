package com.nseit.SpringBootPerson.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class Person {
    private int id;
    private String name;
    private int age;
    private String designation;
    private String dob;
    private long phoneNumber;
    private boolean status;
}