## Setting up push subscription
https://cloud.google.com/pubsub/docs/create-push-subscription#pubsub_create_push_subscription-rest


```sh
PUT https://pubsub.googleapis.com/v1/projects/PROJECT_ID/subscriptions/SUBSCRIPTION_ID
Authorization: Bearer ACCESS_TOKEN

{
  "topic": "projects/PROJECT_ID/topics/TOPIC_ID",
  // Only needed if you are using push delivery
  "pushConfig": {
    "pushEndpoint": "PUSH_ENDPOINT"
  }
}
```