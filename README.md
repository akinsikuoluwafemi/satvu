# SatVu Frontend Coding Challenge

## Exercise details

In this excercise you will create a single page application in your front end framework
of choice, but using TypeScript, which allows to do the following:

- Following instructions you add to this README, we can start the app with minimal steps
- The app allows the user to do the following:
  1. An input address can be entered in the UI
  2. An input address can be given as a URL parameter
  3. Use a free forward geocoding API to search with that address (see note below)
  4. Show address information, including lat/long coordinates for that address

## Implementation Notes

How you display and style the application and output is up to you. We are more focussed
on the use of TypeScript in the project and showing ability to test the code you have
written.

You can use any libraries you would like to use to help achieve the outcome of this
test, we just want to get an insight into how you approach a problem and how you think.
Please be sure to add a section to the README detailing what you would have done next
having taken more time or what you feel you could have improved upon given the chance.

### Geocoding API

You can use any Geocoder you like. One option is [OSM's nominatim][nominatim docs],
which allows simple searches like [this][nominatim example].

[nominatim docs]: https://nominatim.org/release-docs/develop/api/Overview/
[nominatim example]: https://nominatim.openstreetmap.org/search?q=London&format=jsonv2

---

<br/>
<br/>
<br/>

## Start the APP.

```
  npm install && npm run dev
```

## Test the APP.

```
  npm run test
```

### To pass an address as a url param

```
 /?q=Turkey
```

## What I would have done if i had the opportunity to improve the app

1: I also plan to incorporate autocomplete and combobox features, enabling users to see the suggestions' display names as they type.
<br/>

2: I also intend to implement an onclick event for the suggestions list. Additionally, I'll create a suggestion detail component that allows users to view individual suggestions in more detail.
<br/>

3: I plan to include a map feature that, upon selecting a location, will place a marker on the map. The map will automatically pan to the newly selected location each time a new selection is made.
<br/>

4: I will utilize the Geolocation API to retrieve the user's location and calculate the distance between their current position and the searched location. Additionally, I will estimate the time of arrival by foot or car for the journey between their location and the searched destination.
<br/>

5: I will also capture the user's IP address to determine their geographical location and origin of the request.
<br/>

6: I will also provide directions on the map between the selected locations and the user's location.
<br/>

7: I will implement data persistence for the searched information on the user interface by utilizing local storage.
<br/>

8: I will store the search history, allowing me to access and display recent and previous searches on the user interface.
<br/>

9: I will also incorporate a prompt to gather information about the user's hobbies and other details. This will allow me to recommend interesting locations based on the user's preferences, which are in close proximity to their search location.
<br/>

10: I will also implement authentication for the app. This will involve sending a JWT token and additional payload to the frontend. This approach will enable users to have a personalized experience tailored to their preferences on the app.
