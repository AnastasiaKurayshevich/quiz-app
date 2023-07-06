package com.quiz_app.demo.model;

import com.quiz_app.demo.model.question.Question;
import com.quiz_app.demo.model.question.QuestionDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/question")
@CrossOrigin(origins = "http://127.0.0.1:5173/", allowedHeaders = "*")
public class Controller {

    private final QuizService service;

    @Autowired
    public Controller(QuizService service) {
        this.service = service;
    }

    @GetMapping("/random")
    public ResponseEntity<QuestionDTO> getRandomQuestionFromDb(){
        List<Question> questionList = service.getListOfRandomQuestions();
        QuestionDTO response = new QuestionDTO(questionList);
        return ResponseEntity.ok(response);
    }


}
