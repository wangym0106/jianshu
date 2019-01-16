import { fromJS } from 'immutable';
const defaultState =fromJS( {
   topicList:[{
       id:1,
       name:'社会热点',
       imageUrl:'https://upload.jianshu.io/admin_banners/web_images/4602/249f8f28449b109dfd49c10347d654abada7fbfe.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
   },
   {
    id:2,
    name:'手绘',
    imageUrl:'https://upload.jianshu.io/admin_banners/web_images/4602/249f8f28449b109dfd49c10347d654abada7fbfe.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
}
]
});
export default (state = defaultState , action  ) => {
    switch(action.type) {
        default:
             return state;
    }
}