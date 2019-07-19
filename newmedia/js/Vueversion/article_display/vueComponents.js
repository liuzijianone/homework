/*************导航********************** */
Vue.component("app-header", {
  template:` 
    <div class="top-nav-box">
      <div class="top-nav-container">
        <div class="logo-box">
          <img class="logo" src="../../imgs/Vueversion/article_display/tigercheng.png" />
        </div>
        <ul class="nav-item-box">
          <li class="nav-item"><a href="#">首页</a></li>
          <li class="nav-item"><a href="#">国际</a></li>
          <li class="nav-item"><a href="#">军事</a></li>
          <li class="nav-item"><a href="#">财经</a></li>
          <li class="nav-item"><a href="#">民生</a></li>
          <li class="nav-item"><a href="#">科技</a></li>
          <li class="nav-item"><a href="#">百科</a></li>
          <li class="nav-item"><a href="#">问答</a></li>
          <li class="nav-item"><a href="#">视频</a></li>
          <li class="nav-item"><a href="#">直播</a></li>
        </ul>
        <div class="user-box">
          <span class="login-sign-container">
            <a href="#">登录 </a>/
            <a href="#">注册</a>
          </span>
        </div>
      </div>
    </div>
  `,
});
/*********************************** */

/***************最近文章************* */
var recentArticle = {
  template: `
    <div class="latest-article-box">
      <div class="title">小编最近文章</div>
      <ul class="latest-arti-list">
        <li class='latest-arti-item' v-for="info in news">
          <a href="#">{{info.brief}}</a>
          <span>{{info.time}}</span>
        </li>
      </ul>
    </div>
  `,
  data: function () {
    return {
      news: [
        {
          brief: "美媒把“勿谓言之不预”放头条了",
          time:"2019-05-30",
        },
        {
          brief: "华为在非洲也上了头条",
          time:"2019-05-30",
        },
        {
          brief: "史上最年轻领导人被罢免，竟因这段“通俄”视频曝光",
          time:"2019-05-30",
        },
        {
          brief: "华为外籍高管舌战美媒，全程高能！",
          time:"2019-05-30",
        },
        {
          brief: "勒庞“胜了”：马克龙，解散国民议会吧！",
          time:"2019-05-30",
        },
      ]
    }
  }
};
/*********************************** */

