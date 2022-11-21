# Lab 8 - Starter
1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.  
Answer: Within a Github action that runs whenever code is pushed, because we want to test the code for every push so that testing is incremental and not just at the end.
2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)  
Answer: No, if we are just checking for the correct output that is only one end so there is no need for end to end test.
3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.  
Answer: Yes, you can use unit test to test the writing of the message and the sending of the message.
4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.  
Answer: Yes, you can write a unit test to test the max message length because it is a small individual component.
