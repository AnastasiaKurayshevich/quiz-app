package com.quiz_app.demo.model.result;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ResultJpaRepository extends CrudRepository<Result, Long> {
    List<Result> findAll();
}