/**************所有评论***************** */
var allComment = {
  template: `
    <div class="all-comments">
      <div class="comment-title">全部评论</div>
      <div class="comments-container">
        <div class="comment-card" v-for="com in comment">
          <div class="comment-head">
            <img class="head-sculpture" v-bind:src="com.src" />
            <a class="pen-name" href="#">{{com.name}}</a>
            <span class="remarks">{{com.remarks}}</span>
          </div>
          <div class="comment-body">
            {{com.detail}}
          </div>
          <div class="comment-tail">
            <span class="comment-time">{{com.time}}</span>
            <div class="comment-btn-box">
              <span class="view-comments"><a href="#">查看回复 99+</a></span>
              <span class="report"><a href="#">举报</a></span>
              <span class="share"><a href="#">分享</a>
                <ul class="share-box">
                  <li class="share-icon"><img src="../../imgs/Vueversion/article_display/blog.png" />
                  </li>
                  <li class="share-icon"><img src="../../imgs/Vueversion/article_display/QQ.png" /></li>
                  <li class="share-icon"><img src="../../imgs/Vueversion/article_display/QQzone.png" />
                  </li>
                  <li class="share-icon"><img src="../../imgs/Vueversion/article_display/wechat.png" />
                  </li>
                </ul>
              </span>
              <span class="recomments"><a href="#">回复</a></span>
              <span class="dislike"><a href="#">踩</a><span>99+</span></span>
              <span class="like"><a href="#">赞</a><span>99+</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  data: function () {
    return {
      comment: [
        {
          src: "../../imgs/Vueversion/article_display/scholar2.jpg",
          name: "啊咧咧嘻",
          remarks: "起舞弄清影",
          detail:`咦，为嘛CNBC不提50年代初中国也用同样的话警告过米军？米军不听，进而爆发抗米援朝战争。。。
          不敢提吗？!!!!!!!!!!!！😂`,
          time:"1小时前"
        },
        {
          src: "../../imgs/Vueversion/article_display/scholar2.jpg",
          name: "啊咧咧嘻",
          remarks: "起舞弄清影",
          detail:`咦，为嘛CNBC不提50年代初中国也用同样的话警告过米军？米军不听，进而爆发抗米援朝战争。。。
          不敢提吗？！😂`,
          time:"1小时前"
        },
      ]
    }
  }
};
/*********************************** */

/**************我的评论***************** */
var myComment = {
  template: `
    <div class="my-comments">
      <div class="comment-title">我要评论</div>
      <div class="comment-box">
        <textarea placeholder="请输入评论..."></textarea>
        <div class="comment-write-box">
          <span class="publish-btn">发布</span>
        </div>
      </div>
    </div>
  `,
};
/*********************************** */

/*************热门评论***************** */
var hotComment = {
  template: `
    <div class="hot-comments">
      <div class="comment-title">热门评论</div>
      <div class="comments-container">
        <div class="comment-card" v-for="com in comment">
          <div class="comment-head">
            <img class="head-sculpture" v-bind:src="com.src" />
            <a class="pen-name" href="#">{{com.name}}</a>
            <span class="remarks">{{com.remarks}}</span>
          </div>
          <div class="comment-body">
            {{com.detail}}
          </div>
          <div class="comment-tail">
            <span class="comment-time">{{com.time}}</span>
            <div class="comment-btn-box">
              <span class="view-comments"><a href="#">查看回复 99+</a></span>
              <span class="report"><a href="#">举报</a></span>
              <span class="share"><a href="#">分享</a>
                <ul class="share-box">
                  <li class="share-icon"><img src="../../imgs/Vueversion/article_display/blog.png" />
                  </li>
                  <li class="share-icon"><img src="../../imgs/Vueversion/article_display/QQ.png" /></li>
                  <li class="share-icon"><img src="../../imgs/Vueversion/article_display/QQzone.png" />
                  </li>
                  <li class="share-icon"><img src="../../imgs/Vueversion/article_display/wechat.png" />
                  </li>
                </ul>
              </span>
              <span class="recomments"><a href="#">回复</a></span>
              <span class="dislike"><a href="#">踩</a><span>99+</span></span>
              <span class="like"><a href="#">赞</a><span>99+</span></span>
            </div>
          </div>
        </div> 
      </div>
    </div>
  `,
  data: function () {
    return {
      comment: [
        {
          src: "../../imgs/Vueversion/article_display/scholar2.jpg",
          name: "啊咧咧嘻",
          remarks: "起舞弄清影",
          detail:`咦，为嘛CNBC不提50年代初中国也用同样的话警告过米军？米军不听，进而爆发抗米援朝战争。。。
          不敢提吗？!!!!!!!!!!!！😂`,
          time:"1小时前"
        },
        {
          src: "../../imgs/Vueversion/article_display/scholar2.jpg",
          name: "啊咧咧嘻",
          remarks: "起舞弄清影",
          detail:`咦，为嘛CNBC不提50年代初中国也用同样的话警告过米军？米军不听，进而爆发抗米援朝战争。。。
          不敢提吗？！😂`,
          time:"1小时前"
        },
      ]
    }
  }
}
/*********************************** */

/**************相关推荐**************** */
var recom = {
  template: `
    <div class="related-recomendation">
      <div class="title">相关推荐</div>
      <div class="recomendations-box">
        <div class="recom-card" v-for="recom in recoms">
          <img class='recom-img' v-bind:src="recom.img" />
          <div class="recom-container">
            <span class="recom-title"><a href="#">{{recom.title}}</a></span>
            <span class="recom-tail">
              <span class="recom-time">{{recom.time}}</span>
              <span class="recom-source"><a href="#">{{recom.source}}</a></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  `,
  data: function () {
    return {
      recoms: [
        {
          img: "../../imgs/Vueversion/article_display/gg.gif",
          title: "日本女高中生怒抓痴汉，大爷路见不平一伸腿",
          time: "2019-05-29 17:18",
          source: "观察动物网",
        },
        {
          img: "../../imgs/Vueversion/article_display/gg.gif",
          title: "日本女高中生怒抓痴汉，大爷路见不平一伸腿",
          time: "2019-05-29 17:18",
          source: "观察动物网",
        },
        {
          img: "../../imgs/Vueversion/article_display/gg.gif",
          title: "日本女高中生怒抓痴汉，大爷路见不平一伸腿",
          time: "2019-05-29 17:18",
          source: "观察动物网",
        },
        {
          img: "../../imgs/Vueversion/article_display/gg.gif",
          title: "日本女高中生怒抓痴汉，大爷路见不平一伸腿",
          time: "2019-05-29 17:18",
          source: "观察动物网",
        },
      ],
    }
  },
};
/*********************************** */

/**************文章头部******************* */
var articleHead = {
  template: ` 
    <div class="article-head-box">
      <!-- 文章标题 -->
      <div class="article-title-box">
        <span class="article-title">
          {{articleInfo.title}}
        </span>
      </div>
      <!-- 文章标题 -->

      <!-- 文章作者介绍 -->
      <div class="author-box">
        <!-- <span class="author-img-box"> -->
        <img class="author-img" v-bind:src="articleInfo.authorImg" />
        <!-- </span> -->
        <span class="author-name-box">
          <a href="#">{{articleInfo.author}}</a>
        </span>
      </div>
      <!-- 文章作者介绍 -->

      <!-- 文章按钮区 -->
      <div class="article-btn-box">
        <span class="share-btn-box"><span>分享到：</span>
          <ul>
            <li class="share-btn"><img src="../../imgs/Vueversion/article_display/blog.png" /></li>
            <li class="share-btn"><img src="../../imgs/Vueversion/article_display/QQ.png" /></li>
            <li class="share-btn"><img src="../../imgs/Vueversion/article_display/QQzone.png" /></li>
            <li class="share-btn"><img src="../../imgs/Vueversion/article_display/wechat.png" /></li>
            <li class="share-btn"><img src="../../imgs/Vueversion/article_display/share.png" /></li>
          </ul>
        </span>

        <span class="special-btn-box">
          <ul>
            <li>
              <span class="spec-img"><img src="../../imgs/Vueversion/article_display/collect.png" /></span>
              <span class="spec-num collectCount">
                {{articleInfo.collectCount}}
              </span>
            </li>
            <li>
              <span class="spec-img"><img src="../../imgs/Vueversion/article_display/comment.png" /></span>
              <span class="spec-num commentCount">
                {{articleInfo.commentCount}}
              </span>
            </li>
          </ul>
        </span>
      </div>
      <!-- 文章按钮区 -->

      <!-- 文章介绍区 -->
      <div class="article-intro-box">
        <span class="article-time">
          {{articleInfo.articleTime}}
        </span>
        <!-- <span>fontsize</span> -->
        <span class="article-source">
          {{articleInfo.source}}
        </span>
      </div>
      <!-- 文章介绍区 -->

      <!-- 关键词 -->
      <div class="keywords-box">
        <span>关键字: &nbsp;&nbsp;</span>
        <ul class="keywords">
          {{articleInfo.keywords}}
        </ul>
      </div>
      <!-- 关键词 -->
    </div>
  `,
  props: {
    articleInfo: {
      type: Object,
      require:true,
    }
    
  }
};
/*************************************** */

/**************文章主体*************** */
var articleBody = {
  template: `
    <!-- 文章内容 -->
    <div class="article-body-box">
      <p class="word-p">
        {{articleInfo.detailFirst}}
      </p> 
      <p class="img-p">
        <img v-bind:src="articleInfo.imgSrc" />
        <span>{{articleInfo.imgBrief}}</span>
      </p> 
      <p class="word-p">
        {{articleInfo.detailSecond}}
      </p>
    </div>
    <!-- 文章内容 -->
  `,
  props: {
    articleInfo: {
      type: Object,
      require:true,
    }
   
  }
};
/************************************ */

/****************文章下部************ */
var articleTail = {
  template: `
    <div class="article-tail-box">
    <!-- 文章按钮区 -->
    <div class="article-btn-box">
      <span class="share-btn-box"><span>分享到：</span>
        <ul>
          <li class="share-btn"><img src="../../imgs/Vueversion/article_display/blog.png" /></li>
          <li class="share-btn"><img src="../../imgs/Vueversion/article_display/QQ.png" /></li>
          <li class="share-btn"><img src="../../imgs/Vueversion/article_display/QQzone.png" /></li>
          <li class="share-btn"><img src="../../imgs/Vueversion/article_display/wechat.png" /></li>
          <li class="share-btn"><img src="../../imgs/Vueversion/article_display/share.png" /></li>
        </ul>
      </span>
      <span class="special-btn-box">
        <ul>
          <li>
            <span class="spec-img"><img src="../../imgs/Vueversion/article_display/collect.png" /></span>
            <span class="spec-num collectCount">{{articleInfo.collectCount}}</span>
          </li>
          <li>
            <span class="spec-img"><img src="../../imgs/Vueversion/article_display/comment.png" /></span>
            <span class="spec-num commentCount">{{articleInfo.commentCount}}</span>
          </li>
        </ul>
      </span>
    </div>
    <!-- 文章按钮区 -->

    <!-- 文章标签 -->
    <div class="article-label-box">
      <span>标签</span>
      <a href="#">{{articleInfo.label}}</a> 
    </div>
    <!-- 文章标签 -->

    <!-- 责任声明 -->
    <div class="copyright-claim-box">
      <div>请支持独立网站，转发请注明本文链接：
        <a class="reprint-link" href="#">
          {{articleInfo.link}}
        </a>
      </div>
      <div class="editor">
        责任编辑:{{articleInfo.editor}}
      </div>
      <div>最后更新: {{articleInfo.updateTime}}</div> 
      </div>
    </div>  
    <!-- 责任声明 -->
  `,
  props: {
    articleInfo: {
      type: Object,
      require:true,
    }  
  }
}
/*********************************** */

/***************文章***************** */
var articleDeatil = {
  template: `
    <div>
      <articleHead v-bind:articleInfo="articleInfo"></articleHead>
      <articleBody v-bind:articleInfo="articleInfo"></articleBody>
      <articleTail v-bind:articleInfo="articleInfo"></articleTail>
    </div>
  `,
  components: {
    articleHead: articleHead,
    articleBody: articleBody,
    articleTail: articleTail,
  },
  data: function () {
    return {
      articleInfo: {
        title: "美媒把“勿谓言之不预”放头条了全球顶级技术学会IEEE封杀华为？我们采访到一位内部人士",
        author: "苏轼",
        authorImg: "../../imgs/Vueversion/article_display/scholar2.jpg",
        collectCount: 12,
        commentCount: 122,
        articleTime: "2019-05-30 08:25:42",
        keywords: "勿谓言之不预",
        source:"智库",
        detailFirst:`
          它是世界上最大的专业技术组织之一，
          是跟“电”相关的最主要的一个协会了，全称是电气电子工程师学会，
          涉及领域包括计算机、电子、电力、自动化等等，反正就是跟电相关的，
          跟信息相关的一个组织。然后，它旗下有很多期刊，我们所知道的跟电相关的最主要的期刊应该都在这里边。
        `,
        detailSecond:`
          它是世界上最大的专业技术组织之一，
          是跟“电”相关的最主要的一个协会了，全称是电气电子工程师学会，
          涉及领域包括计算机、电子、电力、自动化等等，反正就是跟电相关的，
          跟信息相关的一个组织。然后，它旗下有很多期刊，我们所知道的跟电相关的最主要的期刊应该都在这里边。
        `,
        imgSrc:"../../imgs/Vueversion/article_display/nj1.jpg",
        imgBrief: "南京眼",
        editor: "二麻子",
        link: "http://www.baidu.com",
        label: "贸易",
        updateTime:"2019-05-30 09:03:01",
      }
    }
  }

};
/************************************ */

/************页面主题左**************** */
var lContent = {
  template: `
    <!-- 左边内容区 -->
    <div class="main-content-box">

      <articleDeatil></articleDeatil>
      <!-- 最近文章 -->
      <recentArticle></recentArticle>
      <!-- 最近文章 -->

      <!-- 评论 -->
      <div class="comments-box">
        <!-- 热门评论 -->
        <hotComment></hotComment>
        <!-- 热门评论 -->

        <!-- 我要评论 -->
        <myComment></myComment>
        <!-- 我要评论 -->

        <!-- 全部评论 -->
        <allComment></allComment>
        <!-- 全部评论 -->
      </div>
      <!-- 评论 -->

      <!-- 相关推荐 -->
      <recom></recom>
      <!-- 相关推荐 -->
    </div>
    <!-- 左边内容区 -->
  `,
  
  components: {
    recom: recom,
    allComment: allComment,
    myComment: myComment,
    hotComment: hotComment,
    recentArticle: recentArticle,
    articleDeatil:articleDeatil,

  }
  
};
/********************************** */

/***********多媒体************* */
var mulitiMedia = {
  template: `
    <div class="column-box">
      <div class="column-title-box">
        <span class="column-title">全媒体栏目</span>
        <a class="col-more" href="#">查看全部</a>
      </div>
      <div class="columns">
        <div class="col-card" v-for="news in Info">
          <img class='col-img' v-bind:src='news.src'/>
          <div class="col-container">
            <span class="col-title">
              <a href="#">{{news.brief}}</a>
            </span>
            <span class="col-tail">评论 {{news.commentNumber}} </span>
          </div>
        </div>
      </div>
    </div>
  `,
  data: function () {
    return {
      Info: [
        {
          src: '../../imgs/Vueversion/article_display/gg.gif',
          brief: '日本女高中生怒抓痴汉，大爷路见不平一伸腿',
          commentNumber:"99+",
        },
        {
          src: '../../imgs/Vueversion/article_display/gg.gif',
          brief: '日本女高中生怒抓痴汉，大爷路见不平一伸腿',
          commentNumber:"99+",
        },
        {
          src: '../../imgs/Vueversion/article_display/gg.gif',
          brief: '日本女高中生怒抓痴汉，大爷路见不平一伸腿',
          commentNumber:"99+",
        },
        {
          src: '../../imgs/Vueversion/article_display/gg.gif',
          brief: '日本女高中生怒抓痴汉，大爷路见不平一伸腿',
          commentNumber:"99+",
        },
      ]       
    }
  }
  
}
/********************************* */

/***********页面主体右************* */
var rContent = {
  template: `
    <!-- 右边侧栏 -->
    <div class="side-content-box">
      <!-- 搜索框 -->
      <div class="row realtive-encyc-box">
        <div class="col-lg-12">
          <div class="input-group search-box">
            <input type="text" class="form-control" placeholder="请输入要搜索的内容">
            <span class="input-group-btn">
              <button id="search" class="btn btn-default" type="button" v-on:click="search">搜索</button>
            </span>
          </div><!-- /input-group -->
        </div><!-- /.col-lg-12 -->
      </div><!-- /.row -->
      <!-- 搜索框 -->

      <!-- 全媒体头条 -->
        <mulitiMedia></mulitiMedia>
      <!-- 全媒体头条 -->

      <!-- 全媒体头条 -->
        <mulitiMedia></mulitiMedia>
      <!-- 全媒体头条 -->
    </div>
    <!-- 右边侧栏 -->           
     
  `,
  methods: {
    search: function (e) {
      alert('搜索按钮');
    }
  },
  components: {
    mulitiMedia:mulitiMedia,
    
  }

  
};
/********************************* */

/**********页面主题内容*********** */
Vue.component("content-body", {
  props: {
  },
  data:function() {
    return {
    }
  },
  template:` 
    <div class="content-box">
      <div class="content-container clearfix">
        <leftContent></leftContent>
        <rightContent></rightContent>
      </div>
    </div>
  `,
  components: {
    leftContent: lContent,
    rightContent:rContent,
  },
});
/********************************** */

/***************版权声明*********** */
Vue.component("copyright", {
  props: {
  },
  data:function() {
    return {
    }
  },
  template:` 
    <div class="copyright-box">
      <div class="copyright-container">
        <ul class="webpage-link-box">
          <li class="link-item"><a href="#">联系我们</a></li>
          <li class="link-item"><a href="#">关于我们</a></li>
          <li class="link-item"><a href="#">版权声明</a></li>
          <li class="link-item"><a href="#">服务条款</a></li>
          <li class="link-item"><a href="#">刊登广告</a></li>
          <li class="link-item"><a href="#">加入我们</a></li>
          <li class="link-item"><a href="#">举报链接</a></li>
          <li class="link-item"><a href="#">《网站自律规范》</a></li>
        </ul>
        <div class="copyright">Copyright © 2018 观察者 All rights reserved。</div>
        <div class="contact">沪ICP备10213822号 互联网新闻信息服务许可证：31220170001 违法及不良信息举报电话：021-62376571</div>
      </div>
    </div>
  `,
  methods: {
  },
  components :{
  },
});
/************************** */



new Vue({
  el: "#app",
  data:function(){
    return {
    }
  }
});