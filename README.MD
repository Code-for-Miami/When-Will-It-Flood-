DEPRECATED SEE [KING TIDE](https://codeclimate.com/github/Code-for-Miami/)

# Will It Flood?
[![Code Climate](https://codeclimate.com/github/Code-for-Miami/When-Will-It-Flood-/badges/gpa.svg)](https://codeclimate.com/github/Code-for-Miami/When-Will-It-Flood-) [![Issue Count](https://codeclimate.com/github/Code-for-Miami/When-Will-It-Flood-/badges/issue_count.svg)](https://codeclimate.com/github/Code-for-Miami/When-Will-It-Flood-)

## What
This application lets residents of the state of Florida enter their address and view a calendar of dates for the highest high tides, known as the King Tides, in their area. Users may adjust the height of what they wish to identify as King Tides from 2.5 feet to 5.0 feet. The default is 2.5 feet.

#### Status
We are still working on the fucntionality. Our soft launch is September 2017, our official launch is October 12, 2017. [CHANGELOG](https://github.com/cfpb/ckan/blob/master/CHANGELOG.md).

#### Press
We do not have any press about this project yet, but an earlier FIU project developed in conjunction with Code for Miami has had a lot of press. See, for example: https://weather.com/news/climate/news/eyes-on-the-rise-map.

## Why
Miami is the US metropolitan area most at risk for sea level rise. This project is designed to help citizens anticipate when the tides are at their highest (called the "King Tides"), and document flooding during the highest high tides.

## Who
This project is a collaboration of Florida International University's College of Communication, Architecture and the Arts and Code for Miami. Dr. Susan Jacobson, a professor in FIU's School of Communication & Journalism and a long-time member of Code for Miami, is the lead, but many members of Code for Miami have significantly contributed to this project, including:
* Pablo Barria
* Chris Scott
* Bryce Kerley
* Julie Kramer
* Yamileth Medina
* Ernie Hsuing

## MILESTONES
Below are some of the events where we are planning on deploying these applications.

•	Monday, Sept. 18 Training of community organizers to document King Tides, including water quality measurements, with Community Health Maps in Shorecrest, location TBD. 
•	Tuesday, Sept. 19 – Community organizers go out to document flooding in Shorecrest. High tides is 9:25am - 2.94ft. They need video documentation of the water quality measurement and of the event.
•	Wednesday, Sept. 20 -  Community organizers go out to document flooding in Shorecrest. High tides 10:11am - 2.97ft. They need video documentation of the water quality measurement and of the event.

•	Saturday, Oct. 7 -  Community organizers, who have trained citizens, lead citizens to document flooding in Shorecrest. High tides 10:11am - 2.97ft. They need video documentation of the water quality measurement. They need video documentation of the water quality measurement and of the event.

•	Thursday, October 12 – CLIMA Show opens.

•	Saturday, October 21 the CLIMA extravaganza, based in Pinecrest Gardens. Organize citizens to leave from Pinecrest Gardens to document King Tide flooding:
o	Mattheson Hammock - 11:16am, 2.62ft
o	Virginia Key - 10:27am, 2.78ft
o	Shorecrest - 11:09am, 2.9ft
o	Whole Foods, Alton Road - 10:14am, 3.4ft
o	Sewell Park - 10:46am, 2.99ft

•	Saturday, November 4 - Sea Level Solutions Day Extravaganza! The tides will be high.
o	Government Cut - 9:21am, 3.36ft

## How
#### Dependencies
This application draws upon data from annual tide predictions posted by NOAA: https://tidesandcurrents.noaa.gov/tide_predictions.html?gid=1397#listing. As of July 2017, we have data that goes through the end of the year. Links to other [How To's](https://github.com/codeforamerica/howto) will help.

#### Install
You should install the following:
* index.html
* tides folder
* css folder
* js folder
* images folder

#### Deploy
To deploy the Will It Flood? application, you must get an API Key from Google Maps: https://developers.google.com/maps/documentation/javascript/get-api-key

If you live in a state other than Florida, you may swap out the files in the tides folder to reflect the tide stations in your state (https://tidesandcurrents.noaa.gov/tide_predictions.html?gid=1397#listing) and swap out the latitude and longitude in stations.json to the latitude and longitude of your state's tide stations.

## Contribute
A short explanation of how others can contribute. Be sure to show how to submit issues and pull requests. Include a [CONTRIBUTING.md file](https://github.com/18F/hub/blob/master/CONTRIBUTING.md). Here is a good [CfA example](https://github.com/codeforamerica/ohana-web-search/blob/master/CONTRIBUTING.md). GitHub also has some new guides on [how to contribute](https://guides.github.com/activities/contributing-to-open-source/#contributing).

## License
A link to the Code for America copyright and [LICENSE.md file](https://github.com/codeforamerica/ceviche-cms/blob/master/LICENCE.md).
