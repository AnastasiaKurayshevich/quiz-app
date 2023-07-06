package com.quiz_app.demo.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuestionService {

    private final QuestionRepository repo;

    @Autowired
    public QuestionService(QuestionRepository repo) {
        this.repo = repo;
    }

    public Question getRandomQuestion(){

    }

    public Question getById(long id){
        return repo.getQuestionById(id);
    }
}
