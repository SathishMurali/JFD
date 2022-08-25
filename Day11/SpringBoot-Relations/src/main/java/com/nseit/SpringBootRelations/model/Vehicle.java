package com.nseit.SpringBootRelations.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class Vehicle {
    @Id
    @GeneratedValue
    private Integer id;
    private String name;
    private Integer number;
}