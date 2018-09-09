
import DS from "ember-data";

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  books: DS.hasMany('book',{ async: true }),
  reviews: DS.hasMany("review",{ async: true })
});