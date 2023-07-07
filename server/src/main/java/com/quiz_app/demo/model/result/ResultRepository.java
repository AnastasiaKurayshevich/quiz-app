package com.quiz_app.demo.model.result;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Repository
public class ResultRepository {

    private final ResultJpaRepository repo;

    @Autowired
    public ResultRepository(ResultJpaRepository repo) {
        this.repo = repo;
    }

    public void safeToDb (Result result){
        repo.save(result);
    }

    public List<Result> getResults(){
        return repo.findAll().stream()
                .sorted(Comparator.comparingInt(Result::getScore).reversed())
                .collect(Collectors.toList());
    }

    public void removeResult(long id){
        repo.deleteById(id);
    }
}
