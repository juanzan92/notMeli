package models;

public class Category {

    private String id;
    private String name;
    private String picture;
    private String permalink;
    private Integer total_items_in_this_category;
    private List<Category> categories;

    public Category() {
    }

    public Category(String id, String name, String picture, String permalink, Integer total_items_in_this_category, List<Category> categories) {
        this.id = id;
        this.name = name;
        this.picture = picture;
        this.permalink = permalink;
        this.total_items_in_this_category = total_items_in_this_category;
        this.categories = categories;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public String getPermalink() {
        return permalink;
    }

    public void setPermalink(String permalink) {
        this.permalink = permalink;
    }

    public Integer getTotal_items_in_this_category() {
        return total_items_in_this_category;
    }

    public void setTotal_items_in_this_category(Integer total_items_in_this_category) {
        this.total_items_in_this_category = total_items_in_this_category;
    }

    public List<Category> getCategories() {
        return categories;
    }

    public void setCategories(List<Category> categories) {
        this.categories = categories;
    }

    @java.lang.Override
    public java.lang.String toString() {
        return "Category{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", picture='" + picture + '\'' +
                ", permalink='" + permalink + '\'' +
                ", total_items_in_this_category=" + total_items_in_this_category +
                ", categories=" + categories +
                '}';
    }
}
