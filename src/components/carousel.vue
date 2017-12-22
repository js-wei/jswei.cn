/**
 * File: g:\vue\jswei.cn\src\components\carousel.vue
 * Created Date: 2017-12-15 12:14:59
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2017-12-22 10:52:33
 * -----
 * Copyright (c) 2017 魏巍
 * ------
 * All shall be well and all shall be well and all manner of things shall be well.
 * We're doomed!
 */

 <template>
  <div>
    <b-carousel controls indicators :interval="interval">
      <b-carousel-slide v-for="(item,index) in carouselList" :key="index">
        <h1 class="uppercase animated" :class="_anmited()">{{item.title}}</h1>
        <p class="animated" :class="_anmited()">{{item.descriptiom}}</p>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      anmited:[
        'zoomIn','fadeInUpBig','bounceInUp',
        'rotateIn','rollIn','fadeInUp','fadeInUpBig',
        'jackInTheBox'
      ]
    }
  },
  props: {
    carouselList: {
      type: Array,
      default:[] 
    },
    interval:Number,
    default:4e3
  },
  methods: {
    _anmited() {
      let i = _.random(0,this.anmited.length-1);
      return this.anmited[i];
    },
  },
  mounted(){
    let _documet = document.querySelector('.navbar'),
        _carousel = document.querySelector('.carousel');
    _carousel.style.marginTop= _documet.offsetHeight +'px';
  }
}
</script>
<style lang="scss" scoped>
  @import 'static/style/base';
  .carousel{
    .carousel-inner{
      .carousel-item{
        min-height:350px;
        background-color: nth($baseColor,3);
        background-image: url('/static/images/jumbotron-background-cb04e0f2d6d.png');
        text-shadow: rgba(0,0,0,0.2) 0px 2px 0px;
        .carousel-caption{
          h1{
            padding-bottom:.8rem;
            font-size:2rem;
          }       
          p{
            font-size:1rem;
            line-height:1.5rem;
          }
        }
      }
    }
  }
</style>