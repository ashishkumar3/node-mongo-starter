# Node Mongo Starter

The main purpose of this repository is to show a good end-to-end project setup and workflow for writing Node code with mongodb.

# Pre-reqs

To build and run this app locally you will need a few things:

- Install [Node.js](https://nodejs.org/en/)
- Install [MongoDB](https://docs.mongodb.com/manual/installation/)
- Install [VS Code](https://code.visualstudio.com/)

# Getting started

- Clone the repository

```
git clone https://github.com/ashishkumar3/node-mongo-starter.git <project_name>
```

- Install dependencies

```
cd <project_name>
npm install
```

- Run the project

```
npm start
```

Finally, navigate to `http://localhost:3000` and you should see the template being served and rendered locally!

- **Create a cloud database** -
  For local development, running MongoDB on localhost is fine, however once we deploy we need a database with high availability.
  The easiest way to achieve this is by using a managed cloud database.
  There are many different providers, but the easiest one to get started with is [MongoLab](#mlab).

## Building the project

It is rare for JavaScript projects not to have some kind of build pipeline these days, however Node projects typically have the least amount build configuration.
Because of this I've tried to keep the build as simple as possible.
If you're concerned about compile time, the main watch task takes ~2s to refresh.

### Running the build

All the different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
Npm scripts basically allow us to call (and chain) terminal commands via npm.
This is nice because most JavaScript tools have easy to use command line utilities allowing us to not need grunt or gulp to manage our builds.
If you open `package.json`, you will see a `scripts` section with all the different scripts you can call.
To call a script, simply run `npm run <script-name>` from the command line.
You'll notice that npm scripts can call each other which makes it easy to compose complex builds out of simple individual build scripts.
Below is a list of all the scripts this template has available:

| Npm Script | Description                                                       |
| ---------- | ----------------------------------------------------------------- |
| `start`    | Does the same as 'npm run serve'. Can be invoked with `npm start` |

# Dependencies

Dependencies are managed through `package.json`.
In that file you'll find two sections:

## `dependencies`

| Package           | Description                                     |
| ----------------- | ----------------------------------------------- |
| bcryptjs          | Library for hashing and salting user passwords. |
| bluebird          | Promise library                                 |
| body-parser       | Express 4 middleware.                           |
| dotenv            | Loads environment variables from .env file.     |
| express           | Node.js web framework.                          |
| express-session   | Express 4 middleware.                           |
| express-validator | Easy form validation for Express.               |
| mongoose          | MongoDB ODM.                                    |
| nodemailer        | Node.js library for sending emails.             |

| ejs | Template engine for Express. |

## `devDependencies`

| Package      | Description                                                           |
| ------------ | --------------------------------------------------------------------- |
| concurrently | Utility that manages multiple concurrent tasks. Used with npm scripts |
| jest         | Testing library for JavaScript.                                       |
| node-sass    | Allows to compile .scss files to .css                                 |
| nodemon      | Utility that automatically restarts node process when it crashes      |

To install or update these dependencies you can use `npm install` or `npm update`.

```

```
