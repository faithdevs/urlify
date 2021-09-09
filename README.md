# Sleet url shortener task

This project was developer with Nodejs, express and mongodb.

## Installation

1. Clone repository - `$ git clone https://github.com/faithdevs/urlify.git`
2. Move to the directory - `$ cd urlify`

3. Create a new file `.env` in `config` directory. if it doesn't exist and copy the contents of `.env.example` into it to be able to run your server on production environment.

4. Install dependencies `$ yarn install`.

## Running the server locally

1. Start up the server - Run `yarn start` | `yarn start:dev`

2. Server should be running on http://localhost:3333/ by default

## Routes

| Routes                   | Description                  | Payload                                              |
| ------------------------ | ---------------------------- | ---------------------------------------------------- |
| [GET] &nbsp; /           | Get all urls                 | none                                                 |
| [GET] &nbsp; /:urlId     | Redirect to the original url | none                                                 |
| [POST] &nbsp; /api/short | Create the url shortener     | `{ origUrl: 'https://github.com/faithdevs/urlify' }` |
