import React,{Component} from 'react';
import {
    ListInfo,
    ListItem
} from '../style';
class List extends Component {
    render(){
        return(
            <div>
        <ListItem>
            <img 
                src ='https://upload-images.jianshu.io/upload_images/14318703-a45cd7fe41ba7874.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
                className='pic'
            />
            <ListInfo>
                <h3 className = 'title'>一款不错的个人私有云：NextCloud安装教程</h3>
                <p className = 'desc'>
                说明：现时越来越多云盘都接踵宣告关闭，差不多都去用百度云盘了，而咱们手上有些譬如蜜斯姐影片之类传上去就会被调和，因而咱们有必要伏笔VPS搭建个私...</p>
            </ListInfo>
        </ListItem>
        <ListItem>
        <img 
            src ='https://upload-images.jianshu.io/upload_images/14318703-a45cd7fe41ba7874.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
            className='pic'
        />
        <ListInfo>
            <h3 className = 'title'>一款不错的个人私有云：NextCloud安装教程</h3>
            <p className = 'desc'>
            说明：现时越来越多云盘都接踵宣告关闭，差不多都去用百度云盘了，而咱们手上有些譬如蜜斯姐影片之类传上去就会被调和，因而咱们有必要伏笔VPS搭建个私...</p>
        </ListInfo>
    </ListItem>
    </div>
        
        )
    }
}
export default List;