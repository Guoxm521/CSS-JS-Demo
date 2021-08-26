<template>
  <div class="container">
    <div id="scrollbox">
      <ul :class="[{ anim: animate == true }, 'ullist']">
        <li v-for="(item, index) in items" :key="index">
          <img src="@/assets/big_data/scroll.png" alt="" />
          <p>
            {{ item.name }}
          </p>
          <span>{{ item.time }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    datalist: {
      type: Array,
      requried: true,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      items: this.datalist,
      animate: false,
    };
  },
  watch: {
    datalist: {
      handler(val, oldVal) {
        this.items = val;
      },
      deep: true,
    },
  },
  methods: {
    scroll() {
      this.animate = true;
      setTimeout(() => {
        this.items.push(this.items[0]);
        this.items.shift();
        this.animate = false;
      }, 500);
    },
  },
  created() {
    setInterval(this.scroll, 1000);
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.anim {
  transition: all 0.5s;
  margin-top: -30px;
}
.ullist {
  img {
    width: 0.291667rem;
  }
  li {
    display: flex;
    align-items: center;
    line-height: 30px;
    height: 30px;
    p {
      flex: 1;
      padding: 0 0.15625rem;
      font-size: 0.15625rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #00beff;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    span {
      font-size: 0.135417rem;
      font-family: Arial;
      font-weight: 400;
      color: #096ebc;
    }
  }
}
</style>
