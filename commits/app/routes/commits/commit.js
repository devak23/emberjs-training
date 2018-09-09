import Route from '@ember/routing/route';
import data from '../../data';

export default Route.extend({
    model: function (params) {
        window.console.log("model() @ routes/commits/commit.js");
        console.log("expecting Sha: ", params);
        console.log(data);
        // let records = data.filter(function(element) {
        //     return element.sha === params.sha;
        // });
        return params;
        // if (records) {
        //     console.log("sha: ", records[0].sha);
        //     console.log("author: ", records[0].commit.author);
        //     console.log("message: ", records[0].commit.message);
        //     console.log("avatarUrl: ", records[0].committer.avatar_url);
        //     return {
        //         sha: records[0].sha,
        //         authorName: records[0].commit.author.name,
        //         message: records[0].commit.message,
        //         avatarUrl: records[0].committer.avatar_url
        //     };
        // } else {
        //     console.log("No record found for the given params");
        //     return {};
        // }
    },
});