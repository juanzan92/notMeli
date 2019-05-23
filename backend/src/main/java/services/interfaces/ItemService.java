package services.interfaces;

import models.Item;

import java.util.List;

public interface ItemService {
    List<Item> getItem(String id);
    List<Item> getItems();
    List<Item> getItemsByCategory(String id);


}
