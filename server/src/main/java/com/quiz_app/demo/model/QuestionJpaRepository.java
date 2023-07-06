package com.quiz_app.demo.model;

import org.springframework.data.repository.CrudRepository;

public interface QuestionJpaRepository extends CrudRepository<Question, Long> {
}
