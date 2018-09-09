Primary concept is router

- Route loads Model
- Route sets model on the controller
- Route renders the view/component
- Controller sets state on View/component and Template
- View/Component renders the template.
- Mixin is basically multiple inheritance

var ScopeLosingObj3 = {
        text: "info from lexical scope",
        run: function () {
            setTimeout(() => {
                console.log("ES5: ", this);
            }, 1000);
        }
    };
    ScopeLosingObj3.run();


   var ScopeLosingObj4 = {
        text: "info from lexical scope",
        run: function () {
            setTimeout(function() {
                console.log("ES5: ", this);
            }, 1000);
        }
    };
    ScopeLosingObj4.run();

    var scope = "global"
    function a() {
        console.log(scope);
        var scope = "local";
        console.log(scope);
    }
    a();


index.html then
app.js then
router (router.js) then it knows what strings to match
that leads to path where the artifacts are stored.
Go to routes folder and pickup the corresponding js file (ex: '/products', products.js)
the routes mostly 
model, controller then
templates then
application.hbs