package com.nseit.SpringBootRelations.services;

import com.nseit.SpringBootRelations.model.Vehicle;
import com.nseit.SpringBootRelations.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleService {
    @Autowired
    private VehicleRepository vehicleRepository;

    public void addVehicle(Vehicle vehicle){
        vehicleRepository.save(vehicle);
    }

    public List<Vehicle> viewVehicle(){
        return vehicleRepository.findAll();
    }

    public void updateVehicle(Vehicle vehicle){
        vehicleRepository.save(vehicle);
    }

    public void deleteVehicle(int id){
        for (Vehicle vehicle: vehicleRepository.findAll()){
            if (id == vehicle.getVehicleId()){
                vehicleRepository.delete(vehicle);
            }
        }
    }
}
