//****************导航******************* */
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
//*********************************************/

//****************主体部分******************* */
Vue.component("content-body", {
  template: `
    <div class="content-box">
      <div class="content-container clearfix">
        <mainArticle></mainArticle>
        <sideBar></sideBar>
      </div>
    </div>
  
  `,
  components: {
    //***********左边文章*********** */
    mainArticle: {
      template:`
        <div class="main-encyc-box">
          <!-- 百科头部 -->
          <div class="encyc-header-box">
              <div class="encyc-title-box">
                  <span class="encyc-title">全媒体系统</span>
                  <span class="encyc-category">文化</span>
              </div>

              <div class="encyc-label-box clearfix">
                  <span class="tiny-label">媒体</span>
                  <span class="tiny-label">全媒体</span>
                  <span class="tiny-label">文化</span>
                  <span class="tiny-label">文化传媒</span>
              </div>
          </div>
          <!-- 百科头部 -->

          <!-- 百科主体 -->
          <div class="encyc-body-box">
              <p class="word-p">
                  它是世界上最大的专业技术组织之一，
                  是跟“电”相关的最主要的一个协会了，全称是电气电子工程师学会，
                  涉及领域包括计算机、电子、电力、自动化等等，反正就是跟电相关的，
                  跟信息相关的一个组织。然后，它旗下有很多期刊，我们所知道的跟电相关的最主要的期刊应该都在这里边。
              </p>

              <p class="word-p">
                  它是世界上最大的专业技术组织之一，
                  是跟“电”相关的最主要的一个协会了，全称是电气电子工程师学会，
                  涉及领域包括计算机、电子、电力、自动化等等，反正就是跟电相关的，
                  跟信息相关的一个组织。然后，它旗下有很多期刊，我们所知道的跟电相关的最主要的期刊应该都在这里边。
              </p>

              <p class="word-p">
                  它是世界上最大的专业技术组织之一，
                  是跟“电”相关的最主要的一个协会了，全称是电气电子工程师学会，
                  涉及领域包括计算机、电子、电力、自动化等等，反正就是跟电相关的，
                  跟信息相关的一个组织。然后，它旗下有很多期刊，我们所知道的跟电相关的最主要的期刊应该都在这里边。

                  它是世界上最大的专业技术组织之一，
                  是跟“电”相关的最主要的一个协会了，全称是电气电子工程师学会，
                  涉及领域包括计算机、电子、电力、自动化等等，反正就是跟电相关的，
                  跟信息相关的一个组织。然后，它旗下有很多期刊，我们所知道的跟电相关的最主要的期刊应该都在这里边。

                  它是世界上最大的专业技术组织之一，
                  是跟“电”相关的最主要的一个协会了，全称是电气电子工程师学会，
                  涉及领域包括计算机、电子、电力、自动化等等，反正就是跟电相关的，
                  跟信息相关的一个组织。然后，它旗下有很多期刊，我们所知道的跟电相关的最主要的期刊应该都在这里边。

                  它是世界上最大的专业技术组织之一，
                  是跟“电”相关的最主要的一个协会了，全称是电气电子工程师学会，
                  涉及领域包括计算机、电子、电力、自动化等等，反正就是跟电相关的，
                  跟信息相关的一个组织。然后，它旗下有很多期刊，我们所知道的跟电相关的最主要的期刊应该都在这里边。
              </p>

              <p class="word-p">
                  它是世界上最大的专业技术组织之一，
                  是跟“电”相关的最主要的一个协会了，全称是电气电子工程师学会，
                  涉及领域包括计算机、电子、电力、自动化等等，反正就是跟电相关的，
                  跟信息相关的一个组织。然后，它旗下有很多期刊，我们所知道的跟电相关的最主要的期刊应该都在这里边。
              </p>

              <p class="word-p">
                  它是世界上最大的专业技术组织之一，
                  是跟“电”相关的最主要的一个协会了，全称是电气电子工程师学会，
                  涉及领域包括计算机、电子、电力、自动化等等，反正就是跟电相关的，
                  跟信息相关的一个组织。然后，它旗下有很多期刊，我们所知道的跟电相关的最主要的期刊应该都在这里边。
              </p>
          </div>
          <!-- 百科主体 -->

          <!-- 百科尾部 -->
          <div class="encyc-tail-box">
              <span class="encyc-author">吕布</span>
              <span class="encyc-time">2019-06-04</span>
          </div>
          <!-- 百科尾部 -->
        </div>
          
      `
    },
  /************************************ */
  
  
    
    /*************右边侧边栏****************** */
    sideBar: {
      template: `
        <div class="side-encyc-box">
          <!-- 搜索框 -->
          <div class="row realtive-encyc-box">
            <div class="col-lg-12">
              <div class="input-group search-box">
                <input type="text" class="form-control" placeholder="请输入要搜索的内容">
                <span class="input-group-btn">
                  <button class="btn btn-default" type="button">搜索</button>
                </span>
              </div><!-- /input-group -->
            </div><!-- /.col-lg-12 -->
          </div><!-- /.row -->
          <!-- 搜索框 -->

          <!-- 相关词条 -->
          <div class="realtive-encyc-box">
            <div class="column-title-box">
              <span>相关词条</span>
            </div>
            <div class="encycs clearfix">
              <div class="encyc-card" v-for="Info in encycInfo"  v-bind:encycInfo="Info">
                <span class="col-img-box"><img v-bind:src="Info.src"></span>
                <span class="col-title"><a href="#">{{Info.name}}</a></span>
              </div>
            </div>
          </div>
          <!-- 相关词条 -->
        </div>
      `,
      data: function () {
        return {
          encycInfo: [
            {
              index:1,
              name: "全媒体",
              src:"../../imgs/Vueversion/article_display/news11.jpg"
            },
            {
              index:2,
              name: "全媒体",
              src:"../../imgs/Vueversion/article_display/news11.jpg"
            },
            {
              index:3,
              name: "全媒体",
              src:"../../imgs/Vueversion/article_display/news11.jpg"
            },
            {
              index:4,
              name: "全媒体",
              src:"../../imgs/Vueversion/article_display/news11.jpg"
            },
          ]
        }
      },
    }
  }
});
/*************************************** */

/**************版权声明********************** */
Vue.component("copyright", {
  template: `
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
   `
})

/*******************************************/

new Vue({
  el: "#app",
  data:function(){
    return {
    }
  }
});