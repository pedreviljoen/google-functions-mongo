# init

[![Greenkeeper badge](https://badges.greenkeeper.io/pedreviljoen/google-functions-mongo.svg)](https://greenkeeper.io/)

<div align="center">
  <img src="assets/init_logo.jpg" width="70%">
</div>

# Google functions

This is a simple example of a Google Functions implementation that creates a user in an cloud mongoDB instance.

## MongoDB provider

There are a few providers of cloud MongoDB instances, there free tier is more than enough to setup and play around with to get the hang off.

In this case I used [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). Their free tier resources can be found [here](https://www.mongodb.com/cloud/atlas/pricing).

You will need to create an account and follow these [steps](https://docs.mongodb.com/manual/tutorial/atlas-free-tier-setup/) to setup a cluster and get going easy & pain-free.

Thereafter you need to be able to connect to your cluster. One way of doing so, is through a connection string. The last step of the above mentioned guide, shows a simple implementation thereof.

## Google functions

Google Cloud Functions makes it easy for developers to run and scale code in the cloud and build event-driven serverless applications. Some of the basic docs can be found [here](https://cloud.google.com/functions/docs/). Get started very quickly after reading through [this](https://cloud.google.com/functions/docs/quickstarts) with a bunch of [how-to guides](https://cloud.google.com/functions/docs/how-to), and [tutorials](https://cloud.google.com/functions/docs/tutorials/).

Happy building!

