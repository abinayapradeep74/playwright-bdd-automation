Feature: OrangeHRM Login

  Scenario: Verify valid login

    Given I am on the OrangeHRM login page
    When I login with valid credentials
    Then I should be redirected to the Dashboard page
    And the Dashboard header should be displayed
    And the Dashboard menu should be displayed