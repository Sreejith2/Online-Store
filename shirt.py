from bs4 import BeautifulSoup
import requests


headers={
    "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36 Edg/90.0.818.66",
    "Accept-Language":"en-US,en;q=0.9"
}

url_f="https://www.amazon.in/s?k=onam+t+shirts&crid=1M7QLVVT3HY62&sprefix=onam+t+shirts%2Caps%2C305&ref=nb_sb_noss_1"
response=requests.get(url_f,headers=headers)
web_html=response.text

soup = BeautifulSoup(web_html,'html.parser')

shirts=soup.find_all(class_="a-size-base-plus a-color-base")
images=soup.select(selector="div img")


names = [shirt.text for shirt in shirts]
dress_src = [img['src'] for img in images if(len(img['src'])<70)]

prices=soup.find_all(class_="a-price-whole")
price_s=[price.text for price in prices]
