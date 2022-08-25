package com.nseit.SpringBootRelations.model;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
@Data

public class Owner {
    @Id
    @GeneratedValue

    private Integer id;
    private String userName;
    private ArrayList<Vehicle> vehicles = new ArrayList<>();
}