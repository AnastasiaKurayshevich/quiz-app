package com.quiz_app.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface JpaRepo extends CrudRepository<Test, Long> {
}
