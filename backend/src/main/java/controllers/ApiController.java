package controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ApiController {

    public ApiController(){
    }


    @RequestMapping("/items")
    public String getItems(@RequestParam(value="id") String id) {
        return new ApiCommand(id).execute();
    }


    /*
    request params example
    public Collection<Item> getItems(@RequestParam(value="name", defaultValue="World") String name) {
        return itemService.getItems();
    }*/
}