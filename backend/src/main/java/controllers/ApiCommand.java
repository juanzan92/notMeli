package controllers;

import com.netflix.hystrix.HystrixCommand;
import com.netflix.hystrix.HystrixCommandGroupKey;
import com.netflix.hystrix.HystrixCommandProperties;
import services.implementations.ItemServiceImplementation;
import services.interfaces.ItemService;


public class ApiCommand extends HystrixCommand<String> {
    private String id;
    private ItemService itemService;

    public ApiCommand(String id) {
        super(HystrixCommandGroupKey.Factory.asKey("ExampleGroup"));
        HystrixCommandProperties.Setter().withCircuitBreakerRequestVolumeThreshold(3);
        HystrixCommandProperties.Setter().withExecutionTimeoutInMilliseconds(2000);
        this.id = id;
        itemService = ItemServiceImplementation.getInstance();
    }

    @Override
    protected String getFallback() {
        return "Hello Failure !";
    }

    @Override
    protected String run() {
        try {
            return itemService.getItemsByCategory(id);
        } catch (Exception e) {
            throw new RuntimeException("Se rompio en el servicio");
        }
    }
}
