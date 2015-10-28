Napagram.Views.PostIndexItem = Backbone.CompositeView.extend({
  tagName: "li",
  template: JST["media/post_index_item"],

  initialize: function(){
    this.listenTo(this.model, "sync", this.render);
    // this.renderComments();
    // this.listenTo(this.model.comments(), "add", this.addCommentView);
    // this.listenTo(this.model.like(), "change", this.render);
    // this.listenTo(this.model.comments(), "remove", this.removeCommentView);
    this.listenTo(this.model, "change:num_likes", this.render);
  },

  render: function(){
    this.$el.html(this.template({post: this.model}));
    this.attachSubviews();
    return this;
  },

  // renderComments: function(){
  //   var comments = this.model.comments();
  //   comments.each(function(comment){
  //     addCommentView(comment);
  //   }.bind(this));
  // },
  //
  // addCommentView: function(comment){
  //   var subview = new Napagram.Views.CommentShow({
  //     model: comment
  //   })
  //   this.addSubview('.comments', subview);
  // },
  //
  // removeCommentView: function(comment){
  //   this.removeModelSubview('.comments', comment);
  // },

});
