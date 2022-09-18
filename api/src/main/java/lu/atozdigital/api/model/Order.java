package lu.atozdigital.api.model;
import org.apache.commons.lang3.RandomStringUtils;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "table_orders")

public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;


    @Column(name = "reference")
    private String reference;

    @OneToMany(cascade = CascadeType.ALL)
    @Column(name = "articles")
    private List<Article> articles;

    @CreationTimestamp
    @Column(name = "date")
    private Date date;




    public Order() {

    }

    public Order( List<Article> articles) {
        this.reference = RandomStringUtils.random(6,"ABCDEFGHIJ");
        this.articles = articles;
        ///this.date = new Date();
    }

    @Override
    public String toString() {
        return "Order{" +
                "id='" + id + '\'' +
                ", reference='" + reference + '\'' +
                ", articles=" + articles +
                ", date=" + date +
                '}';
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    public void setArticles(List<Article> articles) {
        this.articles = articles;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getReference() {
        return reference;
    }

    public List<Article> getArticles() {
        return articles;
    }

    public Date getDate() {
        return date;
    }
}


