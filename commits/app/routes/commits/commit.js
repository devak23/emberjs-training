import Route from '@ember/routing/route';
import data from '../../data';

export default Route.extend({
    model: function (params) {
        window.console.log("model() @ routes/commits/commit.js");
        console.log("params for model(): ", params);
        var record = {}
        // let record = data.filter(function() {
            
        // });

        return {
            sha: params.sha,
            author: record.commit.author,
            message: record.commit.message
        };
    },
});