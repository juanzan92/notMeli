package models;

public class Item {
    private String id;
    private String site_id;
    private String title;
    private float price;
    private String currency_id;
    private float available_quantity;
    private float sold_quantity;
    private String buying_mode;
    private String listing_type_id;
    private String stop_time;
    private String condition;
    private String permalink;
    private String thumbnail;
    private boolean accepts_mercadopago;
    private String original_price = null;
    private String category_id;
    private float official_store_id;
    private String catalog_product_id = null;
    private String tags;

    public Item() {
    }

    public Item(String id, String site_id, String title, float price, String currency_id, float available_quantity, float sold_quantity, String buying_mode, String listing_type_id, String stop_time, String condition, String permalink, String thumbnail, boolean accepts_mercadopago, String original_price, String category_id, float official_store_id, String catalog_product_id, String tags) {
        this.id = id;
        this.site_id = site_id;
        this.title = title;
        this.price = price;
        this.currency_id = currency_id;
        this.available_quantity = available_quantity;
        this.sold_quantity = sold_quantity;
        this.buying_mode = buying_mode;
        this.listing_type_id = listing_type_id;
        this.stop_time = stop_time;
        this.condition = condition;
        this.permalink = permalink;
        this.thumbnail = thumbnail;
        this.accepts_mercadopago = accepts_mercadopago;
        this.original_price = original_price;
        this.category_id = category_id;
        this.official_store_id = official_store_id;
        this.catalog_product_id = catalog_product_id;
        this.tags = tags;
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getSite_id() {
        return site_id;
    }

    public void setSite_id(String site_id) {
        this.site_id = site_id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public String getCurrency_id() {
        return currency_id;
    }

    public void setCurrency_id(String currency_id) {
        this.currency_id = currency_id;
    }

    public float getAvailable_quantity() {
        return available_quantity;
    }

    public void setAvailable_quantity(float available_quantity) {
        this.available_quantity = available_quantity;
    }

    public float getSold_quantity() {
        return sold_quantity;
    }

    public void setSold_quantity(float sold_quantity) {
        this.sold_quantity = sold_quantity;
    }

    public String getBuying_mode() {
        return buying_mode;
    }

    public void setBuying_mode(String buying_mode) {
        this.buying_mode = buying_mode;
    }

    public String getListing_type_id() {
        return listing_type_id;
    }

    public void setListing_type_id(String listing_type_id) {
        this.listing_type_id = listing_type_id;
    }

    public String getStop_time() {
        return stop_time;
    }

    public void setStop_time(String stop_time) {
        this.stop_time = stop_time;
    }

    public String getCondition() {
        return condition;
    }

    public void setCondition(String condition) {
        this.condition = condition;
    }

    public String getPermalink() {
        return permalink;
    }

    public void setPermalink(String permalink) {
        this.permalink = permalink;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    public boolean isAccepts_mercadopago() {
        return accepts_mercadopago;
    }

    public void setAccepts_mercadopago(boolean accepts_mercadopago) {
        this.accepts_mercadopago = accepts_mercadopago;
    }

    public String getOriginal_price() {
        return original_price;
    }

    public void setOriginal_price(String original_price) {
        this.original_price = original_price;
    }

    public String getCategory_id() {
        return category_id;
    }

    public void setCategory_id(String category_id) {
        this.category_id = category_id;
    }

    public float getOfficial_store_id() {
        return official_store_id;
    }

    public void setOfficial_store_id(float official_store_id) {
        this.official_store_id = official_store_id;
    }

    public String getCatalog_product_id() {
        return catalog_product_id;
    }

    public void setCatalog_product_id(String catalog_product_id) {
        this.catalog_product_id = catalog_product_id;
    }

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }

    @java.lang.Override
    public java.lang.String toString() {
        return "Item{" +
                "id='" + id + '\'' +
                ", site_id='" + site_id + '\'' +
                ", title='" + title + '\'' +
                ", price=" + price +
                ", currency_id='" + currency_id + '\'' +
                ", available_quantity=" + available_quantity +
                ", sold_quantity=" + sold_quantity +
                ", buying_mode='" + buying_mode + '\'' +
                ", listing_type_id='" + listing_type_id + '\'' +
                ", stop_time='" + stop_time + '\'' +
                ", condition='" + condition + '\'' +
                ", permalink='" + permalink + '\'' +
                ", thumbnail='" + thumbnail + '\'' +
                ", accepts_mercadopago=" + accepts_mercadopago +
                ", original_price='" + original_price + '\'' +
                ", category_id='" + category_id + '\'' +
                ", official_store_id=" + official_store_id +
                ", catalog_product_id='" + catalog_product_id + '\'' +
                ", tags='" + tags + '\'' +
                '}';
    }
}
