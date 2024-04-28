# DNS - Domain Name Server

1) About _Hypertext Transfer(or Transport) Protocol_(HTTP):
	- unlike ssh or ftp, which maintains an active connection, http is a __stateless__ protocol.
	- In http, you make a request, get your response. Then, connection get closed.
	- One question would be: how Ajax maintains constant streaming and updates on parts based on http which closes each time.

2) What happens after an address is typed in your browser and you hit Enter?
	- Client browser -> DNS(hierarchy) -> server,IP

3) Steps to get a web server of your own up and running:
	1) Buy a domain name. [GoDaddy](https://sg.godaddy.com/zh/domains/domain-name-search)
	2) Get a _web hosting account_ from one of the web hosting service, like DreamHost.
	Then, the web hosting company will tell you what is the address of their DNS server, i.e. what the called NS records.
	e.g. ns1.dreamhost.com or ns2.dreamhost.com
	3) Uploading your own website to the server using shell.

4) DNS record, for example ns1.dreamhost.com.
    But on a more daily bases, there are three:
    _MX record_, _CNAME record_, and _A record_
    2) _MX record_ stands for __Mail Exchange record__. Mail __server or servers__. With this, you don't have to host your email at the same
    address of your IP address even.
    3) _A record_ stands for __Address record__.
    An A record maps a domain name to the IPV4 of the computer hosting the domain.
    An A record is used to find the IP address of a computer connected to the internet from a name.
    4) _CNAME_ stands for Canonical（规范） Name. It can be used to alias one name to another.
    5) __A common example__ is when you have both example1.com and example2.com pointing to the same application
      and hosted by the same server. In this case, there are two ways:
        - Way One:
            1. An A record for example1.com pointing to the server IP address
            2. A CNAME record for example2.com pointing to example1.com.
        - Way Two:
            1. An A record for example1.com pointing to the server IP address
            2. A A record for example2.com pointing to the server IP address, too.
    6) In the above example, which way is better, why?
        - A + CNAME => one IP to modify, but more hoops for some clients, thus slower
        - two A names => two IPs to modify, but faster
    7) NOTE: 对 DNS 进行任何更改都可能最多需要 48(TTL=48) 小时才会在互联网上生效。--GoDaddy

5) _Virtual Private Servers_.
    * Due to the development of multi-core computers.
    you may get one core out of the say 8 cores machine.
    * you can get root now!
    * you can upgrade os and install additional Apache or PHP software now!

6) Configs when you create a DNS:
    - TTL:Time To Live. Unit Second.
    Time fot this mapping of name and IP, or of name and name, to be valid.
    But the real world doesn't respect this sometimes.

7) SSL
   - why need it?
   For a lot of websites, once you logged in, you are assigned a cookie(a random number).
   Then __when you visits other sub-domains, you use that cookie to identify yourself__.
   So, here is a security hole: someone can sniff your cookie and use it to pretend to be you.
   Thus, SSL exits to encrypt requests' header and cookie for a specific URL.
   - When an url is encrypted, it is _HTTPS_
   - Usually, because of efficiency issue, only the login and create-account URLs are encrypted.
   - Gmail and most of the bank sites are using SSL.
   - price, `$~100 per url per year`...
---
* request host is important because there are many web websites/services
living in the same IP/machine/server!

* Backend Development stack :
    - XAMPP: Cross-Platform (X), Apache (A), MariaDB (M), PHP (P) and Perl (P)
    - MAMP: Macintosh(often called "the Mac", the first widely-sold personal computer with a graphical user interface (GUI) and a mouse), Apache, MySQL and PHP
    - LAMP: (Linux, Apache web-server, MySQL and PHP/Perl/Python)