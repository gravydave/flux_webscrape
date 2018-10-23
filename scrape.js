/*
*The following functionality needs to be added or finished:
*
*   metaData parsing from HTML
*   file IO
*   pagination
*/

//DEPENDENCIES
const cheerio = require('cheerio');
const axios = require('axios');

//URL
const link = 'http://www.aph.gov.au/Parliamentary_Business/Bills_Legislation/Bills_before_the_House_of_Representatives?drt=2&drv=7&drvH=7&pnu=45&pnuH=45&f=30%2f08%2f2016&to=10%2f09%2f2018&ps=10&ito=1&q=&bs=1&pbh=1&bhor=1&pmb=1&g=1&st=1&sr=1';


const getWebsiteContent = async (link) => 
{
    try 
    {
        const response = await axios.get(link)
        const $ = cheerio.load(response.data)
        var rawBills = $('.search-filter-results').children();
        
        rawBills.map((i, el) => 
        {
            const shortName = $(el).find('h4')
            const metaData = $(el).find('dl').children() //The <dd> tags contain all relevant data except shortName
            
            //UNIMPLEMENTED
            //needs to be extracted from metaData
            const billDescript = null;
            const billURL = null;
            const billDate = null;
            
            console.log(shortName.text());
            console.log(metaData.text());

            //Bill object to be written to .json
            const billData =
            {
                shortName: shortName,
                billDescript: billDescript,
                billURL: billURL,
                billDate: billDate
            }
        })

        
    }
    
    catch (error) 
    {
        console.error(error)
    }
}
  

getWebsiteContent(link);