

////////////////////////////////////////////////////
/////////////////////菜单游标效果//////////////////
//////////////////////////////////////////////////

    // 获取元素
    function getCur() {
        var curElem = $('#nav').find('.cur').size() > 0 ? $('#nav').find('.cur') : 0, //获取cur样式元素
            // offset() 方法返回或设置匹配元素相对于文档的偏移（位置）
            parentLeft = $('#nav ul').offset().left, //父元素的X值
            curLeft = curElem ? curElem.offset().left - parentLeft : 0, //cur元素实际left值
            curWidth = curElem ? curElem.width() : 0; //cur元素的宽
        return {
            curElem:curElem,parentLeft:parentLeft,curLeft:curLeft,curWidth:curWidth,
        };
    }
    //鼠标指向样式样式
    $(function thisBar() {

        $('#nav a').on('mouseenter', function() {
            var thisparent = $(this).parent().parent().offset().left,
                thisLeft = $(this).offset().left - thisparent,
                thisWidth = $(this).width();
            // console.log('当前元素的X：'+$(this).offset().left);
            // console.log('父元素的X：'+parentLeft);
            $('.cur-bar').stop().animate({
                left: thisLeft,
                width: thisWidth,
                opacity: 1
            }, 600);
        });

        $('#nav').mouseleave(function() {
            $('.cur-bar').stop().animate({
                left: getCur().curLeft,
                width: getCur().curWidth,
                opacity: 1
            }, 500);
        });
    });

    //换屏切换效果
    function switchCur() {
        $('.cur-bar').animate({
            left: getCur().curLeft,
            width: getCur().curWidth,
            opacity: 1
        }, 300);
    }

//////////////////////////////////////////////////
/////////////// section动画部分//////////////////
////////////////////////////////////////////////

//section1 动画
$flag1 = true;
function section1() {
    if ($flag1) {
        move('.line-top').duration('1s').set('left', 0).set('opacity', 1).end();
        move('.line-bottom').duration('1s').set('left', 0).set('opacity', 1).end(
            function() {
                move('#first').duration('1s').set('opacity', 1).end(function() {
                    move('#second').set('opacity', 1).duration('1s').end(function() {
                        move('#third').set('opacity', 1).duration('1.5s').end(function() {

                            move('.line-top').set('left', '-500px').set('opacity', 0).end();
                            move('.line-bottom').set('left', '510px').set('opacity', 0).end();
                            move('.line-top2').set('left', '-1px').set('opacity', 1).duration('.6s').end();
                            move('.line-bottom2').set('left', '-1px').set('opacity', 1).duration('.6s').end();
                            move('.line-left2').set('top', '-1px').set('opacity', 1).duration('.6s').end();
                            move('.line-right2').set('top', '-1px').set('opacity', 1).duration('.6s').end();
                            move('.look').set('opacity', '1').duration('1s').set('visibility', 'visible').end(function() {
                                $flag1 = false;
                            });

                        });
                    });
                });
            }
        );
    } else {
        return false;
    }
}

//section2 动画
function section2() {
   /* move('.avatar').set('visibility', 'visible').scale(1).end(function() {
        // $('.avatar').addClass('shake');
       /!* move('.self-info p').set('visibility', 'visible').set('opacity', 1).set('left', '0px').end(function() {
            move('.education h1').set('visibility', 'visible').scale(1).end(function() {
                move('.high-school div').set('left', '0px').set('opacity', '1').end(function() {
                    move('.fa-check-circle').set('opacity', '1').scale(1).end(function() {
                        move('.lb').set('height', '60px').end(function() {
                            move('.fa-circle').set('opacity', '1').scale(1).end(function() {
                                move('.college div').set('left', '0px').set('opacity', '1').end(function() {
                                    move('.basic-info').set('opacity', 1).duration('1s').end();
                                });
                            });
                        });
                    });
                });

            });

        });*!/
    });*/
};

//section3 动画
var html = 90,
    ps = 60,
    css = 86,
    js = 80,
    bt = 50,
    jq = 70,
    mysql = 22,
    php = 20,
    speed = 0,
    i = 0,
    k = 12,
    speed = 1,
    timer = null;
