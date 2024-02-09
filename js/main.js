let main_tabs = document.querySelectorAll('.main_tab');
if (main_tabs.length) {
    main_tabs.forEach(main_tab => {
        let main_tab_btns = main_tab.querySelectorAll('button');
        let main_tab_items = main_tab.querySelectorAll('.main_tab_item');
        main_tab_btns.forEach((main_tab_btn, btn_idx) => {
            main_tab_btn.onclick = () => {
                if (!main_tab_items[btn_idx].classList.contains('active')) {
                    main_tab_items.forEach((main_tab_item, item_idx) => {
                        if (main_tab_item.classList.contains('active')) {
                            main_tab_item.classList.remove('active');
                            main_tab_item.classList.add('end-active')
                            setTimeout(() => {
                                main_tab_item.classList.remove('end-active')
                            }, 200);
                        }
                    })
                    setTimeout(() => {
                        main_tab_items[btn_idx].classList.add('active')
                    }, 200);
                }
                main_tab_btns.forEach(item => {
                    item.classList.remove('active')
                })
                main_tab_btn.classList.add('active')
            }
        })
    })
}

let home_slider = new Swiper('.home_slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    simulateTouch: false,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".home_slider__btn_next",
        prevEl: ".home_slider__btn_prev"
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
            document.querySelector('.home_bottom_line').style.width = (1 - progress) * 100 + '%';
        }
    }
})

let products_tab_head = new Swiper('.products .main_tab_head .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    pagination: {
        el: ".main_tab__pagination",
        type: "progressbar",
    },
})

let products_active_idx = 0;

$('.products_title__btn_prev').click(function () {
    if (products_active_idx > 0) {
        products_active_idx--;
    }
    $('.main_tab_head .main_title__small')[products_active_idx].click();
    products_tab_head.slidePrev()
})

$('.products_title__btn_next').click(function () {
    if (products_active_idx < products_tab_head.slides.length - 1) {
        products_active_idx++;
    }
    $('.main_tab_head .main_title__small')[products_active_idx].click();
    products_tab_head.slideNext()
})

let advantage_card = new Swiper('.advantages__card', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".advantages__card_paginations",
        clickable: true,
    },
    breakpoints: {
        1000: {
            slidesPerView: 3,
        },
        700: {
            slidesPerView: 2,
        }
    }
})

// services
let installation_slider = new Swiper(".installation_slider", {
    navigation: {
      nextEl: ".installation_slider_next",
      prevEl: ".installation_slider_prev",
    },
    pagination: {
        el: ".installation-pagination",
        type: "progressbar",
    },
    breakpoints: {
        320: {
            spaceBetween: 20,
            slidesPerView: 1,
        },
        576: {
            spaceBetween: 20,
            slidesPerView: 2,
        }
    }
});
// services

// services
let object_slider = new Swiper(".object_slider", {
    pagination: {
        el: ".object_slider-pagination",
        type: "progressbar",
    },
    breakpoints: {
        320: {
            spaceBetween: 20,
            slidesPerView: 1,
        }
    }
});
// services

// services
let our_clients_slider = new Swiper(".our_clients_slider", {
    navigation: {
      nextEl: ".installation_slider_next",
      prevEl: ".installation_slider_prev",
    },
    pagination: {
        el: ".installation-pagination",
        type: "progressbar",
    },
    breakpoints: {
        320: {
            spaceBetween: 20,
            slidesPerView: 1,
        },
        576: {
            spaceBetween: 20,
            slidesPerView: 2,
        }
    }
});
// services

let about_company_statistic_slider = new Swiper('.about-company__statistic__card', {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: ".about-company__statistic__card_pagination",
        clickable: true,
    },
})

let about_company_statistic = document.querySelector('.about-company__statistic');
if (about_company_statistic) {
    aboutCompanyStatisticPosition();
}

let industry_tab_head_slider = new Swiper('.industry__tab_head', {
    slidesPerView: 'auto',
    spaceBetween: 20,
})

let industry_content_swiper = new Swiper('.industry__content_swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    simulateTouch: false,
    allowTouchMove: false,
    speed: 0,
})

let industry_tab_head_btn = document.querySelectorAll('.industry__tab_head__btn');
if (industry_tab_head_btn.length) {
    industry_tab_head_btn.forEach((el, idx) => {
        el.onclick = () => {
            industry_tab_head_btn.forEach(btn => {
                btn.classList.remove('industry__tab_head__btn_active');
            })
            el.classList.add('industry__tab_head__btn_active');
            industry_content_swiper.slideTo(idx);
            if (window.innerWidth > 1000) {
                makeIndustryContentPosition();
            }
        }
    })
}

