![alt text](https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg "Nasa") 
# planets-nasa

![GitHub language count](https://img.shields.io/github/languages/count/ajsaenz1091/planets-nasa) ![GitHub top language](https://img.shields.io/github/languages/top/ajsaenz1091/planets-nasa) ![Profile View Counter](https://komarev.com/ghpvc/?username=ajsaenz1091)

## About

I created this app with the purpose of consolidating recently aquired knowledge on NodeJS, specifically on using event emmiters to parse a CSV file downloaded from NASA's Exoplanet Archive [Exoplanet Archive](https://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=cumulative "Exoplanet Archive page"). The application converts a csv file into a read stream, which is then parsed to a write stream, both connected by a pipe. The result of the application is a list of planet "kepler_names" of those planets that are considered habitable according to some of the criteria described in this site [A review of planet habitability](https://www.centauri-dreams.org/2015/01/30/a-review-of-the-best-habitable-planet-candidates/ "centauri-dreams page")

## Run locally

 - Clone the repo into your local machine. instructions on how to clone a repo here - [clone repo guide](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository "Clone Repo")
 - On your terminal, navigate to your recently cloned repository and install the projects dependencies by running this command:
 
    `npm install`
    
 - Once your dependencies are installed, you can run the application with two posible commands, either one will work.
 
    `npm start` or `npm dev`
    
    Your result should look like this:
    
    
  [
  
  'planet name: Kepler-1652 b',
  
  'planet name: Kepler-1410 b',
  
  'planet name: Kepler-296 f',
  
  'planet name: Kepler-442 b',
  
  'planet name: Kepler-296 e',
  
  'planet name: Kepler-1649 b',
  
  'planet name: Kepler-62 f',
  
  'planet name: Kepler-452 b'
  
]
    
 