function section3(){
    move('.title-content').set('top','0').set('opacity',1).duration('1.5s').end()
    move('.skill-circle').set('top','0').set('opacity',1).duration('1s').end(function(){
        timer = setInterval('addPercent()',20);
        });    
}
//技能旋转效果
function rotate() {
    $('.circle').each(function() {
        var num = $(this).find('.percent').text() * 3.6;
        if (num <= 180) {
            $(this).find('.left-p').css('transform', "rotate(" + (180 - num) + "deg)");
        } else {
            $(this).find('.left-p').css('transform', "rotate(0deg)");
            $(this).find('.right-p').css('transform', "rotate(" + (360 - num) + "deg)");
        }
    });

}
//增加百分比
function addPercent() {
    var $ps = $('.ps').find('.percent').text(),
        $html = $('.html').find('.percent').text(),
        $css = $('.css3').find('.percent').text(),
        $js = $('.javascript').find('.percent').text(),
        $jq = $('.jquery').find('.percent').text(),
        $bt = $('.bootstrap').find('.percent').text(),
        $php = $('.php').find('.percent').text(),
        $mysql = $('.mysql').find('.percent').text();

    if ($html == html) {
        clearInterval(timer);
    } else {
        if ($php == php) {
            $('.php').find('.percent').text(php);
        } else {
            $('.php').find('.percent').text(i);
        }
        if ($mysql == mysql) {
            $('.mysql').find('.percent').text(mysql);
        } else {
            $('.mysql').find('.percent').text(i);
        }
        if ($jq == jq) {
            $('.jquery').find('.percent').text(jq);
        } else {
            $('.jquery').find('.percent').text(i);
        }
        if ($bt == bt) {
            $('.bootstrap').find('.percent').text(bt);
        } else {
            $('.bootstrap').find('.percent').text(i);
        }
        if ($js == js) {
            $('.javascript').find('.percent').text(js);
        } else {
            $('.javascript').find('.percent').text(Math.floor((js - $js) / k) + i);
        }
        if ($css == css) {
            $('.css3').find('.percent').text(css);
        } else {
            $('.css3').find('.percent').text(Math.floor((css - $css) / k) + i);
        }
        if ($ps == ps) {
            $('.ps').find('.percent').text(ps);
        } else {
            $('.ps').find('.percent').text(Math.floor((ps - $ps) / k) + i);
        }
        $('.html').find('.percent').text(Math.floor((html - $html) / k) + i);
        i += 1;
        rotate();
    }

}

//section4动画
function section4() {

    move('.num1 .simboo').scale(1).end(function() {
        $('.num1 .progress-content').animate({
            'opacity': 1
        }, 700).addClass('move-right');
    });
    move('.num2 .simboo').scale(1).end(function() {
        $('.num2 .progress-content').animate({
            'opacity': 1
        }, 700).addClass('move-left');
    });
    move('.num3 .simboo').scale(1).end(function() {
        $('.num3 .progress-content').animate({
            'opacity': 1
        }, 700).addClass('move-right');
    });
    move('.num4 .simboo').scale(1).end(function() {
        $('.num4 .progress-content').animate({
            'opacity': 1
        }, 700).addClass('move-left');
    });
    move('.num5 .simboo').scale(1).end(function() {
        $('.num5 .progress-content').animate({
            'opacity': 1
        }, 700).addClass('move-right');
    });
    move('.num6 .simboo').scale(1).end(function() {
        $('.num6 .progress-content').animate({
            'opacity': 1
        }, 700).addClass('move-left');
    });
    move('.num7 .simboo').scale(1).end(function() {
        $('.num7 .progress-content').animate({
            'opacity': 1
        }, 700).addClass('move-right');
    });

}
//section5动画
function section5(){
    move('.box1 .content-box').set('transform','rotateY(0deg)').set('opacity',1).duration('1.3s').end();
    move('.box2 .content-box').set('transform','rotateY(0deg)').set('opacity',1).duration('1.6s').end();
    move('.box3 .content-box').set('transform','rotateY(0deg)').set('opacity',1).duration('1.9s').end();
    move('.box4 .content-box').set('transform','rotateY(0deg)').set('opacity',1).duration('2.1s').end();
}
//section()动画
function section6(){};




