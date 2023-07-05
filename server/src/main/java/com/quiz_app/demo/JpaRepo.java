package com.quiz_app.demo;

import org.springframework.data.jpa.repository.JpaRepository;

public interface JpaRepo extends JpaRepository<Test, Long> {
}
