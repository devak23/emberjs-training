import Route from '@ember/routing/route';
import data from '../../data';

export default Route.extend({
    model: function(params) {
        window.console.log("model() @ routes/commits/commit.js");
        console.log(data);
        return data;
    },
    // serialize: function(model) {
    //     return {sha: model.sha}
    // }
});