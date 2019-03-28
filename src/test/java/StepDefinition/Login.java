package StepDefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.mongodb.diagnostics.logging.Logger;

import PageObjectModel.Loginpage;
import PageObjectModel.RegistrationPage;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Login {
	
	public static WebDriver driver;
	public static ExtentReports extentReports;
	public static ExtentTest logger;
	
	@Before
	public static void startBrowser()
	{
		System.setProperty("webdriver.chrome.driver", "/Users/test/Downloads/chromedriver");
		driver = new ChromeDriver();
		//driver.get("https://auto-mom.github.io/automom");
		driver.get("https://auto-mom.github.io/automom/authentication/register");
		driver.manage().window().fullscreen();
		
//		extentReports = new ExtentReports();
//		logger = extentReports.
	}

//	@After
//	public static void exitBrowser()
//	{
//		driver.quit();
//	}

	
	@Given("I want to enter registration information from {string}, {string}, {string} , {string} and {string}")
	public void i_want_to_enter_registration_information_from_and(String string, String string2, String string3, String string4, String string5) 
	{
		RegistrationPage.enterFirstname(string);
	    RegistrationPage.enterLastName(string2);
	    RegistrationPage.enterEmailIdRegistration(string3);
	    RegistrationPage.enterSetPassword(string4);
	    RegistrationPage.enterConfirmPassword(string5);
	}
	
	@Then("Submit the information")
	public void submit_the_information() throws InterruptedException 
	{
		RegistrationPage.clickRegistrationButton();
		Thread.sleep(5000);
		driver.get("https://auto-mom.github.io/automom");
	}
	
	
	@Given("I want to enter username and password from {string} and {string}")
	public void i_want_to_enter_username_and_password_from_and(String string, String string2) 
	{
	    Loginpage.enterEmail(string);
	    Loginpage.enterPassword(string2);    
	}
	
	@Then("login to application")
	public void login_to_application() 
	{
		Loginpage.clickSubmit();
	}
}
