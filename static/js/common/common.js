$(function () {
    commonHeaderLoad();
    commonFooterLoad();
});

function commonHeaderLoad() {
    const $header = document.querySelector("header");

    if ($header) {
        let html = `<h1 class="logo-section">
                        <a href="main.html" class="logo"></a>
                    </h1>
                    <nav>
                        <ul class="gnb inner">
                            <li class="brand-tab">
                                <a href="sub_brand.html">브랜드 스토리</a>
                            </li>
                            <li class="menu-tab">
                                <a href="sub_menu.html">메뉴</a>
                            </li>
                            <li class="store-tab">
                                <a href="sub_store.html">매장</a>
                            </li>
                            <li class="notice-tab">
                                <a href="sub_notice.html">뉴스 & 이벤트</a>
                            </li>
                            <li class="franchisee-tab">
                                <a href="sub_franchisee.html">가맹 안내</a>
                            </li>
                        </ul>
                    </nav>`;

        $header.innerHTML = html;
    }
}

function commonFooterLoad() {
    const $footer = document.querySelector("footer");

    if ($footer) {
        let html = `<div class="inner">
                        <ul>
                            <li>법적 고지&nbsp;&nbsp;&nbsp;|</li>
                            <li>
                                <a href="#" class="text-bold-style">개인정보처리방침</a>&nbsp;&nbsp;&nbsp;|
                            </li>
                            <li>
                                <a href="#" class="text-bold-style">고객지원</a>
                            </li>
                        </ul>
                        <address>
                            서울시 성동구 성수일로 56 백영성수센터 (주)신세계푸드
                        </address>
                        <div>
                            TEL <a href="tel:02-3397-6000">02-3397-0000</a> /
                            FAX 02-3397-0000 /
                            사업자등록번호 215-81-00000
                        </div>
                        <p>
                            Copyright © 2015 SHINSEGAE FOOD Inc. ALL RIGHTS RESERVED
                        </p>
                    </div>`;

        $footer.innerHTML = html;
    }
}


