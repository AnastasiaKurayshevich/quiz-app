package com.quiz_app.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Test {
    @Id
    @GeneratedValue
    private long id;

    private String testMessage;
}
