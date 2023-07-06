package com.quiz_app.demo.model;

import jakarta.persistence.*;

@Entity
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="answer_id")
    private long id;

    @Column(nullable = false)
    private String answer;

    @Column(nullable = false)
    private boolean isCorrect;

}
