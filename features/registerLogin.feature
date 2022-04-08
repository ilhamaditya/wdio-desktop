@Register
Feature: Register & Login

    Scenario: As user I can register
        Given on register page
        When fill form
        And submit register
        Then register successful

    Scenario: As user I can login
        Given on login page
        When fill form login
        And submit login
        Then login successful
