# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

Our client sends a request for that URL.
Our ISP uses DNS resolution to determine the IP address of the server at that URL.
Our client establishes a TCP connection to the server.
The server determines the appropriate response and returns it to our client.
Our client processes the response to display data on our screen.

## From start to finish, how does data reach you to be rendered in the browser?

The server at the address you requested will process your request and determine the appropriate response to return. This response could be a file, or it could be entirely generated on-the-spot by the server. The server sends a plain-text response to the client to let the client know that data is coming. The client receives the data and interprets it based on the type of the response and other parameters defined in the response. If the response is a webpage such as an HTML file, our client parses the file and renders it on the screen.

## What code is rendered in the browser?

Mostly HTML, CSS, and JavaScript.

## What is the server-side code’s main function?

The server-side code's main function is to determine the appropriate reaction to client requests. A server's reaction to a request may include requests to other servers as well as the response returned to the client.

## What is the client-side code’s main function?

The client-side code's main function is to display data on the client's screen, run client-side processes, and interact with the server and client device.

## What is runtime?

Runtime is when code is being executed.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

One instance is stored on a server. Another instance is created from the response returned to the browser. Another instance may be stored in browser cache. Another instance may be stored in a server-side cache for faster processing or fallback in case of downtime.

## How many instances of the server-side code are available at any given time?

It depends on the configuration of the application and the server, and the amount of traffic making requests to the address of the application/server. In some cases, such as in Kubernetes, several instances of an application run in a container at once. In many cases, load-balancing and scaling are used to handle heavy traffic by processing requests using many different servers in a network.

## How many instances of the databases connected to the server application are created?

It depends on the workload that the server is handling or expecting, and backup options. Multiple instances of a database may be needed if an application faces extreme workloads where too many CRUD operations are being made to a single database instance each second. Multiple instances may also be desired for backup in case of data loss or corruption, or for testing/development purposes.
