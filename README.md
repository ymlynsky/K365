# K365

Acts of Random Kindness

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


### Installing

First, setup the DB:

```
brew install mongodb
mkdir -p /data/db
mongod
```

Then run the following commands in a new terminal:
```
mongo
use K365
exit
```

Then you can clone the project:
```
git clone https://github.com/ymlynsky/K365.git
```

Then

```
npm install
```

## Running the backend

You can use nodemon or just node

```
node server
```
