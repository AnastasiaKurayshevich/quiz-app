# quiz-app
Quiz Game 

## Full Stack Quiz Game project. 


Welcome to my project. 
The idea was to create little fun quiz game to advance my knowladge of React library and TypeScript, DataBases and Java.  
The game will be one-page application that changes the dispaly state of components based on either User's input or time limit. 


### Technical specification:
Database container: Docker
Database: PostgreSQL
Backend: Java Spring (Dependencies: Spring WEB, Spring Data JPA, Spring Boot DevTools, H2 Database, PostgreSQL Driver) 
Frontend: Vite and React, TypeScript
Documentation: OpenAPI


### Initial design wireframe: 


![Image](https://user-images.githubusercontent.com/125829513/247189215-898f59a2-ec6e-4e39-99f6-20fe3d0d7e98.png)

Please ignore the style and colors of the design, I created this wireframe to navigate through application's architecture. 

#### First 4 frames represent the things that will be shown before the game starts: 

1. Game name, some information about the game itself and game's creators.
2. User will be asked to input their name in order to save their result.
3. User will be presented with the game rules, there is no time limit for reading the rules, the next segment will appear once User presses continue button.
4. Finial step before the game starts.

#### Once the game starts (frames 5 and 6): 

1. User will be presented with the random question for 5 seconds (or less if User chooses to tap the screen to start answering the question). There are no extra points for finishing reading the question quicker that 5 seconds.
2. User will have 30 seconds to choose 1 of 3 answers and submit them. Quicker answers are encouraged - for each "unused" second User gets 0,1 extra points. So is if took 5 secons for the User to answer correctly and submit the answer, and there was 25 seconds left on the clock, User get 2,5 extra points for this question (25s * 0,1 = 2,5 points). Read more on point calculation in Game rules section.
3. This proccess will repeat until the User answers all questions (10 in total).

#### After the game ends (frames 7 and 8):

1. User is presented with final score and score calculations.
2. User's score is posted to the server, and list of 5 highest scores is presented (fetched from the server).

### Game rules: 

- User is presented with the question for 5 seconds (User can choose to preside quicker by tapping the screen).
- User have max 30 seconds to answer the question.
After that the User is shown 3 options to choose an answer from, this last not longer that 30 second. User have to make a choose or the game will continue and the question will be marked as answered wrongly. For each write answer User gets 5 points. For each unused second User get extra 0.1 point. >>> More is comming here
- have to finish the game rules
