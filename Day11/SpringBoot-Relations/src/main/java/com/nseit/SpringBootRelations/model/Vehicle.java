package com.nseit.SpringBootRelations.model;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity

public class Vehicle {
    @Id
    @GeneratedValue
    private Integer vehicleId;
    private String vehicleName;
    private Integer vehicleNumber;
}