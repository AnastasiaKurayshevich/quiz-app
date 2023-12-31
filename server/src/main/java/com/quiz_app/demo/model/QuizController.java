package com.quiz_app.demo.model;

import com.quiz_app.demo.model.question.Question;
import com.quiz_app.demo.model.question.QuestionDTO;
import com.quiz_app.demo.model.result.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/question")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE}, allowedHeaders = "*")
public class QuizController {

    private final QuizService service;

    @Autowired
    public QuizController(QuizService service) {
        this.service = service;
    }

    @GetMapping("/random")
    public ResponseEntity<QuestionDTO> getRandomQuestionFromDb(){
        List<Question> questionList = service.getListOfRandomQuestions();
        QuestionDTO response = new QuestionDTO(questionList);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/save_result")
    public ResponseEntity saveResult(@RequestBody Result result){
        service.saveResultToDataBase(result);
        return ResponseEntity.accepted().build();
    }

    @GetMapping("/results")
    public ResponseEntity<List<Result>> getAllResults(){
        List<Result> resultList = service.getAllResults();
        return ResponseEntity.ok().body(resultList);

    }

    @DeleteMapping("/results/{id}")
    public ResponseEntity deleteResult(@PathVariable long id){
        service.deleteResultById(id);
        return ResponseEntity.noContent().build();
    }

}
