package com.quiz_app.demo.model;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/test")
public class Controller {

    Repository repo;

    public Controller(Repository repo) {
        this.repo = repo;
    }

    @GetMapping("{id}")
    public ResponseEntity<Test> getTest(@PathVariable Long id){
        Test test = repo.getTestById(id);

        return ResponseEntity.ok(test);

    }

}
