<template>
  <div>
    <TypeNav />
    <!--列表-->
    <ListContainer />
    <!--今日推荐-->
    <TodayRecommend />
    <!-- 商品排行 -->
    <Rank />
    <!-- 猜你喜欢 -->
    <Like />
    <!--楼层-->
    <Floor />
    <!--楼层-->
    <Floor />
    <!--商标-->
    <Brand />
  </div>
</template>

<script>
import Brand from './Brand/Brand';
import Floor from './Floor/Floor';
import Like from './Like/Like';
import ListContainer from './ListContainer/ListContainer';
import Rank from './Rank/Rank';
import TodayRecommend from './TodayRecommend/TodayRecommend';
import TypeNav from '@comps/TypeNav';
//store发送请求过来的楼层
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Home',
  //mapState数据
  computed: {
    ...mapState({
      floors: (state) => state.home.floors,
    }),
  },
  //mapActions
  methods: {
    ...mapActions(['getFloors']),
  },
  //发送请求
  mounted() {
    this.getFloors();
  },
  components: {
    Brand,
    Floor,
    Like,
    ListContainer,
    Rank,
    TodayRecommend,
    TypeNav,
  },
};
</script>

<style lang="less" scoped>
</style>