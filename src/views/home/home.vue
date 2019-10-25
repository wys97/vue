
<style scoped>
.home {
  width: 100%;
  height: 100%;
}
.home_order_wrap {
  margin: 0 0 0.6375rem 0;
  background: #2f2f30;
  padding: 0.9375rem 1.25rem;
}

.conten_right {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.425rem 0;
}

.order_img {
  width: 5.65625rem;
  height: 3.96875rem;
  margin-right: 0.625rem;
}
.order_hint {
  height: 2.225rem;
  text-align: center;
}
</style>

<template>
  <div class="home">
    <div class="home_order_wrap" v-for="item in orderData" :key="item.index" @click="goOrder(item)">
      <div class="home_conten_left">
        <span class="order_storeName">{{item.storeName}}</span>
        <span class="order_state" v-if='item.state==1'>已支付</span>
        <span class="order_state" v-if='item.state==2'>已取消</span>
        <span class="order_state" v-if='item.state==3'>待支付</span>
        <span class="order_state" v-if='item.state==4'>申请退款</span>
        <span class="order_state" v-if='item.state==5'>退款处理中</span>
      </div>
      <div class="conten_right">
        <img :src="item.dishesUrl" class="order_img" />
        <div class="order_message">
          <p class="order_dishesName">{{item.dishesName}}</p>
          <p class="order_number">共{{item.orderNum}}件商品</p>
          <p class="order_time">下单时间:{{item.createTime}}</p>
        </div>
      </div>
    </div>
    <div class="order_hint" v-if="hint==1">{{cue.state1}}</div>
    <div class="order_hint" v-if="hint==2">{{cue.state2}}</div>
  </div>
</template>

<script>
import Common from "@/common.js";
export default {
  data() {
    return {
      orderData: [], //列表数据
      page: 1, //上拉加载数据的页
      trigger: true, //防重复加载
      hint: 0,
      cue: {
        state1: "加载中...",
        state2: "没有数据了..."
      },
      LazyLoading:true,  //延时加载
    
    
    };
  },

  methods: {
    getCityList(page) {
      // console.log(page)
      //请求参数
      let data = {
        // userId: "41996",
        userId: 41567,
        page: page,
        pageSize: "10"
      };
      //axios请求数据
      this.$axios
        .get(Common.url + "heque-eat/eat/get_order_info_list", { params: data })
        .then(res => {
          //成功回调
          let data = res.data.data.data;
          this.orderData = this.orderData.concat(data);
          if (data.length < 10) {
            this.hint = 2;
            this.trigger = false;
          } else {
            this.hint = 0;
            this.trigger = true;

          }
          // console.log(this.orderData);
        })
        .catch(res => {
          //失败回调
          // console.log(res);
        });
    },
    //点击跳转
    goOrder(item) {
      this.$router.push({ name: "my", params: { id: item.id } });
    },

    onScroll() {
      if (!this.trigger) return;

      //屏幕的可视高度
      let clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      //距离顶部的高度
      let scrollTop = document.documentElement.scrollTop;
      //总高度
      let totalHeight = document.querySelector(".home").clientHeight;
      // 到底了
      if ( clientHeight + scrollTop > totalHeight && this.LazyLoading) {
        this.LazyLoading =false;
        let page = ++this.page;
        this.page = page;
        //请求数据
          this.getCityList(page);
        this.hint = 1;
        setTimeout(res=>{this.LazyLoading=true},300)
      }
    }
  },
  //创建后执行
  created() {
    this.getCityList(this.page);
  },

  //挂载后执行
  mounted() {
    //监听滚动事件
    window.addEventListener("scroll", this.onScroll);
  },
  //页面销毁前
  beforeDestroy() {
    //删除滚动事件
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>
