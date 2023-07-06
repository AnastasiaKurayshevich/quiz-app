package com.quiz_app.demo.model;

import jakarta.persistence.*;

@Entity
public class Question {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

   @Column(nullable = false)
   private String question;

   @OneToMany
   @JoinColumn(name="answer_id")
   private List<Answer> answers;
}
