
var topNav = document.getElementById('top-nav');

function __scrollTop(obj, type, fn) {
    if(obj.attachEvent) {
        obj.attachEvent('on' + type, function(){
            fn.call(obj);
        })
    }else {
        obj.addEventListener(type, fn, false);
    }
}

__scrollTop(window, 'scroll', function(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollTop >= 100) {
        // topNav.setAttribute("style", "background:white;opacity:0.9;");
        topNav.className = 'section navbar navbar-scroll';
    }else {
        // topNav.setAttribute("style", "background:transparent;opacity:1;");
        topNav.className = 'section navbar';
    }
});

function scrollTo(target) {
  $('html, body').animate({
    scrollTop: $(target).offset().top
  }, 1000)
}

function scrollToTop() {
  $('html, body').animate({scrollTop: '0px'}, 800)
}


//@desc:提交需求
$('.contact-submit').on('click',function(){
    var msg = '';
    var username = document.getElementById('contact-username').value;
    var email = document.getElementById('contact-email').value;
    var phone = document.getElementById('contact-phone').value;
    var company = document.getElementById('contact-company').value;
    var content = document.getElementById('contact-content').value;
    if (username === '') {
        msg = '姓名不能为空!';
        alert(msg);
        return false;
    }

    if (email === '') {
        msg = '邮箱不能为空!';
        alert(msg);
        return false;
    }

    if (phone === '') {
        msg = '电话号码不能为空!';
        alert(msg);
        return false;
    }

    if (company === '') {
        msg = '请输入公司名称!';
        alert(msg);
        return false;
    }

    if (content === '') {
        msg = '请填入您的需求描述!';
        alert(msg);
        return false;
    }
    $.ajax({
        type:"post",                                        //请求方式
        async:true,                                         //是否异步
        url:"http://helloworldstudio.com.cn/index/Index/add_needs",
        dataType:"jsonp",                                   //跨域json请求一定是jsonp
        // jsonp: "callbackparam",                          //跨域请求的参数名，默认是callback
        // jsonpCallback:"successCallback",                 //自定义跨域参数值，回调函数名也是一样，默认为jQuery自动生成的字符串
        jsonpCallback:"getResult",                          //自定义跨域参数值，回调函数名也是一样，默认为jQuery自动生成的字符串
        data:{
            "need_name":username,
            "e_mail":email,
            'phone':phone,
            'company_name':company,
            'needs_desc':content
        },                                                  //请求参数

        beforeSend: function() {
            //请求前的处理
        },

        success: function(data) {
            //请求成功处理，和本地回调完全一样
            alert(data.reason);
        },

        complete: function() {
            //请求完成的处理
        },

        error: function() {
            //请求出错处理
        }
    });
});
