# Pacman Clone
this is a clone of the popular game pacman, at the end of the game the player will be asked to enter a 3 letter initial for the leaderboard, if they reach the top 10 highscore, it will be displayed onto leaderboard (which will be stored in a database), the user will have the option to sign up/sign in for a personalized name (their username) as well as a personal scoreboard.

## Technologies used:
- React + Firebase

## installation instructions:
- npm install / yarn

### Milestone 1
- set up gameboard layout
    - have moveable character
    - points system
        - increase as more balls collected
    - implement ghosts
        - can be completely randomly moving at this point
    - characters can be just colored dots
- set up leaderboard
    - store top 10 scores
    - limit leaderboard name to 3 letters

### Milestone 2
- login/logout functionality
     - if user logged in, take in their username
- user authentication
- personal scoreboard
    - linked to user profile, only viewable by user

### Milestone 3
- make walls an actual blocker from moving
    - balls don't appear where walls are
- add reverse ghost balls
- add character sprites

### Milestone 4
- implement levels
    - balls disappear after being collected
    - if all balls are collected, you go to next level
    - ghosts moves faster as level progress

### Milestone 5
- smart moving ghosts
    - increased intelligence as level progess
    - with that, ghost no longer need to move faster
- user can save progess
    - players can start at the last played level



