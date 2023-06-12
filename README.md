# Journey

- User can create a custom quiz
  - Can give the quiz a name/topic
  - Each question consists of target taboo words as the main question, players joined this quiz has to prompt the AI to answer which includes these words
- User can manage their created quizzes
  - Create a new one
  - Edit existing ones
  - Delete existing ones
  - Duplicate existing ones (future)
- User can share their created quiz and invite players to join
  - Generate a unique link for players to join
  - or can join via entering "Quiz Code" manually
- User can manage the results of completed quizzes
  - Present the winners (podium) to students with scores they achieve
  - Able to see AI's feedbacks, and able to edit them (in case the feedback goes wrong)
  - Able to edit the score given by the AI as well

# Data Structure

## User (document)

- identified by unique `uid` from OAUTH
- active_quizzes (collection)
- completed_quizzes (collection)

## Quiz (document)