$('.industry__content_item').each(function (idx, el) {
    $($(el).find('.industry__content_item__head button')).each(function (btn_idx, btn) {
        $(btn).click(function () {
            $($(el).find('.industry__content_item__head button')).not(btn).removeClass('active');
            $(btn).addClass('active');
            
            if (btn_idx == 0) {
                $($(el).find('.industry__content_item__datas')).removeClass('active')
                $($(el).find('.industry__content_item__card')).addClass('active')
            } else {
                $($(el).find('.industry__content_item__datas')).addClass('active')
                $($(el).find('.industry__content_item__card')).removeClass('active')
            }
        })
    })
})

function makeIndustryContentPosition () {
    let industry__content_item = document.querySelectorAll('.industry__content_item');
    if (industry__content_item.length) {
        industry__content_item.forEach(item => {
            let card = item.querySelector('.industry__content_item__card');
            let left = item.getBoundingClientRect().left + item.getBoundingClientRect().width;
            if (window.innerWidth > 1000) {
                card.style.left = left + 'px';
            }
            let industyr_card_swiper = new Swiper(card.querySelector('.swiper'), {
                slidesPerView: 1,
                spaceBetween: 0,
                pagination: {
                    el: card.querySelector('.industry__content_item__card__pagination'),
                    clickable: true,
                }
            })
        })
    }
}

var init = false;
var swiper;
function swiperCard() {
    if (window.innerWidth <= 1000) {
        if (!init) {
            init = true;
            swiper = new Swiper(".clients__card", {
                slidesPerView: 1,
                spaceBetween: 20,
                breakpoints: {
                    700: {
                        slidesPerView: 2,
                    }
                }
            });
        }
    } else if (init) {
        swiper.destroy();
        init = false;
    }
}

var init2 = false;
var swiper2;
function swiperCard2() {
    if (window.innerWidth <= 1000) {
        if (!init2) {
            init2 = true;
            swiper2 = new Swiper(".news__card", {
                slidesPerView: 1,
                spaceBetween: 20,
                pagination: {
                    el: '.news__card_pagination',
                    clickable: true,
                },
                breakpoints: {
                    700: {
                        slidesPerView: 2,
                    }
                }
            });
        }
    } else if (init2) {
        swiper2.destroy();
        init2 = false;
    }
}

makeIndustryContentPosition();
if ($('.clients__card').length) {
    swiperCard();
}

if ($('.news__card').length) {
    swiperCard2();
}

window.addEventListener("resize", () => {
    if (about_company_statistic) {
        aboutCompanyStatisticPosition();
    }
    if ($('.clients__card').length) {
        swiperCard();
    }
    if ($('.news__card').length) {
        swiperCard2();
    }
    makeIndustryContentPosition();
});

function aboutCompanyStatisticPosition () {
    if (window.innerWidth > 1000) {
        let rect = document.querySelector('.about-company__content').getBoundingClientRect();
        let left = rect.left + rect.width;
        let width = window.innerWidth - left;
        about_company_statistic.style.left = left + 'px';
        about_company_statistic.style.width = width + 'px';
    }
}

let certification_card = new Swiper('.certifcation__card', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.certifcation__card_paginations',
        clickable: true,
    },
    breakpoints: {
        1000: {
            slidesPerView: 3
        },
        700: {
            slidesPerView: 2,
        }
    }
})

let stages_tab_head = new Swiper('.stages__tab_head', {
    slidesPerView: 'auto',
    spaceBetween: 20,
})

let checkboxs = document.querySelectorAll('.main_checkbox');
if (checkboxs.length) {
    checkboxs.forEach(checkbox => {
        let btn = checkbox.querySelector('span');
        let input = checkbox.querySelector('input[type="checkbox"]');

        if (input.checked) {
            checkbox.classList.add('active')
        } else {
            checkbox.classList.remove('active')
        }

        btn.onclick = () => {
            input.click();
            if (input.checked) {
                checkbox.classList.add('active')
            } else {
                checkbox.classList.remove('active')
            }
        }
    })
}

let stages_child_sliders = document.querySelectorAll('.stages__form_item__right_block');
if (stages_child_sliders.length) {
    stages_child_sliders.forEach(el => {
        let swipper = el.querySelector('.swiper');
        let swiper_pagination = el.querySelector('.stages__form_item__right_block__slider_pagination');
        let stages_child_slider = new Swiper(swipper, {
            slidesPerView: 1,
            pagination: {
                el: swiper_pagination,
                clickable: true,
            },
        })
    })
}

