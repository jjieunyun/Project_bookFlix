Vue.component('contents-component',{

    template : 
    `<div>
        <div class="swiper mySwiper">
            <div class="contentsText"><h2><slot name="title"></slot></h2></div>
        <div class="swiper-wrapper">
            <slot name="div"></slot>
        </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-pagination"></div>
        </div>
    </div>`,
    data () {
        return {
            

        }
    }
});   