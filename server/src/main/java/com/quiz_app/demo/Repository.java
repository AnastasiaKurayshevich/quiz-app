package com.quiz_app.demo;

import org.springframework.data.jpa.repository.JpaRepository;

public class Repository  {
    JpaRepository repository;

    public Repository(JpaRepository repository) {
        this.repository = repository;
    }
}
