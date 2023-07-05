package com.quiz_app.demo;

import org.springframework.data.jpa.repository.JpaRepository;

public class Repository  {
    JpaRepository repository;

    public Repository(JpaRepository repository) {
        this.repository = repository;
    }

    public Test getTestById(long id){
        return (Test) repository.findById(id).orElse(null);
    }
}
