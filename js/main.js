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
    speed: 2000,
    loop: true,
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
    spaceBetween: 20,
    pagination: {
        el: ".about-company__statistic__card_pagination",
        clickable: true,
    },
    breakpoints: {
        1000: {
            spaceBetween: 0,
        }
    }
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

function makeIndustryContentPosition() {
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

var init3 = false;
var swiper3;
function swiperCard3() {
    if (window.innerWidth <= 1000) {
        if (!init3) {
            init3 = true;
            swiper3 = new Swiper(".about-card__slider .swiper", {
                slidesPerView: 1,
                spaceBetween: 20,
                pagination: {
                    el: '.about-card__slider_pagination',
                    type: "progressbar",
                },
            });
        }
    } else if (init3) {
        swiper3.destroy();
        init3 = false;
    }
}

var init4 = false;
var swiper4;

function swiperCard4() {
    var cardElements = document.querySelectorAll(".download-list__card");

    if (window.innerWidth <= 1000) {
        if (!init4) {
            init4 = true;

            cardElements.forEach(function (cardElement, idx) {
                swiper4 = new Swiper(cardElement, {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    pagination: {
                        el: $('.download-list__slide_pagination')[idx],
                        type: 'progressbar'
                    },
                    navigation: {
                        nextEl: $('.download-list__slide_btn__next')[idx],
                        prevEl: $('.download-list__slide_btn__prev')[idx]
                    },
                    breakpoints: {
                        700: {
                            slidesPerView: 2,
                        }
                    }
                });
            });
        }
    } else if (init4) {
        cardElements.forEach(function (cardElement) {
            var swiperInstance = cardElement.swiper;
            if (swiperInstance) {
                swiperInstance.destroy();
            }
        });

        init4 = false;
    }
}

var init5 = false;
var swiper5;
function swiperCard5() {
    if (window.innerWidth <= 1000) {
        if (!init5) {
            init5 = true;
            swiper5 = new Swiper(".about-factory__card", {
                slidesPerView: 1,
                spaceBetween: 20,
                pagination: {
                    el: '.about-factory__card_pagination',
                    type: 'progressbar'
                },
                breakpoints: {
                    700: {
                        slidesPerView: 2,
                    }
                }
            });
        }
    } else if (init5) {
        swiper5.destroy();
        init5 = false;
    }
}

makeIndustryContentPosition();
if ($('.clients__card').length) {
    swiperCard();
}

if ($('.about-card__slider').length) {
    swiperCard2();
}

if ($('.about-card__slider').length) {
    swiperCard3();
}
if ($('.download-list__card').length) {
    swiperCard4();
}
if ($('.about-factory__card').length) {
    swiperCard5();
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
    if ($('.about-card__slider').length) {
        swiperCard3();
    }
    if ($('.download-list__card').length) {
        swiperCard4();
    }
    if ($('.about-factory__card').length) {
        swiperCard5();
    }
    makeIndustryContentPosition();
});

function aboutCompanyStatisticPosition() {
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
    speed: 1000,
    pagination: {
        el: '.certifcation__card_paginations',
        type: "progressbar",
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

if ($('.certifcation.about')[0]) {
    certification_card.params.slidesPerView = 4;
    $(window).on('resize', function(){
        var width = $(window).width();
        if(width < 1000 && width >= 700) {
            certification_card.params.slidesPerView = 3;
        } else if(width < 700 && width >= 500) {
            certification_card.params.slidesPerView = 2;
        } else if(width < 500) {
            certification_card.params.slidesPerView = 1;
        } else {
            certification_card.params.slidesPerView = 4;
        }
    }).resize();  
}

let year_slider = new Swiper('.year-slider .swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.year-slider__btn_next',
        prevEl: '.year-slider__btn_prev'
    },
    pagination: {
        el: ".year-slider__pagination",
        type: "progressbar",
    },
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
    speed: 0,
    // effect: 'fade',

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
        $(this).removeClass('active');
    } else {
        $('section.search').addClass('active');
        if (window.innerWidth < 1000) {
            $('body').css({
                overflow: 'hidden'
            })
        }
        $('.search__head input').focus();
        $(this).addClass('active');
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
            $('body').css({ overflow: 'hidden' })
        })
    }
})

$('.show_certificates__close').click(function () {
    show_certificates.removeAllSlides();
    $('.show_certificates').removeClass('active');
    $('body').css({ overflow: 'visible' })
})

