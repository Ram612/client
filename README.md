# Google sign in using Oauth and file uploader using AWS S3

This is a web page application were user can login using google Oauth and upload a files.

# Highlights

1. Built using React Js and created components for file uploads, file items , file listing
2. Used Scss for styling
3. Using Google Oauth.
4. Used Amazon Web Service S3 buckets for storing files.

# Cloning and Running the Application in local

Clone the project into local

```bash
git clone https://github.com/Ram612/client.git
```
Install all the npm packages. Go to the project folder and type the following command to install all npm packages

```bash
npm install
```

## Environment variables
create .env file to set your credentials

1. AWS_ACCESS_KEY_ID="your acces id"
2. AWS_SECRET_ACCESS_KEY=""
3. AWS_BUCKET_NAME=""
4. AWS_REGION=""

5. GOOGLE_CLIENT_ID=""

## Scripts
In order to run the application type the following command

```bash
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


Runs the app to upload files.\
Open [http://localhost:5000](http://localhost:5000) to view it in your browser.

open folder /backend run command below 

```bash
node server.js
```

The page will reload when you make changes.\
You may also see any lint errors in the console.
Server ruuning on port 5000


## Initial Output
Initial Screen too the user asking to sign in to the application

![Video transcription/translation app](https://github.com/Ram612/client/blob/a63fe76ad72b13b33cb2b4e2913411433a9ea313/public/images/Initial%20page%20for%20file%20uploader.png)

## Authentication View Output
Google Oauth view

![Video transcription/translation app](https://github.com/Ram612/client/blob/a63fe76ad72b13b33cb2b4e2913411433a9ea313/public/images/google%20Oauth%20for%20file%20uploader.png)

## File Uploader Output
File uploading view
![Video transcription/translation app](https://github.com/Ram612/client/blob/a63fe76ad72b13b33cb2b4e2913411433a9ea313/public/images/After%20authentication%20view.png)

## Final File uploaded View
Uploaded file views
![Video transcription/translation app](https://github.com/Ram612/client/blob/a63fe76ad72b13b33cb2b4e2913411433a9ea313/public/images/after%20file%20uploaded%20view.png)