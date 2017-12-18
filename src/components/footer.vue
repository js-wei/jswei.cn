/**
 * File: f:\vue\jswei.cn\src\components\footer
 * Created Date: 2017-12-18 4:09:41
 * Author: 魏巍
 * -----
 * Last Modified: 魏巍
 * Modified By: 2017-12-18 4:42:31
 * -----
 * Copyright (c) 2017 魏巍
 * ------
 * All shall be well and all shall be well and all manner of things shall be well.
 * We're doomed!
 */

<template>
    <div class="footer">
        <hr>
        <div class="copyright">
            <address>
                <strong>魏巍, Inc.</strong><br>
                江苏省苏州市姑苏区<br>
                三元二村47幢<br>
                <abbr title="手机">M:</abbr> 13584866592
                <abbr title="邮编">C:</abbr> 250000
            </address>
            <p>© 2017-03-21 魏巍</p>
        </div>
        <div id="rocket-to-top">
            <div class="level-2"></div>
            <div class="level-3"></div>
        </div>
    </div>
</template>

<script>
    import $ from "jquery";
    export default {
        data(){
            return {}
        },
        mounted(){
            var e = $("#rocket-to-top"),
                t = $(document).scrollTop(),
                n,
                r,
                i = !0;
            $(window).scroll(function() {
                var t = $(document).scrollTop();
                t == 0 ? e.css("background-position") == "0px 0px" ? e.fadeOut("slow") : i && (i = !1, $(".level-2").css("opacity", 1), e.delay(100).animate({
                    marginTop: "-1000px"
                },
                "normal",
                function() {
                    e.css({
                        "margin-top": "-125px",
                        display: "none"
                    }),
                    i = !0
                })) : e.fadeIn("slow")
            }),
            e.hover(function() {
                $(".level-2").stop(!0).animate({
                    opacity: 1
                })
            },
            function() {
                $(".level-2").stop(!0).animate({
                    opacity: 0
                })
            }),
            //download by www.sucaijiayuan.com
            $(".level-3").click(function() {
                function t() {
                    var t = e.css("background-position");
                    if (e.css("display") == "none" || i == 0) {
                        clearInterval(n),
                        e.css("background-position", "0px 0px");
                        return
                    }
                    switch (t){
                    case "0px 0px":
                        e.css("background-position", "-298px 0px");
                        break;
                    case "-298px 0px":
                        e.css("background-position", "-447px 0px");
                        break;
                    case "-447px 0px":
                        e.css("background-position", "-596px 0px");
                        break;
                    case "-596px 0px":
                        e.css("background-position", "-745px 0px");
                        break;
                    case "-745px 0px":
                        e.css("background-position", "-298px 0px");
                    }
                }
                if (!i) return;
                n = setInterval(t, 50),
                $("html,body").animate({scrollTop: 0},"slow");
            });
        }
    }
</script>

<style lang="scss" scoped>
    .footer{
        height:120px;
        .copyright{
            text-align:right;
            line-height:1.2rem;
            font-size:.9rem;
        }
        #rocket-to-top{
            background: url("/static/images/rocket_button_up.png") no-repeat scroll 0 0 transparent;
            cursor: default;
            display: block;
            height: 250px;
            margin: -125px 0 0;
            overflow: hidden;
            padding: 0;
            position: fixed;
            right: 0;
            top: 80%;
            width: 149px;
            z-index: 11;
            div{
                left: 0;
                margin: 0;
                overflow: hidden;
                padding: 0;
                position: absolute;
                top: 0;
                width: 149px;
            }
            .level-2{
                background: url("/static/images/rocket_button_up.png") no-repeat scroll -149px 0 transparent;
                display: none;
                height: 250px;
                opacity: 0;
                z-index: 1;
                opacity:0;
                display: block;
            }
            .level-3{
                background: none repeat scroll 0 0 transparent;
                cursor: pointer;
                display: block;
                height: 150px;
                z-index: 2;
            }
        }
    }
</style>