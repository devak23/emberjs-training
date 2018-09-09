import Route from "@ember/routing/route";

export default Route.extend({
    model: function() {
        return {
            name: 'Ravi Kumar',
            bio: 'Great Artist',
            avatar: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg'
        }        
    }
});