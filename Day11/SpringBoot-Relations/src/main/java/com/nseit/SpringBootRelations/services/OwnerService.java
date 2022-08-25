package com.nseit.SpringBootRelations.services;

import com.nseit.SpringBootRelations.model.Owner;
import com.nseit.SpringBootRelations.repository.OwnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OwnerService {

    @Autowired
    private OwnerRepository ownerRepository;
    public void addOwner(Owner owner) {
        ownerRepository.save(owner);
    }

    public List<Owner> viewOwner() {
        return ownerRepository.findAll();
    }
}