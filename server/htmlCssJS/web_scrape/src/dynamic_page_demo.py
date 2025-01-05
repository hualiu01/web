from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
import time

# Configure WebDriver
service = Service("path_to_chromedriver")  # Update path to chromedriver
driver = webdriver.Chrome(service=service)

# Open the URL
url = "https://www.iyf.tv/list/anime"
driver.get(url)

# Wait for the page to load if necessary (optional)
driver.implicitly_wait(10)

# Extract titles (Update the XPath or CSS selector)
titles = [element.text for element in driver.find_elements(By.CSS_SELECTOR, "#list-page > div:nth-child(2) > div.d-block.video-item > div > div > div.title")]

# Print the titles
print(titles)

# Close the driver
driver.quit()
