package com.quiz_app.demo.model;

import com.quiz_app.demo.model.question.Question;
import com.quiz_app.demo.model.question.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class QuestionService {

    private final QuestionRepository repo;
    private final int LIST_SIZE = 5;

    @Autowired
    public QuestionService(QuestionRepository repo) {
        this.repo = repo;
    }

    public List<Question> getListOfRandomQuestions(){
        List<Question> questionList = new ArrayList<>();
        Set<Long> questionIdSet = new HashSet<>();

        while (questionList.size() < LIST_SIZE) {
            Question question = getRandomQuestion();


            if (!questionIdSet.contains(question.getId())){
                questionIdSet.add(question.getId());
                questionList.add(question);
            }
        }
        return questionList;
    }

    private Question getRandomQuestion(){
        int maxNumber = repo.findAllQuestions().size();
        Random random = new Random();
        int randomNumber = random.nextInt(maxNumber) + 1;
      return repo.getQuestionById(randomNumber);

    }

    public Question getById(long id){
        return repo.getQuestionById(id);
    }
}
