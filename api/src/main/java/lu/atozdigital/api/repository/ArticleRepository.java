package lu.atozdigital.api.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import lu.atozdigital.api.model.Article;


public interface ArticleRepository extends JpaRepository<Article, Long> {

    // Optional<Article> findById(Long id);
    List <Article> findArticleByNameContains(String name);
}
