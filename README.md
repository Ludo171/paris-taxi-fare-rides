# Paris Taxi Fare - Rides API

This node express server gives access to a mongoDB cluster storing collections of taxi rides.

CICD deploys new releases on a free Heroku instance.


## Demo : 
This API is available at https://paris-taxi-rides.herokuapp.com/

**Examples of request :**

```
GET https://paris-taxi-rides.herokuapp.com/rides
```

```
GET https://paris-taxi-rides.herokuapp.com/rides/{:id}
```

```
DELETE https://paris-taxi-rides.herokuapp.com/rides/{:id}
```

```
POST https://paris-taxi-rides.herokuapp.com/rides/
{
  "distance": 125.0,
  "duration": 2000,
  "startTime": "2020-06-19T13:01:17.031+00:00"
}
```

See repository [Paris Taxi Fare](https://github.com/Ludo171/paris-taxi-fare-frontend) to get access to live demo.


![API Diagram](./ArchitectureDiagrams/Diapositive1.PNG)

![API Diagram](./ArchitectureDiagrams/Diapositive3.PNG)


The 3 Github Repositories are public :
- [Client App ReactJs TypeScript](https://github.com/Ludo171/paris-taxi-fare-frontend)
- [Data Service NodeJs Express Mongoose](https://github.com/Ludo171/paris-taxi-fare-rides)
- [Pricing Service NodeJs Express](https://github.com/Ludo171/paris-taxi-fare-pricing)


# CICD
Simple CICD by using a github action file. Whenever a commit is pushed on master, if the CI pipeline succeeds, it automatically merges `master` into `release`.
The `release` branch is automatically deployed on an Heroku instance https://paris-taxi-rides.herokuapp.com/.

## Install
1. Clone the repository
2. `npm install`
3. `npm start`

The server should be up and running, and give access to the API.

