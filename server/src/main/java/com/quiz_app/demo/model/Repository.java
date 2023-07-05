package com.quiz_app.demo.model;


import org.springframework.beans.factory.annotation.Autowired;

@org.springframework.stereotype.Repository
public class Repository  {
    JpaRepo repository;

    @Autowired
    public Repository(JpaRepo repository) {
        this.repository = repository;
    }

    public Test getTestById(long id){
        return repository.findById(id).orElse(null);
    }
}
