# 🚘 DeepParking
## _Find the closest vacant parking spot, every time._

**DeepParking** is an _open-source solution_ for detecting vacant parking spots in indoor parking garages, and delivering real-time notifications to nearby drivers. Low-cost cameras are mounted throughout garages and mapped to locations of available parking spaces. State-of-the-art deep learning algorithms detect occupied spaces, and write the results to a Redis cache. As drivers enter the garage, they are routed to closest available free parking space.

With **DeepParking**, you'll never have to waste time hunting for a parking spot again!

![](https://github.com/DeepParking/DeepParking/blob/master/img/logo.jpg)
![](https://github.com/DeepParking/DeepParking/blob/master/img/garage_directions.jpg)

---------------------------

### 📖 Technical Stack

![](https://github.com/DeepParking/DeepParking/blob/master/img/cardetectorgif.gif)

**DeepParking** prides itself on being a 100% open-source solution, from algorithm to web application.

#### [Web Application](https://github.com/DeepParking/DeepParking/tree/master/web)
[Angular](https://github.com/angular/angular) version 6.0.8.

#### [Deep Learning: Object Detection](https://github.com/DeepParking/DeepParking/tree/master/camera_gateway_api)
Leverages the state-of-the-art [YOLO](https://pjreddie.com/darknet/yolo/) v3 real-time object detection system.

#### [Backends](https://github.com/DeepParking/DeepParking/tree/master/camera_gateway_api)
Written in [Python 3.6.5](https://github.com/python) using [Flask](http://flask.pocoo.org/)

#### Persistent Store
[Redis](https://github.com/antirez/redis) - A blazing fast in-memory database with disk persistence.

#### [Scalable Deployment](hhttps://github.com/DeepParking/DeepParking/tree/master/setup/kubernetes)
Docker, Kubernetes

----------------------------

### 📹 Hardware Configuration

For optimal results with **DeepParking**, we recommend using a camera configuration similar to the one shown below. No more than five parking spots should be visible for any single captured frame; a single camera with one degree of rotation can be used to monitor 10 parking spots. It is recommended that an image for each 5-space frame is captured every 15 to 20 seconds.

Estimated cost for 100-car garage: $150

![](https://github.com/DeepParking/DeepParking/blob/master/img/camera_config.jpg)

-----------------------------

### Usage

DeepPark is made up of the following components:

* Camera Gateway API - Receives images from cameras, performs vacant spot analysis on the images and pushes the results to Redis
* Spots API - External facing API that is used by the Web App to provide vacant parking spots info
* Web App - A web application for drivers that shows information about vacant parking spots
* Redis - stores results about parking areas, cameras and vacant spots for realtime querying

In order to set-up an environment locally, edit the area.json file that contains metadata about the parking lot and start a local Redis instance. <br>
Run the Python setup script:

```
$ python3 ./setup/setup_area.py --redis-host=localhost
```

The same script can be run on any accessible redis host to set-up the environment.

### Running on Kubernetes

DeepPark runs natively on Kubernetes.
To install DeepPark, simply run:

```
$ kubectl create -f ./setup/kubernetes
```

Thats it!
Wait for the following deployments to appear as running:

* camera-gateway-deployment
* camera-tester-deployment
* redis-deployment
* spots-deployment


#### Setup the parking lot on Redis

Forward traffic from the Redis service:

```
$ kubectl port-forward svc/redis-svc 6379:6379
```

Edit the area.json to your liking and run the setup script:

```
$ python3 ./setup/setup_area.py --redis-host=localhost
```

##### Get the External IP of the camera tester:

```
$ kubectl get svc camera-tester-svc
```

Point your browser window to the IP of the camera tester.

The Camera Tester App will ask for the IP address of the Camera Gateway API.
Get it with:

```
$ kubectl get svc camera-gateway-svc
```

*Note: The Camera Gateway API uses port 8080.*


###### Get the External IP of the driver app:

```
$ kubectl get svc driver-app-svc
```

Point your mobile device browser to the IP of the driver app.

Done!

-----------------------------

### 👍 Project Team

* [**Haishi Bai**](https://twitter.com/HaishiBai2010) (_Principal Software Engineer_, Office of the Azure CTO)
* [**Yaron Schneider**](https://github.com/yaron2) (_Senior Software Engineer_, Office of the Azure CTO)
* [**Paige Bailey**](https://twitter.com/dynamicwebpaige) (_Senior Cloud Developer Advocate_, Cloud+AI)
