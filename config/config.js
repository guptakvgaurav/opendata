/**
 * Created by ttnd on 26/2/16.
 */

var _ = require('lodash');

var BASE_URL = 'https://data.gov.in/api/datastore/resource.json',
    GET = 'get',
    BASIC_OPTIONS = {
        limit: null,
        fields: null,
        sort: null,
        join: null,
        offset: null,
        filters: null
    };

module.exports.apiConfig = {
    base_url: BASE_URL,
    COMPANY_MASTER_DATA_BIHAR : {
        description: 'Company Master Data of Bihar upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-bihar-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({resource_id: '3f328009-8f64-426d-9228-750a3fe8e326'}, BASIC_OPTIONS)
        }
    },
    BLOOD_BANK_DIRECTORY_2015 : {
        description: 'An api which provides blood bank details as of September 2015',
        documentation: 'https://data.gov.in/resources/blood-bank-directory-september-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: 'e16c75b6-7ee6-4ade-8e1f-2cd3043ff4c9' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_BIHAR_2015 : {
        description: 'Company Master Data of Bihar upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-bihar-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: '3f328009-8f64-426d-9228-750a3fe8e326' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_TELANGANA_2015 : {
        description: 'Company Master Data of Telangana upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-telangana-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: '071758ef-8b2b-4ff6-8774-bcf782214779' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_WB_2015 : {
        description: 'Company Master Data of W.B upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-west-bengal-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: 'ccd42a4e-b657-4244-a43f-a203e3cf7dd8' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_UP_2015 : {
        description: 'Company Master Data of Uttar Pradesh upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-uttar-pradesh-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: 'f8547c08-a7bf-4e85-b179-c57b5bd135a8' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_UK_2015 : {
        description: 'Company Master Data of Uttarakhand upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-uttarakhand-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: '74a2d302-e24f-42cf-b95c-ff279bcf133d' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_TRIPURA_2015 : {
        description: 'Company Master Data of Tripura upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-tripura-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: 'a1513fa4-007e-4085-a367-7a65562e9bf4' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_ODISHA_2015 : {
        description: 'Company Master Data of Odisha upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-odisha-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: '997ad190-4308-4d8e-808c-8148c2c9ed08' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_PUNDUCHERRY_2015 : {
        description: 'Company Master Data of Puducherry upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-puducherry-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: 'f4a928ea-757e-462c-957e-f783f6cfc206' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_PUNJAB_2015 : {
        description: 'Company Master Data of Punjab upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-punjab-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: '3bac7cea-66b4-49b0-b310-4cd730e28287' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_TN_2015 : {
        description: 'Company Master Data of Tamil Nadu upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-tamil-nadu-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: '73d8110b-4492-48b5-9f8b-b5bf2ce65261' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_MAHARASHTRA_2015 : {
        description: 'Company Master Data of maharashtra upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-maharashtra-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: 'd1ac29db-549d-44b2-9bea-28d6e449ff85' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_RAJASTHAN_2015 : {
        description: 'Company Master Data of Rajasthan upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-rajasthan-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: '133dd8f2-44b3-4a6d-a208-72b1030c51fb' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_MANIPUR_2015 : {
        description: 'Company Master Data of Manipur upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-manipur-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: '44486d32-3c20-41f4-9376-9f4ac360eaa1' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_MEGHALAYA_2015 : {
        description: 'Company Master Data of Meghalaya upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-meghalaya-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: '57ae016f-b67f-42dc-b473-2fdae3621f3b' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_MIZORAM_2015 : {
        description: 'Company Master Data of Mizoram upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-mizoram-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: '76fdab68-795b-42f4-bc6d-188442b3ff57' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_NAGALAND_2015 : {
        description: 'Company Master Data of nagaland upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-nagaland-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: '6a6e802c-66e2-47c2-ad20-4abc9289c85b' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_MP_2015 : {
        description: 'Company Master Data of madhya-pradesh upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-madhya-pradesh-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: 'f526be27-c0bf-4d99-b931-0f8e247e59d0' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_GUJRAT_2015 : {
        description: 'Company Master Data of gujarat upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-gujarat-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: '1ea03789-3147-4a39-a85e-22f4ca128689' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_HARYANA_2015 : {
        description: 'Company Master Data of haryana upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-haryana-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: 'fc0730f1-9736-409d-b3d8-0ac64122c225' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_HP_2015 : {
        description: 'Company Master Data of himachal-pradesh upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-himachal-pradesh-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: 'da1e82e7-fb09-48b3-96cb-8fd0411d4ee6' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_JnK_2015 : {
        description: 'Company Master Data of jammu-and-kashmir upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-jammu-and-kashmir-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: 'f8dd5590-8843-49be-9ae2-79c5b3e23ed0' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_JHARKHAND_2015 : {
        description: 'Company Master Data of jharkhand upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-jharkhand-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: 'b4eb9d9b-c8e7-4ec3-b564-e6a018f7249e' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_KARNATAKA_2015 : {
        description: 'Company Master Data of karnataka upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-karnataka-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: '080e668f-1e57-4376-8269-b41ca9c39cc6' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_KERALA_2015 : {
        description: 'Company Master Data of kerala upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-kerala-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: '071aa695-4a6e-4bb9-a109-6e9da1329967' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_LAKSHADWEEP_2015 : {
        description: 'Company Master Data of lakshadweep upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-lakshadweep-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: '37cb05be-4210-432d-a19a-423ebfe374dd' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_CHATTISGARH_2015 : {
        description: 'Company Master Data of chhattisgarh upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-chhattisgarh-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: '37cb05be-4210-432d-a19a-423ebfe374dd' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_DAMANnDIU_2015 : {
        description: 'Company Master Data of data-daman-and-diu upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-daman-and-diu-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: '6a0b8194-3e00-4a2b-908e-04470a1f98b3' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_DELHI_2015 : {
        description: 'Company Master Data of delhi upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-delhi-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: '6a0b8194-3e00-4a2b-908e-04470a1f98b3' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_GOA_2015 : {
        description: 'Company Master Data of goa upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-goa-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: '4dbe5667-7b6b-41d7-82af-211562424d9a' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_ASSAM_2015 : {
        description: 'Company Master Data of assam upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-assam-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: '6a48e198-1b5c-46e6-ad9e-789b231992c1' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_ARUNACHAL_PRADESH_2015 : {
        description: 'Company Master Data of arunachal-pradesh upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-arunachal-pradesh-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: '8173b4fa-001a-4891-9806-057d87a60fe8' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_ANDHRA_PRADESH_2015 : {
        description: 'Company Master Data of andhra-pradesh upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-andhra-pradesh-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: '006e6aff-6108-4bb6-ba60-ecd9b83a5280' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_ISLANDS_2015 : {
        description: 'Company Master Data of islands upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-islands-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: '6f1d971f-ea19-4bbe-b956-2568887c1f37' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_CHANDIGARH_2015 : {
        description: 'Company Master Data of chandigarh upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-chandigarh-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: 'df73b4ed-2355-4f2e-9392-4b3201bde8b3' }, BASIC_OPTIONS )
        }
    },
    COMPANY_MASTER_DATA_DADRA_NAGAR_HAVELI_2015 : {
        description: 'Company Master Data of dadra-nagar-haveli upto 31st March 2015',
        documentation: 'https://data.gov.in/resources/company-master-data-dadra-nagar-haveli-upto-31st-march-2015/api',
        params: {
            url: BASE_URL,
            method: GET,
            qs : _.merge({ resource_id: 'fe6081c0-a880-44b4-9acd-715d73b4032f' }, BASIC_OPTIONS )
        }
    }
};