//DEPENDENCIES
const request = require('request');
const cheerio = require('cheerio');
const axios = require('axios');

//URL
const link = 'http://www.aph.gov.au/Parliamentary_Business/Bills_Legislation/Bills_before_the_House_of_Representatives?drt=2&drv=7&drvH=7&pnu=45&pnuH=45&f=30%2f08%2f2016&to=10%2f09%2f2018&ps=10&ito=1&q=&bs=1&pbh=1&bhor=1&pmb=1&g=1&st=1&sr=1';

//PARAMS
let pageCounter = 0;
let resultCount = 0;

const getWebsiteContent = async (link) => 
{
    try 
    {
        const response = await axios.get(link)
        const $ = cheerio.load(response.data)
        var rawBills = $('.search-filter-results').children();
        var metaData = [];
        
        rawBills.map((i, el) => 
        {
            const count = resultCount++
            const shortName = $(el).find('h4')
            
            /*
            *Need to cycle through the <dd> tags held in DL
            * CUrrently not working at all
            */
            const billURL = $(el).find('dl').children()
            
            
            
            console.log(billURL.text());
        })

        
    }
    
    catch (error) 
    {
        console.error(error)
    }
}
  

getWebsiteContent(link);




//REDUNTANT
function sleep(seconds)
{
    var e = new Date().getTime() + (seconds * 1000);
    while (new Date().getTime() <= e) {}
}