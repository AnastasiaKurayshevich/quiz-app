package com.quiz_app.demo.model;

import com.quiz_app.demo.model.question.Question;
import com.quiz_app.demo.model.question.QuestionRepository;
import com.quiz_app.demo.model.result.ResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class QuizService {

    private final QuestionRepository repo;
    private final ResultRepository resultRepo;
    private final int LIST_SIZE = 5;

    @Autowired
    public QuizService(QuestionRepository repo, ResultRepository resultRepo) {
        this.repo = repo;
        this.resultRepo = resultRepo;
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


}
