Vue.component('bottom-navi-component',{
    template : 
    `<div>
        <section class="bottomNavi">
            <div class="home">
                <button>
                    <i class="fa-solid fa-house"></i>
                    <p>홈</p>
                </button>
                
            </div>

            <div class="search">
                <button>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <p>검색</p>
                </button>
            </div>

            <div class="books">
                <button>
                    <i class="fa-solid fa-book"></i>
                    <p>내서재</p>
                </button>
            </div>

            <div class="more">
                <button>
                    <i class="fa-solid fa-bars"></i>
                    <p>더보기</p>
                </button>
            </div>
        </section>
    </div>`,
    data () {
        return {

        }
    }
});