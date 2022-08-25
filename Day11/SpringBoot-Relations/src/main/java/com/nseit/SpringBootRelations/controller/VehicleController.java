package com.nseit.SpringBootRelations.controller;


import com.nseit.SpringBootRelations.model.Vehicle;
import com.nseit.SpringBootRelations.services.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping(value = "/vehicle", method = RequestMethod.GET)
@RestController
public class VehicleController {
    @Autowired
    private VehicleService vehicleService;

    @PostMapping
    public void addVehicle(Vehicle vehicle) {
        vehicleService.addVehicle(vehicle);
    }

    @GetMapping("/all")
    public void viewVehicle() {
        vehicleService.viewVehicle();
    }

    @PutMapping
    public void updateVehicle(Vehicle vehicle) {
        vehicleService.updateVehicle(vehicle);
    }

    @DeleteMapping("/{id}")
    public void deleteVehicle(@PathVariable int id) {
        vehicleService.deleteVehicle(id);
    }

}
