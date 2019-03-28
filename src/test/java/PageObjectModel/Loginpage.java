package PageObjectModel;

import Utilities.ActionMethods;

public class Loginpage 
{
	public static String email = "email"; //id 
	public static String passwordId = "pwd";  //id
	public static String submit = "//button[@type='submit']"; //xpath
	public static String loginTab = "//a[text() = 'Login']"; //xpath
	
	public static void enterEmail(String emailID)
	{
		ActionMethods.enterText("id", email, emailID);
	}
	
	public static void enterPassword(String password)
	{
		ActionMethods.enterText("id", passwordId, password);
	}
	
	public static void clickSubmit()
	{
		ActionMethods.clickButton("xpath", submit);
	}
	
	public static void clickLoginTab()
	{
		ActionMethods.clickButton("xpath", loginTab);
	}
}