//secti7动画
function section7() {
    move('.letter').set('top', '0').duration('1.5s').end(function(){
        move('.stamp').set('opacity', 1).duration(0).end();
        move('.hand').set('opacity', 1).duration(0).end(function() {
            move('.stamp').set('right', '60px').duration('1s').end(function() {
                $('.stamp').addClass('shake');
            });
            move('.hand').set('right', '-360px').duration('1s').end(function() {
                move('.hand').set('right', '-1000px').duration('3s').end(function() {
                    move('.hand').set('opacity', 0).set();
                });
            });
        });
    });
}


    
    $(document).ready(function() {
        //section 1 加载完毕loading隐藏
        $('.loading').fadeOut(500);


        //section 2 初始化
        /* move('.avatar').set('visibility','hidden').scale(0).end();
         move('.self-info p').set('visibility','hidden').set('opacity',0).set('left','-100px').end();
         move('.self-info p').set('visibility','hidden').set('opacity',0).set('left','-100px').end();*/
        /* move('.basic-info').set('opacity',0).end();
         move('.education h1').set('visibility','hidden').scale(0).end();
         move('.high-school div').set('left','-50px').set('opacity','0').end();
         move('.college div').set('left','-50px').set('opacity','0').end();
         move('.fa-check-circle').set('opacity','0').scale(0).end();
         move('.fa-circle').set('opacity','0').scale(0).end();
         move('.lb').set('height','0').end();
         move('.lt').set('height','0').end();*/

        //section 3 初始化
        move('.title-content').set('top', '-10%').set('opacity', 0).end();
        move('.skill-circle').set('top', '10%').set('opacity', 0).end();

        //section 4 初始化
        move('.num1 .progress-content').set('opacity', 0).end();
        move('.num2 .progress-content').set('opacity', 0).end();
        move('.num3 .progress-content').set('opacity', 0).end();
        move('.num4 .progress-content').set('opacity', 0).end();
        move('.num5 .progress-content').set('opacity', 0).end();
        move('.num6 .progress-content').set('opacity', 0).end();
        move('.num7 .progress-content').set('opacity', 0).end();
        move('.num1 .simboo').scale(0).end();
        move('.num2 .simboo').scale(0).end();
        move('.num3 .simboo').scale(0).end();
        move('.num4 .simboo').scale(0).end();
        move('.num5 .simboo').scale(0).end();
        move('.num6 .simboo').scale(0).end();
        move('.num7 .simboo').scale(0).end();

        //section5动画初始化
        move('.box1 .content-box').set('transform', 'rotateY(270deg)').set('opacity', 0).end();
        move('.box2 .content-box').set('transform', 'rotateY(270deg)').set('opacity', 0).end();
        move('.box3 .content-box').set('transform', 'rotateY(270deg)').set('opacity', 0).end();
        move('.box4 .content-box').set('transform', 'rotateY(270deg)').set('opacity', 0).end();

        //section7动画初始化
        move('.stamp').set('right', '-290px').set('opacity', 0).end();
        move('.hand').set('right', '-714px').set('opacity', 0).end();
        move('.letter').set('top', '400px').end();


        // fullpage教学链接http://www.jq22.com/jquery-info1124
        //fullpage初始化配置
        $('#fullpage').fullpage({
            navigation: true,
            anchors: ['welcome', 'aboutme', 'skill', 'internship', 'artworks', 'works-intr', 'contact'],
            // sectionsColor : ['#000', 'orange', 'grey', 'green', 'pink', 'blue', 'purple'],
            navigationPosition: 'right',
            navigationTooltips: ['欢迎界面', '关于我', '专业技能', '实习经历', '个人作品', '作品详解', '联系方式'],
            // showActiveTooltip: true,
            resize: false,
            fixedElements: '#nav',
            menu: '#nav',
            scrollBar: false,
            fitToSection: true,
            scrollOverflow: true,

            /*afterLoad:滚动到某一屏后的回调函数，接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index                    是序号，从1开始计算*/

            afterLoad: function (anchorLink, index) {

                // console.log(anchorLink, index);
                switch (index) {
                    case 1:
                        $('#nav').removeClass('min');
                        $('#nav li a').removeClass('cur');
                        $('#nav li').find('.page1').addClass('cur');
                        switchCur();
                        section1();
                        break;
                    case 2:

                        section2();
                        break;
                    case 3:

                        section3();

                        break;
                    case 4:

                        section4();
                        break;
                    case 5:
                        section5();
                        break;
                    case 6:

                        section6();
                        break;
                    case 7:

                        section7();
                        break;
                }
            },

            /*onLeave滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数：
             index 是离开的“页面”的序号，从1开始计算；
             nextIndex 是滚动到的“页面”的序号，从1开始计算；
             direction 判断往上滚动还是往下滚动，值是 up 或 down。*/
            onLeave: function (index, nextIndex, direction) {
                // console.log(index,nextIndex,direction);
                switch (nextIndex) {
                    case 1:
                        $('#nav').removeClass('min');
                        $('#nav li a').removeClass('cur');
                        $('#nav li').find('.page1').addClass('cur');
                        switchCur();
                        break;

                    case 2:
                        $('#nav').addClass('min');
                        $('#nav li a').removeClass('cur');
                        $('#nav li').find('.page2').addClass('cur');
                        switchCur();
                        break;

                    case 3:
                        $('#nav').addClass('min');
                        $('#nav li a').removeClass('cur');
                        $('#nav li').find('.page3').addClass('cur');
                        switchCur();
                        break;

                    case 4:
                        $('#nav').addClass('min');
                        $('#nav li a').removeClass('cur');
                        $('#nav li').find('.page4').addClass('cur');
                        switchCur();
                        break;

                    case 5:
                        $('#nav').addClass('min');
                        $('#nav li a').removeClass('cur');
                        $('#nav li').find('.page5').addClass('cur');
                        switchCur();
                        break;

                    case 6:
                        $('#nav').addClass('min');
                        $('#nav li a').removeClass('cur');
                        $('#nav li').find('.page6').addClass('cur');
                        switchCur();
                        break;
                    case 7:
                        $('#nav').addClass('min');
                        $('#nav li a').removeClass('cur');
                        $('#nav li').find('.page7').addClass('cur');
                        switchCur();
                        break;
                }
            },

        });


        // 类似于alert啊，不过不会打断操作。调试信息用的，需要浏览器支持控制台输出
console.log('听说您在前端寻找一匹千里马？');
console.log("这是他的邮箱:%c huang_shui_jin@163.com","color:red");
console.log("要不打个电话试试:%c 18702604880","color:red");
});
//readyfunction结束

  

