package com.quiz_app.demo.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class QuestionService {

    private final QuestionRepository repo;

    @Autowired
    public QuestionService(QuestionRepository repo) {
        this.repo = repo;
    }

    public Question getRandomQuestion(){
        int maxNumber = repo.findAllQuestions().size();
        Random random = new Random();
        int randomNumber = random.nextInt(maxNumber) + 1;
      return repo.getQuestionById(randomNumber);

    }

    public Question getById(long id){
        return repo.getQuestionById(id);
    }
}
