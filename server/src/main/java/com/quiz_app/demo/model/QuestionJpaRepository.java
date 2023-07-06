package com.quiz_app.demo.model;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface QuestionJpaRepository extends CrudRepository<Question, Long> {
    List<Question> findAll();
}
