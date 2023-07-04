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


---
# ChatBot Application

Welcome to the ChatBot Application! This application provides a conversational interface for interacting with email data stored in a database. The chatbot can be customized to suit different types of users, such as sales agents, entrepreneurs, and software engineers.

## Features

- Interact with email data stored in the database
- Customizable chatbot interface for different user types
- Sales agent-specific features
- Entrepreneur-specific features
- Software engineer-specific features

## Installation

1. Clone the repository: `git clone https://github.com/your-username/your-repo.git`
2. Install dependencies: `npm install`

## Usage

1. Set up the database connection and configure the chatbot according to your requirements. Refer to the documentation for detailed instructions.
2. Run the application: `npm start`
3. Access the application in your web browser at `http://localhost:3000`

## Configuration

The chatbot can be customized for different user types by modifying the `config.json` file. Refer to the documentation for details on how to customize the chatbot for each user type.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please create an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

