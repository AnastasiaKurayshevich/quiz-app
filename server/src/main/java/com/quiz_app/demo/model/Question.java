package com.quiz_app.demo.model;

import jakarta.persistence.*;

import java.util.List;

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

   public Question(long id, String question, List<Answer> answers) {
      this.id = id;
      this.question = question;
      this.answers = answers;
   }

   public Question() {

   }

   public long getId() {
      return id;
   }

   public void setId(long id) {
      this.id = id;
   }

   public String getQuestion() {
      return question;
   }

   public void setQuestion(String question) {
      this.question = question;
   }

   public List<Answer> getAnswers() {
      return answers;
   }

   public void setAnswers(List<Answer> answers) {
      this.answers = answers;
   }
}
