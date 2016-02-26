# opendata
A library to get data from indian government's open data web services.

## Installation
npm install opendata

## Importing
`var OpenData = require('opendata');`

## Usage
```javascript

    govApi.go('COMPANY_MASTER_DATA_ANDHRA_PRADESH_2015', function (err, data) {
        if(err){
            console.log('Error --> ', err);
            return;
        }
        console.log('Data --> ', data);
    });

```

## Advanced usage
```javascript

    var options = { limit : 90 };           // pass the optional advanced api parameter
    govApi.go('COMPANY_MASTER_DATA_ANDHRA_PRADESH_2015', options, function (err, data) {
        if(err){

            console.log('Error --> ', err);
            return;
        }
        console.log('Data --> ', data);
    });

```


## supported apis are:
   - 'COMPANY_MASTER_DATA_BIHAR', <br/>
   - 'BLOOD_BANK_DIRECTORY_2015', <br/>
   - 'COMPANY_MASTER_DATA_BIHAR_2015', <br/>
   - 'COMPANY_MASTER_DATA_TELANGANA_2015', <br/>
   - 'COMPANY_MASTER_DATA_WB_2015',<br/>
   - 'COMPANY_MASTER_DATA_UP_2015',<br/>
   - 'COMPANY_MASTER_DATA_UK_2015',<br/>
   - 'COMPANY_MASTER_DATA_TRIPURA_2015',<br/>
   - 'COMPANY_MASTER_DATA_ODISHA_2015',<br/>
   - 'COMPANY_MASTER_DATA_PUNDUCHERRY_2015',<br/>
   - 'COMPANY_MASTER_DATA_PUNJAB_2015',<br/>
   - 'COMPANY_MASTER_DATA_TN_2015',<br/>
   - 'COMPANY_MASTER_DATA_MAHARASHTRA_2015',<br/>
   - 'COMPANY_MASTER_DATA_RAJASTHAN_2015',<br/>
   - 'COMPANY_MASTER_DATA_MANIPUR_2015',<br/>
   - 'COMPANY_MASTER_DATA_MEGHALAYA_2015',<br/>
   - 'COMPANY_MASTER_DATA_MIZORAM_2015',<br/>
   - 'COMPANY_MASTER_DATA_NAGALAND_2015',<br/>
   - 'COMPANY_MASTER_DATA_MP_2015',<br/>
   - 'COMPANY_MASTER_DATA_GUJRAT_2015',<br/>
   - 'COMPANY_MASTER_DATA_HARYANA_2015',<br/>
   - 'COMPANY_MASTER_DATA_HP_2015',<br/>
   - 'COMPANY_MASTER_DATA_JnK_2015',<br/>
   - 'COMPANY_MASTER_DATA_JHARKHAND_2015',<br/>
   - 'COMPANY_MASTER_DATA_KARNATAKA_2015',<br/>
   - 'COMPANY_MASTER_DATA_KERALA_2015',<br/>
   - 'COMPANY_MASTER_DATA_LAKSHADWEEP_2015',<br/>
   - 'COMPANY_MASTER_DATA_CHATTISGARH_2015',<br/>
   - 'COMPANY_MASTER_DATA_DAMANnDIU_2015',<br/>
   - 'COMPANY_MASTER_DATA_DELHI_2015',<br/>
   - 'COMPANY_MASTER_DATA_GOA_2015',<br/>
   - 'COMPANY_MASTER_DATA_ASSAM_2015',<br/>
   - 'COMPANY_MASTER_DATA_ARUNACHAL_PRADESH_2015',<br/>
   - 'COMPANY_MASTER_DATA_ANDHRA_PRADESH_2015',<br/>
   - 'COMPANY_MASTER_DATA_ISLANDS_2015',<br/>
   - 'COMPANY_MASTER_DATA_CHANDIGARH_2015',<br/>
   - 'COMPANY_MASTER_DATA_DADRA_NAGAR_HAVELI_2015'<br/>