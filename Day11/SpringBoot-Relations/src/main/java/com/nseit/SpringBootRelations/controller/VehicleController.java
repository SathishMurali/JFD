package com.nseit.SpringBootRelations.controller;


import com.nseit.SpringBootRelations.model.Vehicle;
import com.nseit.SpringBootRelations.services.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/vehicle")
public class VehicleController {
    @Autowired
    private VehicleService vehicleService;

    @PostMapping
    public void add(@RequestBody Vehicle vehicle) {
        vehicleService.addVehicle(vehicle);
    }

    @GetMapping("/all")
    public void view() {
        vehicleService.viewVehicle();
    }

    @PutMapping
    public void update(@RequestBody Vehicle vehicle) {
        vehicleService.updateVehicle(vehicle);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        vehicleService.deleteVehicle(id);
    }

}
