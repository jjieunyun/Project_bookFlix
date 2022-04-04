Vue.component('footer-compo',{
    template : 
    `<div>
    <footer>
        <div class="scialLinks">
            <a href="#" class="scialLink"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" class="scialLink"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" class="scialLink"><i class="fa-brands fa-twitter"></i></a>
            <a href="#" class="scialLink"><i class="fa-brands fa-youtube"></i></a>
        </div>
        <ul class="footerLinks">
            <li v-for="title in footers" class="footerLinkLi"><a href="#" class="footerLink">{{title.name}}</a></li>

        </ul>
        <div class="copyRight">
            <p>넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 080-001-9587</p>
            <p>대표: 레지널드 숀 톰프슨</p>
            <p>이메일 주소: korea@netflix.com</p>
            <p>주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161</p>
        </div>
    </footer>
    </div>`,
    data () {
        return {
            footers : [
                {name : '자막 및 음성' },
                {name : '음성지원' },
                {name : '고객센터' },
                {name : '기프트카드' },
                {name : '개인정보' },
                {name : '문의하기' },
                {name : '미디어센터' },
                {name : '입사정보' },
                {name : '이용 약관' },
                {name : '회사 정보' },
                {name : '법적 고지' },
                {name : '미디어 센터' },
                {name : '쿠키 설정' },

            ],
        }
    }
});