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
	
	/**
	 * @author SHUBHAM BARDE
	 * Description: Enter Employee First Name
	 */
	public static void enterFirstname(String firstName)
	{
		ActionMethods.enterText("id", firstNameText, firstName);
	}
	
	/**
	 * @author SHUBHAM BARDE
	 * Description: Enter Employee Last Name
	 */
	public static void enterLastName(String lastName)
	{
		ActionMethods.enterText("id", lastNameText, lastName);
	}
	
	/**
	 * @author SHUBHAM BARDE
	 * Description: Enter Employee Email ID
	 */
	public static void enterEmailIdRegistration(String emailId)
	{
		ActionMethods.enterText("id", emailIdRegistrationText, emailId);
	}
	
	/**
	 * @author SHUBHAM BARDE
	 * Description: Enter Set Password
	 */
	public static void enterSetPassword(String setPassword)
	{
		ActionMethods.enterText("id", setPasswordText, setPassword);
	}
	
	/**
	 * @author SHUBHAM BARDE
	 * Description: Enter Confirm Password
	 */
	public static void enterConfirmPassword(String confirmPassword)
	{
		ActionMethods.enterText("id", confirmPasswordText, confirmPassword);
	}
	
	/**
	 * @author SHUBHAM BARDE
	 * Description: Click on Submit Button
	 */
	public static void clickRegistrationButton()
	{
		ActionMethods.clickButton("xpath", submitRegistrationButton);
	}
	
	/**
	 * @author SHUBHAM BARDE
	 * Description: Click on Registration Tab
	 */
	public static void clickRegistrationTab()
	{
		ActionMethods.clickButton("xpath", registrationTab);
	}
	
}
