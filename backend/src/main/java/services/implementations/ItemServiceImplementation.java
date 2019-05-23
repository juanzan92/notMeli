package services.implementations;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import models.Item;
import services.interfaces.ItemService;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.util.Arrays;
import java.util.List;

public class ItemServiceImplementation implements ItemService {
    private final static String ITEMS_URL = "https://api.mercadolibre.com/sites/MLU/search?category=";
    private final static String SUFIX_URL = "&official_store_id=all";
    private static ItemServiceImplementation myItemService;

    public static ItemServiceImplementation getInstance() {

        if (myItemService == null) {

            myItemService = new ItemServiceImplementation();
        }
        return myItemService;
    }

    private ItemServiceImplementation() {
    }

    public List<Item> getItem(String id) {
        return null;
    }

    public List<Item> getItems() {
        return null;
    }

    public List<Item> getItemsByCategory(String id) {
        if (id.isEmpty()) {
            return null;
        }
        try {
            String data = readUrl(ITEMS_URL + id + SUFIX_URL);
            if (data.equals("ERROR")) {
                return null;
            }

            Item[] agencies = getItemsFromJson(data);

            if (agencies == null || agencies.length == 0){
                return null;
            }

            return Arrays.asList(agencies);
        } catch (Exception e){
            return null;
        }
        
    }

    private static String readUrl(String urlString) throws Exception {
        BufferedReader reader = null;

        try {
            URL url = new URL(urlString);
            URLConnection connection = url.openConnection();
            connection.setRequestProperty("Accept","application/json");
            connection.setRequestProperty("User-Agent","Mozilla/5.0");
            reader = new BufferedReader(new InputStreamReader(connection.getInputStream(),"UTF-8"));
            int read = 0;
            StringBuffer sb = new StringBuffer();
            char[] chars = new char[1024];
            while ((read = reader.read(chars)) != -1) {
                sb.append(chars,0,read);
            }
            return sb.toString();
        } catch (IOException exception) {
            throw new Exception("No se pudo conectar con la api externa");
        } finally {
            if (reader != null) {
                try {
                    reader.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    private Item[] getItemsFromJson(String data) throws Exception{
        try {
            JsonObject jsonObject = new Gson().fromJson(data, JsonElement.class).getAsJsonObject();
            return new Gson().fromJson(jsonObject.get("results"), Item[].class);
        } catch (Exception e) {
            throw new Exception("No se pudo parsear el vector de items de la api externa");
        }

    }
}
