var keystone = require('keystone');
var Types = keystone.Field.Types;

var Home = new keystone.List('Home', {
    autokey: { from: 'title', path: 'slug' },
});

Home.add({
    title: { type: String},
    name: {type: String},

    heading:{
        one:{type: String},
        two:{type: String},
        three:{type: String},
        four:{type: String},
        five:{type: String},
        six:{type: String},
    },

    image : {
        one:{type: String},
        two:{type: String},
        three:{type: String},
        four:{type: String},
        five:{type: String},
        six:{type: String},
        seven:{type: String},
        eight:{type: String},
        nine:{type: String},
        ten:{type: String},
        eleven:{type: String},
        twelve:{type: String},
        thirteen:{type: String},
        fourteen:{type: String},
        fifteen:{type: String},
        sixteen: {type: String},
        seventeen:{type: String},
        eightteen:{type: String},
        
        
       
    },        
 content: {
		one: { type: Types.Html, wysiwyg: false, height: 150 },
		two: { type: Types.Html, wysiwyg: false, height: 150 },
        three: { type: Types.Html, wysiwyg: false, height: 150 },
		four: { type: Types.Html, wysiwyg: false, height: 150 },
        five: { type: Types.Html, wysiwyg: false, height: 150 },
        six: { type: Types.Html, wysiwyg: false, height: 150 },
        seven: { type: Types.Html, wysiwyg: false, height: 150 },
     

},
      
     

});

Home.defaultColumns = 'title';

Home.register();