$('.input_file').each(function (idx, el) {
    $(el).click(function () {
        $('.drop_input_file').slideDown(300)
        // let input = $(el).find('input[type="file"]')[0];
        // $(input).focus().get(0).click(); 
    })

    // $(el).find('input[type="file"]').change( function (e) {
    //     const file = e.target.files;
    //     if (file.length) {
    //         $(el).find('.input_file__name')[0].textContent = file[0].name;
    //         $(el).addClass('active');
    //     } else {
    //         $(el).find('.input_file__name')[0].textContent = "Загрузить файлы";
    //         $(el).removeClass('active');
    //     }
    // })
})

$('.btn_grey').click(function (e) {
    e.preventDefault();
    $('.feedback-modal').addClass('active');
})

$('.feedback-modal__close').click(function () {
    $('.feedback-modal').removeClass('active');
})

$('.header_bottom__right_navs a').each(function (idx, el) {
    if (idx != 0) {
        $(el).click(function (e) {
            e.preventDefault();
            $('.header_bottom__right_navs a').not($(el)).removeClass('active');
            $(el).addClass('active');
        })
    }
})

$('body').on('dragenter', function () {
    $('.feedback-modal__content_form .drop_input_file').addClass('bordered')
})

$('body').on('dragleave', function () {
    $('.feedback-modal__content_form .drop_input_file').addClass('bordered')
})

$('body').on('dragover', function () {
    $('.feedback-modal__content_form .drop_input_file').addClass('bordered')
})

$('.feedback-modal__content_form .drop_input_file').on('dragenter', function (e) {
    $(this).addClass('active')
})

$('.feedback-modal__content_form .drop_input_file').on('dragleave', function (e) {
    $(this).removeClass('active')
})

$('.feedback-modal__content_form .drop_input_file').on('dragover', function (e) {
    e.preventDefault();
    $(this).addClass('active')
})

let inputFileWrap = $('.feedback-modal__content_form .drop_input_file')[0];

inputFileWrap.ondrop = e => {
    e.preventDefault();
    let file = e.dataTransfer.files;
    $('.feedback-modal__content_form .drop_input_file').removeClass('bordered').removeClass('active')
    if (file.length) {
        $('.feedback-modal__content_form input[type="file"]')[0].files = e.dataTransfer.files;
        $('.input_file__name')[0].textContent = file[0].name;
        $('.input_file').addClass('active');
    }
}

$('.drop_input_file').slideUp(0);
$('.drop_input_file button').click(function () {
    $('.feedback-modal__content_form input[type="file"]').click();
})

$('button.scroll_top').click(function () {
    window.scrollTo(0, 0);
})

let mouseDown = false;
let startX, scrollLeft;
const slider = document.querySelector('.project_client .breadcrumb');

if (slider) {
    const startDragging = (e) => {
        mouseDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    }
    
    const stopDragging = (e) => {
        mouseDown = false;
    }
    
    const move = (e) => {
        e.preventDefault();
        if (!mouseDown) { return; }
        const x = e.pageX - slider.offsetLeft;
        const scroll = x - startX;
        slider.scrollLeft = scrollLeft - scroll;
    }
    
    // Add the event listeners
    slider.addEventListener('mousemove', move, false);
    slider.addEventListener('mousedown', startDragging, false);
    slider.addEventListener('mouseup', stopDragging, false);
    slider.addEventListener('mouseleave', stopDragging, false);
}

$('.year-slider__item').each(function (idx, el) {
    $(el).find('.year-slider__item_more').click(function () {
        $('.year_modal').find('h2').text($(el).find('.year-slider__item_head').text().trim());
        $('.year_modal').find('.year_modal__img .title').text($(el).find('.year-slider__item_left .title').text().trim());
        $('.year_modal').find('.year_modal__img .subtitle').text($(el).find('.year-slider__item_left .subtitle').text().trim());
        $('.year_modal').find('.year_modal__content .title').text($(el).find('.year-slider__item_right .title').text().trim());
        $('.year_modal').find('.year_modal__content .descriptions').html('');
        
        $('.year-slider__item_right .main_description p').each(function (idx, el) {
            $('.year_modal').find('.year_modal__content .descriptions').append(`<p>${$(el).text().trim()}</p>`);
        })
        
        $('.year_modal').addClass('active');
        $('body').css({
            overflow: 'hidden'
        });
    })
});

$('.year_modal__close').click(function () {
    $('.year_modal').removeClass('active');
    $('body').css({
        overflow: 'visible'
    });
})