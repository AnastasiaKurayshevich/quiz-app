package com.quiz_app.demo.model;

import org.springframework.data.repository.CrudRepository;

public interface JpaRepo extends CrudRepository<Test, Long> {
}
