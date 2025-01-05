from mybs4warpper.MyBs4Wrapper import MyBs4Wrapper

local_html_fp = "data/input/sample_small_html1.html"

mybs4 = MyBs4Wrapper()
mybs4.parse_local_html(local_html_fp)
print(mybs4.get_soup_as_pretty_str())

print(mybs4.soup.title)
print(mybs4.soup.p)