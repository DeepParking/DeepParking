# 🚘 DeepParking
## _Find the closest vacant parking spot, every time._

**DeepParking** is an _open-source solution_ for detecting vacant parking spots in indoor parking garages, and delivering real-time notifications to nearby drivers. Low-cost cameras are mounted throughout garages and mapped to locations of available parking spaces. State-of-the-art deep learning algorithms detect occupied spaces, and write the results to a Redis cache. As drivers enter the garage, they are routed to closest available free parking space.

With **DeepParking**, you'll never have to waste time hunting for a parking spot again!

![](https://github.com/DeepParking/DeepParking/blob/master/img/garage_directions.jpg)

---------------------------

### 📖 Technical Stack

![](https://github.com/DeepParking/DeepParking/blob/master/img/cardetectorgif.gif)

**DeepParking** prides itself on being a 100% open-source solution, from algorithm to web application.

#### [Web Application](https://github.com/DeepParking/DeepParking/tree/master/web)
[Angular](https://github.com/angular/angular) version 6.0.8.

#### [Deep Learning: Object Detection](https://github.com/DeepParking/DeepParking/tree/master/camera_gateway_api)
Leverages the state-of-the-art [YOLO](https://pjreddie.com/darknet/yolo/) v3 real-time object detection system.

#### Backends
Written in [Python 3.6.5](https://github.com/python) using [Flask](http://flask.pocoo.org/)

#### Persistent Store
[Redis](https://github.com/antirez/redis) - A blazing fast in-memory database with disk persistence.

#### [Scalable Deployment](https://github.com/DeepParking/DeepParking/tree/master/spots_api)
Docker, Kubernetes

----------------------------

### 📹 Hardware Configuration

For optimal results with **DeepParking**, we recommend using a camera configuration similar to the one shown below. No more than five parking spots should be visible for any single captured frame; a single camera with one degree of rotation can be used to monitor 10 parking spots. It is recommended that an image for each 5-space frame is captured every 15 to 20 seconds.

Estimated cost for 100-car garage: $150

![](https://github.com/DeepParking/DeepParking/blob/master/img/camera_config.jpg)

-----------------------------

### 👍 Project Team

* [**Haishi Bai**](https://twitter.com/HaishiBai2010) (_Principal Software Engineer_, Office of the Azure CTO)
* [**Yaron Schneider**](https://github.com/yaron2) (_Senior Software Engineer_, Office of the Azure CTO)
* [**Paige Bailey**](https://twitter.com/dynamicwebpaige) (_Senior Cloud Developer Advocate_, Cloud+AI)
