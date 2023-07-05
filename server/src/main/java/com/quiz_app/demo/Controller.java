package com.quiz_app.demo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/test")
public class Controller {

    @GetMapping("/{id}")
    public ResponseEntity<Test> getTest(@PathVariable Long id){
        Test test =
        return

    }

}
