package PageObjectModel;

import Utilities.ActionMethods;

public class Loginpage 
{
	public static String email = "email"; //id 
	public static String passwordId = "pwd";  //id
	public static String submit = "//button[@type='submit']"; //xpath
	public static String loginTab = "//a[text() = 'Login']"; //xpath
	
	/**
	 * @author SHUBHAM BARDE
	 * Description: Enter Employee Email ID
	 */
	public static void enterEmail(String emailID)
	{
		ActionMethods.enterText("id", email, emailID);
	}
	
	/**
	 * @author SHUBHAM BARDE
	 * Description: Enter Employee Password
	 */
	public static void enterPassword(String password)
	{
		ActionMethods.enterText("id", passwordId, password);
	}
	
	/**
	 * @author SHUBHAM BARDE
	 * Description: Click on Login Button
	 */
	public static void clickSubmit()
	{
		ActionMethods.clickButton("xpath", submit);
	}
	
	/**
	 * @author SHUBHAM BARDE
	 * Description: Click on Login Tab
	 */
	public static void clickLoginTab()
	{
		ActionMethods.clickButton("xpath", loginTab);
	}
}
