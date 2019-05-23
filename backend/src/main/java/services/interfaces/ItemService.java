package services.interfaces;

public interface ItemService {
    String getItem(String id);
    String getItems();
    String getItemsByCategory(String id) throws Exception;


}
