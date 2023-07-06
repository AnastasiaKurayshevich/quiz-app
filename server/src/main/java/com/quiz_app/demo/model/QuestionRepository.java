package com.quiz_app.demo.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class QuestionRepository {
    QuestionJpaRepository repo;

    @Autowired
    public QuestionRepository(QuestionJpaRepository repo) {
        this.repo = repo;
    }

    public Question getQuestionById(long id){
        return repo.findById(id).orElse(null);
    }
}
