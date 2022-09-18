package lu.atozdigital.api.model;
import javax.persistence.*;
import java.util.List;
import java.util.Set;


@Entity
@Table(name = "articles")

public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;



    @Column(name = "name")
    private String name;

    @Column(name = "price")
    private Float price;

    @Column(name = "picture", columnDefinition = "TEXT")
    private String picture;

    @Column(name = "orderedQuantity")
    private Integer orderedQuantity;

    @ManyToMany(mappedBy = "articles")
    Set<Order> orders;


    public Article(String name, Float price, String picture) {
        this.name = name;
        this.price = price;
        this.picture = picture;
    }

    public Article(String name, Float price, Integer orderedQuantity) {
        this.name = name;
        this.price = price;
        this.orderedQuantity = orderedQuantity;
    }

    public Article() {

    }

    public String getName() {
        return name;
    }

    public Integer getOrderedQuantity() {
        return orderedQuantity;
    }

    public void setOrderedQuantity(Integer orderedQuantity) {
        this.orderedQuantity = orderedQuantity;
    }

    public Float getPrice() {
        return price;
    }

    public String getPicture() {
        return picture;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public long getId() {
        return id;
    }

    @Override
    public String toString() {
        return "Article{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", picture='" + picture + '\'' +
                ", orderedQuantity=" + orderedQuantity +
                '}';
    }
}


