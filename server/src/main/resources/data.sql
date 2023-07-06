INSERT INTO question (question) VALUES ('What is 2+2?');
INSERT INTO answer (question_id, answer, is_correct) VALUES (1, 'No', false);
INSERT INTO answer (question_id, answer, is_correct) VALUES (1, 'I dont know', false);
INSERT INTO answer (question_id, answer, is_correct) VALUES (1, 'Maybe the same as 3+1?', true);

INSERT INTO question (question) VALUES ('What is a dog?');
INSERT INTO answer (question_id, answer, is_correct) VALUES (2, 'No', false);
INSERT INTO answer (question_id, answer, is_correct) VALUES (2, 'I dont know', false);
INSERT INTO answer (question_id, answer, is_correct) VALUES (2, 'Dog', true);

INSERT INTO question (question) VALUES ('No?');
INSERT INTO answer (question_id, answer, is_correct) VALUES (3, 'No', true);
INSERT INTO answer (question_id, answer, is_correct) VALUES (3, 'yes', false);
INSERT INTO answer (question_id, answer, is_correct) VALUES (3, 'maybe', false);

INSERT INTO question (question) VALUES ('Capital of Sweden?');
INSERT INTO answer (question_id, answer, is_correct) VALUES (4, 'Oslo', false);
INSERT INTO answer (question_id, answer, is_correct) VALUES (4, 'Stockholm', true);
INSERT INTO answer (question_id, answer, is_correct) VALUES (4, 'Paris', false);

INSERT INTO question (question) VALUES ('What the time? ');
INSERT INTO answer (question_id, answer, is_correct) VALUES (5, 'Its late', false);
INSERT INTO answer (question_id, answer, is_correct) VALUES (5, 'I dont know', false);
INSERT INTO answer (question_id, answer, is_correct) VALUES (5, 'Time to party', true);

INSERT INTO question (question) VALUES ('How many continents is there');
INSERT INTO answer (question_id, answer, is_correct) VALUES (6, '7', true);
INSERT INTO answer (question_id, answer, is_correct) VALUES (6, '6', false);
INSERT INTO answer (question_id, answer, is_correct) VALUES (6, '5', false);

