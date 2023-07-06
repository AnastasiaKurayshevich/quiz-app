package com.quiz_app.demo.model;

import org.springframework.beans.factory.annotation.Autowired;

@org.springframework.stereotype.Service
public class Service {

    QuestionRepository repo;

    @Autowired
    public Service(QuestionRepository repo) {
        this.repo = repo;
    }
}
