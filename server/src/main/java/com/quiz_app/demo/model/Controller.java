package com.quiz_app.demo.model;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/test")
@CrossOrigin(origins = "http://127.0.0.1:5173/", allowedHeaders = "*")
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
