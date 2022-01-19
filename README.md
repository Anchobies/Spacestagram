# Spacestagram: Image-sharing from the final frontier

## About

This is the web application that is hosted at https://space-stagram.herokuapp.com/.

It allows users to search through the [Astronomy Picture of the Day (APOD)](https://apod.nasa.gov/apod/astropix.html) archive and like the queried media (picture or video). 

The application is built with React frontend and Ruby on Rails backend. The APOD data is pulled from NASA's [APOD API](https://api.nasa.gov/). The documentation for this API can be found [here](https://github.com/nasa/apod-api).

## Features

- Browse the APOD API for media uploaded on queried dates
- Display queried media as thumbnails
- Select thumbnail to view more information about the media
- Like or unlike media
- Persist liked media through refresh
- Responsive capabilities

### Core Web Vitals

![Performance review of the Spacestagram App](https://user-images.githubusercontent.com/73362854/150217167-82f70152-7d74-48c9-b08a-4587664e76cc.png)

## Components Tree

```
App 
|
+-- Home.                   # Landing page 
|    |
|    +-- SearchBar.         # Search bar for homepage
|
+-- Search.                 # Search results page
    |
    +-- SearchBar.          # Search bar for search result page
    |
    +-- Media               # Queried media
        |
        +-- MediaModal.     # Pop-up window for each media
```
