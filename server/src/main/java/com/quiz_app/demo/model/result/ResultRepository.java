package com.quiz_app.demo.model.result;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ResultRepository {

    private final ResultJpaRepository repo;

    @Autowired
    public ResultRepository(ResultJpaRepository repo) {
        this.repo = repo;
    }
}
