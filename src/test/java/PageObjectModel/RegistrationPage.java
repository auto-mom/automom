package PageObjectModel;

import Utilities.ActionMethods;

public class RegistrationPage 
{
	public static String firstNameText = "fname"; //id
	public static String lastNameText = "lname"; //id
	public static String emailIdRegistrationText = "email"; //id
	public static String setPasswordText = "pwd"; //id
	public static String confirmPasswordText = "confirm-pwd"; //id
	public static String submitRegistrationButton = "//button[@type='submit']"; //xpath
	public static String registrationTab = "//a[text() = 'Registration']"; //xpath
	
	public static void enterFirstname(String firstName)
	{
		ActionMethods.enterText("id", firstNameText, firstName);
	}
	
	public static void enterLastName(String lastName)
	{
		ActionMethods.enterText("id", lastNameText, lastName);
	}
	
	public static void enterEmailIdRegistration(String emailId)
	{
		ActionMethods.enterText("id", emailIdRegistrationText, emailId);
	}
	
	public static void enterSetPassword(String setPassword)
	{
		ActionMethods.enterText("id", setPasswordText, setPassword);
	}
	
	public static void enterConfirmPassword(String confirmPassword)
	{
		ActionMethods.enterText("id", confirmPasswordText, confirmPassword);
	}
	
	public static void clickRegistrationButton()
	{
		ActionMethods.clickButton("xpath", submitRegistrationButton);
	}
	
	public static void clickRegistrationTab()
	{
		ActionMethods.clickButton("xpath", registrationTab);
	}
	
}
