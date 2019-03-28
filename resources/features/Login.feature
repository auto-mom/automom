#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

Feature: Registration and Login
  I want to use this template for my feature file

  Scenario Outline: Step1
  		Given I want to enter registration information from "<firstname>", "<lastname>", "<emailID>" , "<setpassword>" and "<confirmpassword>" 
  		Then Submit the information
  		Given I want to enter username and password from "<username>" and "<password>"
    Then login to application
    
    Examples:
   	| firstname | lastname | emailID                   | setpassword | confirmpassword | username                    | password |
 #  | Dhiresh   | Mundada  | dhiresh.mundada@capco.com | Shubha@1    | Shubha@1        | dhiresh.mundada@capco.com   | Shubha@1 |
    | a         | abc      | abc@capco.com             | Shubha@1    | Shubha@1        | abc@capco.com   | Shubha@1 |