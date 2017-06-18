# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

jasmine = User.create( user_name: "Jasmine" )
jonathan = User.create( user_name: "Jonathan" )


Poll.destroy_all

fruit_poll = Poll.create( title: "Favorite Fruit Poll", author_id: jasmine.id )



Question.destroy_all

question1 = Question.create(text: "What is your favorite fruit? ", poll_id: fruit_poll.id)
question2 = Question.create(text: "What is your favorite fruit color? ", poll_id: fruit_poll.id)
question3 = Question.create(text: "What is your favorite fruit size? ", poll_id: fruit_poll.id)
question4 = Question.create(text: "What is your favorite flavor? ", poll_id: fruit_poll.id)


AnswerChoice.destroy_all

answer_choices1_1 = AnswerChoice.create(text: "Banana", question_id: question1.id)
answer_choices1_2 = AnswerChoice.create(text: "Strawberry", question_id: question1.id)
answer_choices1_3 = AnswerChoice.create(text: "Tomato", question_id: question1.id)

answer_choices2_1 = AnswerChoice.create(text: "Red", question_id: question2.id)
answer_choices2_2 = AnswerChoice.create(text: "Yellow", question_id: question2.id)
answer_choices2_3 = AnswerChoice.create(text: "Blue", question_id: question2.id)

answer_choices3_1 = AnswerChoice.create(text: "Oval", question_id: question3.id)
answer_choices3_2 = AnswerChoice.create(text: "Round", question_id: question3.id)
answer_choices3_3 = AnswerChoice.create(text: "Heart", question_id: question3.id)

answer_choices4_1 = AnswerChoice.create(text: "Sweet", question_id: question4.id)
answer_choices4_2 = AnswerChoice.create(text: "Banana Flavor", question_id: question4.id)
answer_choices4_3 = AnswerChoice.create(text: "Savory", question_id: question4.id)





Response.destroy_all

response1_jon = Response.create(user_id: jonathan.id, answer_id: answer_choices1_1.id)
response2_jon = Response.create(user_id: jonathan.id, answer_id: answer_choices2_1.id)
response3_jon = Response.create(user_id: jonathan.id, answer_id: answer_choices3_1.id)
response4_jon = Response.create(user_id: jonathan.id, answer_id: answer_choices4_1.id)

response1_jasmine = Response.create(user_id: jasmine.id, answer_id: answer_choices1_1.id)
response2_jasmine = Response.create(user_id: jasmine.id, answer_id: answer_choices2_1.id)
response3_jasmine = Response.create(user_id: jasmine.id, answer_id: answer_choices3_3.id)
response4_jasmine = Response.create(user_id: jasmine.id, answer_id: answer_choices4_2.id)
