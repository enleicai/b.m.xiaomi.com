/*
* router.js 路由设置
* */
define([
    'underscore',
    'backbone',
    'libs/mipu',
    'views/home/indexView',
    'views/home/yuyueView',
    'views/product/categoryView',
    'views/product/listView'
], function(_, Backbone, Mipu, IndexView, YuyueView, CategoryView, ListView){

    var AppRouter = Backbone.Router.extend({
        routes: {
            'home/index1': 'showIndex',
            'home/yuyue': 'showYuyue',
            'home/qianggou': 'showQianggou',
            'product/category': 'showProductCategory',
            'product/list/:cate_id': 'showProductList',
            'product/list/:cate_id/:adapt': 'showProductList',
            '*actions': 'showDefault'
        },
        initialize: function(){
            Backbone.history.start();
        },
        showIndex: function(){
            console.error('showIndex');
            IndexView.render();
        },
        showYuyue: function(){
            console.error('showYuyue');
            YuyueView.render();
        },
        showQianggou: function(){
            console.error('showQiangGou');
        },
        showProductCategory: function(){
            console.error('showProductCategory');
            CategoryView.render();
        },
        showProductList: function(cate_id){
            console.error('showProductList cate_id: '+cate_id);
            ListView.render(cate_id);
        },
        showDefault: function(actions){
            var self = this;
            Mipu.activityControl(actions, self, function(isActivity, res, that){
                if(isActivity){
                    that.nav('/home/'+res.activity_type);
                    return;
                }
                console.error('404: '+actions);
            });
        },
        nav: function(hash){
            this.navigate(hash, {trigger: true})
        }
    });

    return AppRouter;
});