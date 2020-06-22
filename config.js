var tableArray = [
  {id:0, name:'IT Portfolio', url:'https://itdashboard.gov/api/v1/ITDB2/dataFeeds/portfolio'}, 
  {id:1, name:'Life Cylce Cost', url:'https://itdashboard.gov/api/v1/ITDB2/dataFeeds/lifeCycleCosts'}, 
  {id:2, name:'Investment Trends', url:'https://itdashboard.gov/api/v1/ITDB2/dataFeeds/investmentTrends'}
];

var agencyID = '';
var tableID = '';

var fieldSchema ={ 
  0: [
  {name: "agencyCode", type:'text'},
  {name: "agencyName", type:'text'},
  {name: "previousUII", type:'text'},
  {name: "uniqueInvestmentIdentifier", type:'text'},
  {name: "sharedServicesCategory", type:'text'},
  {name: "sharedServicesIdentifier", type:'text'},
  {name: "lobTitle", type:'text'},
  {name: "missionSupportInvestmentCategory", type:'text'},
  {name: "bureauCode", type:'text'},
  {name: "bureauName", type:'text'},
  {name: "partOfITPortfolio", type:'text'},
  {name: "missionDeliveryAndManagementSupportArea", type:'text'},
  {name: "typeOfInvestment", type:'text'},
  {name: "nationalSecuritySystemsIdentifier", type:'text'},
  {name: "infrastructureManagementCategory", type:'text'},
  {name: "investmentTitle", type:'text'},
  {name: "investmentDescription", type:'text'},
  {name: "plannedAcquisitions", type:'text'},
  {name: "publicUrls", type:'text'},
  {name: "feaBRMservicesPrimaryServiceArea", type:'text'},
  {name: "totalITspendingPY", type:'number'},
  {name: "totalITspendingCY", type:'number'},
  {name: "totalITspendingBY", type:'number'},
  {name: "DME_PY_AgencyFunding", type:'number'},
  {name: "DME_PY_Contributions", type:'number'},
  {name: "DME_CY_AgencyFunding", type:'number'},
  {name: "DME_CY_Contributions", type:'number'},
  {name: "DME_BY_AgencyFunding", type:'number'},
  {name: "DME_BY_Contributions", type:'number'},
  {name: "DME_BY_BudgetAuthority", type:'number'},
  {name: "OM_PY_AgencyFunding", type:'number'},
  {name: "OM_PY_Contributions", type:'number'},
  {name: "OM_CY_AgencyFunding", type:'number'},
  {name: "OM_CY_Contributions", type:'number'},
  {name: "OM_BY_AgencyFunding", type:'number'},
  {name: "OM_BY_Contributions", type:'number'},
  {name: "OM_BY_BudgetAuthority", type:'number'},
  {name: "cloudComputingAlternativesEvaluation", type:'number'},
  {name: "totalCloudPaaSIaaSCostCY", type:'number'},
  {name: "totalCloudSaaSCostCY", type:'number'},
  {name: "totalOtherManagedServicesCostCY", type:'number'},
  {name: "budgetYear", type:'number'},
  {name: "derivedStatus", type:'text'},
  {name: "updatedDate", type:'text'},
  {name: "updatedTime", type:'text'}
    ],
  1 : [
  {name: "uniqueInvestmentIdentifier", type:'text'},
  {name: "businessCaseID", type:'text'},
  {name: "investmentType", type:'text'},
  {name: "infrastructureManagementCategory", type:'text'},
  {name: "agencyCode", type:'text'},
  {name: "agencyName", type:'text'},
  {name: "investmentTitle", type:'text'},
  {name: "planningBudgetaryResourcesPY1andPrior", type:'number'},
  {name: "planningBudgetaryResourcesPY", type:'number'},
  {name: "planningBudgetaryResourcesCY", type:'number'},
  {name: "planningBudgetaryResourcesBY", type:'number'},
  {name: "dmeBudgetaryResourcesPY1andPrior", type:'number'},
  {name: "dmeBudgetaryResourcesPY", type:'number'},
  {name: "dmeBudgetaryResourcesCY", type:'number'},
  {name: "dmeBudgetaryResourcesBY", type:'number'},
  {name: "dmeGovernmentFTECostsPY1andPrior", type:'number'},
  {name: "dmeGovernmentFTECostsPY", type:'number'},
  {name: "dmeGovernmentFTECostsCY", type:'number'},
  {name: "dmeGovernmentFTECostsBY", type:'number'},
  {name: "omdBudgetaryResourcesPY1andPrior", type:'number'},
  {name: "omdBudgetaryResourcesPY", type:'number'},
  {name: "omdBudgetaryResourcesCY", type:'number'},
  {name: "omdBudgetaryResourcesBY", type:'number'},
  {name: "omdGovernmentFTECostsPY1andPrior", type:'number'},
  {name: "omdGovernmentFTECostsPY", type:'number'},
  {name: "omdGovernmentFTECostsCY", type:'number'},
  {name: "omdGovernmentFTECostsBY", type:'number'},
  {name: "governmentFTENumberPY1andPrior", type:'number'},
  {name: "governmentFTENumberPY", type:'number'},
  {name: "governmentFTENumberCY", type:'number'},
  {name: "governmentFTENumberBY", type:'number'},
  {name: "priorYearCostChangePY", type:'number'},
  {name: "priorYearCostChangeCY", type:'number'},
  {name: "priorYearCostPercentageChangePY", type:'number'},
  {name: "priorYearCostPercentageChangeCY", type:'number'}
  ]
};


function getAgency(){
  var url = 'https://itdashboard.gov/api/v1/ITDB2/dataFeeds/agency';
  var requestResponse = $.getJSON(url, data funciton(data) );
  
  if (requestResponse.getResponseCode() === 200) {
    agency_array = JSON.parse(requestResponse.getContentText()).result;
  }
  return agency_array;
}
