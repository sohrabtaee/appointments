# Appointments

1. Create a React application to fetch ​time_slots​ ​​for ​companies.​​ The attached JSON file represents data of:

- 3 ​companies
- each ​​company​​ ​contains ​id,​ ​​ ​name​, ​t​ ​ype​ ​​and ​​​time_slots
- each ​time_slot​ ​​contains a ​s​tart_time​​ ​and ​end_time
- start_time​ ​​and ​end_time​ ​​are represented in https://en.wikipedia.org/wiki/ISO_8601

2. Display the ​time_slots

- in a human readable way
- sorted by ​date​​ ​and ​time
- grouped by ​date
- scrollable

3. Allow users to set a ​reservation​​ ​for a t​ime_slot​​ ​by

- clicking on one of the ​time_slots
- display the ​reservation​ ​​above with the time of the selected ​time_slot
- highlight the selected ​time_slot
- allow to deselect a ​time_slot​​ ​to remove the ​reservation

4. Block all ​time_slots​ ​​in the same time range for other ​companies

## How to use the project

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
