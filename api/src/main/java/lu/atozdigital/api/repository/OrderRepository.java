package lu.atozdigital.api.repository;

import lu.atozdigital.api.model.Article;
import lu.atozdigital.api.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface OrderRepository extends JpaRepository<Order, Long> {

    List <Order> findOrderById(Long id);
}