let stage_form = new Swiper('.stages__form', {
    slidesPerView: 1,
    spaceBetween: 0,
    simulateTouch: false,
})

let stages_tab_head_btns = document.querySelectorAll('.stages__tab_head__item');
if (stages_tab_head_btns.length) {
    stages_tab_head_btns.forEach((btn, btn_idx) => {
        btn.addEventListener('click', function () {
            stages_tab_head_btns.forEach(el => {
                el.classList.remove('stages__tab_head__item_active')
            })
            this.classList.add('stages__tab_head__item_active');
            stage_form.slideTo(btn_idx);
        })
    })
}

let header_top__bars = document.querySelector('.header_top__bars');
let mobile_menu = document.querySelector('.mobile-menu');
let body = document.querySelector('body');
header_top__bars.onclick = () => {
    if (header_top__bars.classList.contains('active')) {
        header_top__bars.classList.remove('active')
        header_top__bars.classList.add('end-active')
        mobile_menu.classList.remove('active')
        body.style.overflow = 'visible';
    } else {
        header_top__bars.classList.remove('end-active')
        header_top__bars.classList.add('active')
        mobile_menu.classList.add('active')
        body.style.overflow = 'hidden';
    }
}

$('.main_accordion').each(function (idx, el) {
    $(el).find('.main_accordion__list').slideUp(0);
    $(el).find('.main_accordion__btn').click(function () {
        $(el).find('.main_accordion__list').slideToggle();
        $(el).find('.main_accordion__btn').toggleClass('main_accordion__btn_active');
    })
})

$('.main_child_accordion').each(function (idx, el) {
    $(el).find('.main_child_accordion__list').slideUp(0);
    $(el).find('.main_child_accordion__btn').click(function () {
        $(el).find('.main_child_accordion__list').slideToggle();
        $(el).find('.main_child_accordion__btn').toggleClass('main_child_accordion__btn_active');
    })
})

$('section.search').slideUp(0)

$('.search__open').click(function () {
    $('section.search').slideToggle();

    if ($('section.search').hasClass('active')) {
        $('section.search').removeClass('active');
        $('body').css({
            overflow: 'visible'
        })
    } else {
        $('section.search').addClass('active');
        if (window.innerWidth < 1000) {
            $('body').css({
                overflow: 'hidden'
            })
        }
        $('.search__head input').focus();
    }
})

$('.search__close').click(function () {
    $('section.search').slideUp();
    $('section.search').removeClass('active');
    $('body').css({
        overflow: 'visible'
    })
})

$('.search__head input').on('input', function () {
    if (this.value) {
        $('.search__clear')[0].disabled = false;
    } else {
        $('.search__clear')[0].disabled = true;
    }
})

$('.search__clear').click(function () {
    $('.search__head input').val('');
})

let show_certificates = new Swiper('.show_certificates__card', {
    slidesPerView: 1,
    speed: 1000,
    navigation: {
        nextEl: '.show_certificates__card__next_btn',
        prevEl: '.show_certificates__card__prev_btn'
    }
})

$('.certifcation__card_item img').each(function (idx, el) {
    if (window.innerWidth > 700) {
        $(el).click(function () {
            show_certificates.removeAllSlides();
            $('.certifcation__card_item img').each(function (img_idx, img) {
                let src = $(img).attr('src');
                show_certificates.appendSlide(`<div class="swiper-slide show_certificates__card_item">
                                <img src="${src}" alt="">
                            </div>`)
            })
            show_certificates.slideTo(idx);
            $('.show_certificates').addClass('active');
            $('body').css({overflow: 'hidden'})
        })
    }
})

$('.show_certificates__close').click(function () {
    show_certificates.removeAllSlides();
    $('.show_certificates').removeClass('active');
    $('body').css({overflow: 'visible'})
})

$('.input_file').each(function (idx, el) {
    $(el).click(function () {
        let input = $(el).find('input[type="file"]')[0];
        $(input).focus().get(0).click(); 
    })

    $(el).find('input[type="file"]').on('change', function (e) {
        const file = e.target.files;
        if (file.length) {
            $(el).find('.input_file__name')[0].textContent = file[0].name;
            $(el).addClass('active');
        } else {
            $(el).find('.input_file__name')[0].textContent = "Загрузить файлы";
            $(el).removeClass('active');
        }
    })
})

$('.btn_grey').click(function (e) {
    e.preventDefault();
    $('.feedback-modal').addClass('active');
})

$('.feedback-modal__close').click(function () {
    $('.feedback-modal').removeClass('active');
})
