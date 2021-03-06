/**
 * listView.js 分类列表页
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'libs/mipu',
    'libs/util',
    'text!templates/product/listTemplate.html',
    'text!templates/product/listItemTemplate.html'
], function($, _, Backbone, Mipu, Util, ListTemplate, ListItemTemplate){

    var ListView = Backbone.View.extend({
        el: $('#viewbody'),
        render: function(cate_id){
            this.getData(cate_id, function(res, self){
                debugger;
            });
//            var options = {
//                url: '/product/list',
//                param: {
//                    'cateid': cate_id
//                },
//                that: this
//            };
//            Mipu.request(options, function(res, self){
//                var compileTemplate, itemsTemplate;
//                compileTemplate = $.tmpl(ListTemplate, res.data);
//                itemsTemplate = self.renderItems(res.data);
//                self.$el.html(compileTemplate);
//                debugger;
//            });
        },
        getData: function(cate_id, callback){
            var options = {
                url: '/product/list',
                param: {
                    'cateid': cate_id
                },
                that: this
            };
            Mipu.request(options, function(res, self){
                callback(res, self);
            });
        },
        renderItems: function(product){
            var compileTemplate = $.tmpl(ListItemTemplate, product);
            return compileTemplate;
        }
    });

    return new ListView;
});
