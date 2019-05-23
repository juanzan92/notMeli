package controllers;

import models.Item;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import services.implementations.ItemServiceImplementation;
import services.interfaces.ItemService;

import java.util.Collection;

@RestController
public class ApiController {
    private ItemService itemService;

    public ApiController(){
        itemService = ItemServiceImplementation.getInstance();
    }


    @RequestMapping("/items")
    public Collection<Item> getItems(@RequestParam(value="name", defaultValue="World") String name) {
        return itemService.getItems();
    }

    /*
    request params example
    public Collection<Item> getItems(@RequestParam(value="name", defaultValue="World") String name) {
        return itemService.getItems();
    }*/
}