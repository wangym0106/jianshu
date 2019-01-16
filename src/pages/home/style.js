import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    float:left;
    width: 625px;
    margin-top: 30px;
    margin-left:15px;
    .banner-img{
        width:625px;
        height:270px;
    }
    `;
export const HomeRight = styled.div`
    float:right;    
    width: 240px;

`;
export const TopicWapper = styled.div`
    overflow:hidden;
    padding:20px 0 10px 0;
    margin-left:18px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float:left;
    height: 32px;
    line-height:32px;
    margin-left:18px;
    margin-bottom:18px;
    padding-right:10px;
    background:#f7f7f7;
    font-size:14px;
    color:$000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    .topic-pic{
        display:block;
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
    }
`;
export const ListItem = styled.div`
    overflow:hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic{
        display: block;
        width:120px;
        height：100px;
        float:right;
        border-top: 10px;
        border-radius:10px; 

    }
    
`;
export const ListInfo = styled.div`
    width:500px;
    float:left;
    .title{
        font-size:18px;
        line-height:27px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        font-size:13px;
        line-height:24px;
        color:#999;
    }
`;