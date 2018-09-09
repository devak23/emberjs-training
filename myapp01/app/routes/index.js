import Route from '@ember/routing/route';

export default Route.extend({
    model: function() {
        let  companies = [{
            "name" : "Google",
            "headquarters": "Mountain View",
            "revenue":"59b"
            },{
              "name" : "Facebook",
              "headquarters":"Menlo Park",
              "revenue":"7b"
            },{
              "name" : "twitter",
              "revenue": "664m",
              "headquarters":"San Francisco"
            }];
        
        let headers = ["Company", "Headquarters", "Revenue"];
        
        return { companies, headers, 
            color: 'red',         
            customer: {
                firstName: 'Abhay',
                lastName: 'Kulkarni'
            }        
        };
    }
});