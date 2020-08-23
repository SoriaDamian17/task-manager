# Build a Task Manager
This project is Build a Task Manager using React / Context API / Hooks.

# Screen Shot
![Alt text](doc/screenshot.png?raw=true "ScreenShot")

## How to use the project locally

```bash
- Download the project
- cd golde-react-template
- npm install
- npm install -g babel-cli (if you don't have Babel installed globally)
- npm install -g webpack-cli (if you don't have Webpack installed globally)
- npm install -g webpack (if you don't have Webpack installed globally)
- npm install webpack-bundle-analyzer --save-dev
- npm install sass-loader mini-css-extract-plugin --save-dev
- npm run build:dll
- npm run start
- Go to: http://localhost:3000
```

## Run Linters
You can manually run the stylelinter and eslinter but you have husky configured in githook with precommit to run when you commit.

```bash
$ npm run lint || npm run lint:scss
```

you can omit the hook by adding the flag --no-verify

```bash
$ git commit -m "message" --no-verify
```

## Deploy your application in Docker
Lets build the docker image we just created. Make sure you are in the project root directory in your terminal and run the following command

```bash
$ docker build . -t react-docker
```

## Lets run container now

```bash
$ docker run -p 8000:80 react-docker
```

Now open http://localhost:8000 in your browser to check its running !

# Credits

## License
[MIT](https://choosealicense.com/licenses/mit/)