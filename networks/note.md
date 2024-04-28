#  Week1

## The TCP/IP Five layer Network Model

| Layer name  | Protocols         | Protocol data unit | Addressing  |
| ----------- | ----------------- | ------------------ | ----------- |
| Application | HTTP, SMTP,etc.   | Messages           | n/a         |
| Transport   | TCP, UDP          | Segment            | Port #'s'   |
| Network     | IP                | Datagram           | IP address  |
| Data link   | Ethernet, Wifi    | Frames             | MAC address |
| Physical    | 10 Base T, 802.11 | Bits               | n/a         |

UDP: User Datagram Protocol



### ISO Seven layer Network Model

Application layer is segmented to three => Application layer; presention layer; ___?



## The Basics of Networking Devices 

### Cables

There are two types of cables:

- copper 
    - Cat5 Cat5e Cat6 (Cat stands for category). cat5 is colorful. cat5e is black and white.  cat6 has a center layer cylinder. 
    - Compared to cat5, cat5e reduce __crosstalk__ (Crosstalk is when an electrical pulse on one wire is accidentally detected on another wire.) 
- fiber
    - more common to be seen in DB than at homes
    



### Hubs and Switches

They are used to connect devices in a __single network__ often referred as a __LAN__ or __Local Area Network__

__A hub is a physical layer device, and a switch is a data link layer device__.

Hubs:
- A hub is a physical layer device that allows for connections from many computers at once. 
- When devices send msg to the hub, __all devices in the hub receive the msg__. And it depends on the devices themselves to process the msg or not.
- Why Hubs are rare? Cause there is a Problem: __Collision Domain__ where multiple devices try senting data at the same time, and the electrical pulses interfere with each other. So these systems have to wait a while before try again. => inefficient



Network Switches (originally known as the switching hubs)

- Switches are mainly different from hubs because the switch analysis the msg sent to it and __only send the msg to the desired receivers__. This reduces _Collision Domain_ thus increases efficieny.



### Routers

__A router is a Network layer device__ that knows how to forward data __inbetween independent networks__ (whereas switches and hubs are for single network)

A router stores internal tables which contain information about how to route traffic between lots of different networks all over the world.

Most common routers would be the ones you see for  a home network or a small office. Which mainly takes the traffic from your home or office LAN to the __ISP__ (Internet Service Provider). __Once the traffic make it to the ISP, a more sophosticated type of router takes over. -- CORE ISP ROUTERS__ 

- Those Core ISP Routers share data with each other via a __protocol known as BGP__, or border gateway 

  protocol, that let's them learn about the most optimal paths to forward traffic. 



### Servers and Clients

a device can be servers or clients on different times. For example, a email service can also be a client of the DNS service.



## The Physical Layer

### Moving Bits Across the Wire

Ones and zeros are sending across the network cables through a process called what?

=> __Modulation__. Modulation is a way of varying the voltage of the charge moving across the cable. When used for computer networks, __this kind of modulation is more specifically__ known as what?

=> __line coding__ 



How many bits can morden networks are capable of moving every second?

=> 10 billion , 10,000,000,000  10 Gbps, 10 Gigabit Ethernet (IEEE 802.3a)

100 Mbps means the cable *can* transmit 100 million(100,000,000) *bits* of data *a second*. 



### Twisted Pair Cabling and Duplexing

Twisted pairs' twisted nature helps protect against electromagnetic interference and crosstalk from neighboring pairs

A standard cat six cable has eight wires consisting of four twisted pairs inside a single jacket. these cables allow for __duplex communication__.

- __Duplex communication__ is the concept that information can flow in both directions across the cable at the same time

- On the flip side, a process called __simplex communication__ is unidirectional. 

- __Half-duplex__ means that, while communication is possible in each direction, only one device can be communicating at a time.



**Ethernet over twisted pair technologies** are the communications protocols that determine how much data can be sent over a twisted pair cable, how quickly that data can be sent, and __how long a network cable can be__ before the data quality begins to degrade.





### Network Ports and Patch Panels

Twisted pair network cables are terminated with a plug that takes the individual internal wires and exposes them. The most common plug is known as an RJ45, or Registered Jack 45. 

![rj45 prot lint led](/Users/hualiu/Documents/tech/networks/pics/rj45 prot lint led.png)

![rj45 activity led](/Users/hualiu/Documents/tech/networks/pics/rj45 activity led.png)



## The Data Link Layer

### Ethernet and Mac(Media Access Control) Address

Ethernet  => 1980appeared => 1983first std

Ethernet has a way to solve the Collision Domain Problem before switch hubs were invented. And the way is known as _Carrier Sense Multiple Access With Collision Detection_, abbr as __CSMA/CD__. Specifically, it can determine when the communications channels are clear, and when a device is free to transmit data. And if colision detected, then both nodes rest for a random time then try again.



MAC Address:

- __groubally unique__ within an __independent network__

-  48 bits === 6 groupings of 2 Hexadecimal numbers(one hexadecimal is 4 bits: `4*2*6=48`) 
- Example: 00 60 2F 3A 07 BC
- another way of representing a MAC address is 6 _Octet_
  - an Octet is a number of 8 bits, example `2F`
- The first 3 Octet is known as OUI. These are assigned to individual hardware manufacturers by the IEEE or the Institute of Electrical and Electronics Engineers. And the Last 3 were assigned by the manufacturer and they make sure they are globally unique.![mac addr](/Users/hualiu/Documents/tech/networks/pics/mac addr.png)



### Unicast, Multicast, and Broadcast

Unicast: one to one communication. How? => If the least significant bit in the first octet of a destination address is set to zero, it means that Ethernet frame is intended for only the destination address. __but still all devices will receive the signal but they will discard it since it's not intended for them__

Multicast: one to multi(down't have to be all) communication. How? => If the least significant bit in the first octet of a destination address is set to one, it means you're dealing with a multicast frame. A multicast frame is similarly set to all devices on the local network signal. What's different is that it will be __accepted or discarded by each device depending on criteria aside from their own hardware MAC address.__ Network interfaces can be configured to accept lists of configured multicast addresses for these sort of communication.

Broadcast: one to all; Achieved by using a special destination address - broard cast address FF:FF:FF:FF:FF:FF

