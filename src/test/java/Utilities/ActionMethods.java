package Utilities;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import StepDefinition.Login;

public class ActionMethods 
{
	public static void enterText(String property, String locator, String value)
	{
		switch (property) 
		{
			case "xpath":
					WebElement element = Login.driver.findElement(By.xpath(locator));
					element.sendKeys(value);
				break;
				
			case "id":
					WebElement element1 = Login.driver.findElement(By.id(locator));
					element1.sendKeys(value);
				break;
		}
	}
	
	public static void clickButton(String property, String value)
	{
		switch (property) 
		{
			case "xpath":
					WebElement element = Login.driver.findElement(By.xpath(value));
					element.click();
				break;
				
			case "id":
					WebElement element1 = Login.driver.findElement(By.id(value));
					element1.click();
				break;
		}
	}
	
	
}