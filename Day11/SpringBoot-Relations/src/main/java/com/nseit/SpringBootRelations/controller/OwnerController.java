package com.nseit.SpringBootRelations.controller;

import com.nseit.SpringBootRelations.model.Owner;
import com.nseit.SpringBootRelations.services.OwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping(value = "/owner", method = RequestMethod.GET)
@RestController
public class OwnerController {
    @Autowired
    OwnerService ownerService;

    @PostMapping
    public void addOwner(Owner owner){
        ownerService.addOwner(owner);
    }

    @GetMapping("/all")
    public void viewOwner(){
        ownerService.viewOwner();
    }
}
