!function(i){"use strict";var e=i.querySelector("#register");e.moreDetail=!1,e.locationValue="",e.sex="man",e.locationData={provinces:[{id:11,name:"北京",cities:["东城区","西城区","崇文区","宣武区","朝阳区","丰台区","石景山区","海淀区","门头沟区","房山区","通州区","顺义区","昌平区","大兴区","怀柔区","平谷区","密云县","延庆县"]},{id:12,name:"天津",cities:["和平区","河东区","河西区","南开区","河北区","红桥区","塘沽区","汉沽区","大港区","东丽区","西青区","津南区","北辰区","武清区","宝坻区","宁河县","静海县","蓟县"]},{id:13,name:"河北",cities:["石家庄","唐山","秦皇岛","邯郸","邢台","保定","张家口","承德","沧州","廊坊","衡水"]},{id:14,name:"山西",cities:["太原","大同","阳泉","长治","晋城","朔州","晋中","运城","忻州","临汾","吕梁"]},{id:15,name:"内蒙古",cities:["呼和浩特","包头","乌海","赤峰","通辽","鄂尔多斯","呼伦贝尔","兴安盟","锡林郭勒盟","乌兰察布盟","巴彦淖尔盟","阿拉善盟"]},{id:21,name:"辽宁",cities:["沈阳","大连","鞍山","抚顺","本溪","丹东","锦州","营口","阜新","辽阳","盘锦","铁岭","朝阳","葫芦岛"]},{id:22,name:"吉林",cities:["长春","吉林","四平","辽源","通化","白山","松原","白城","延边朝鲜族自治州"]},{id:23,name:"黑龙江",cities:["哈尔滨","齐齐哈尔","鸡西","鹤岗","双鸭山","大庆","伊春","佳木斯","七台河","牡丹江","黑河","绥化","大兴安岭"]},{id:31,name:"上海",cities:["黄浦区","卢湾区","徐汇区","长宁区","静安区","普陀区","闸北区","虹口区","杨浦区","闵行区","宝山区","嘉定区","浦东新区","金山区","松江区","青浦区","南汇区","奉贤区","崇明县"]},{id:32,name:"江苏",cities:["南京","无锡","徐州","常州","苏州","南通","连云港","淮安","盐城","扬州","镇江","泰州","宿迁"]},{id:33,name:"浙江",cities:["杭州","宁波","温州","嘉兴","湖州","绍兴","金华","衢州","舟山","台州","丽水"]},{id:34,name:"安徽",cities:["合肥","芜湖","蚌埠","淮南","马鞍山","淮北","铜陵","安庆","黄山","滁州","阜阳","宿州","巢湖","六安","亳州","池州","宣城"]},{id:35,name:"福建",cities:["福州","厦门","莆田","三明","泉州","漳州","南平","龙岩","宁德"]},{id:36,name:"江西",cities:["南昌","景德镇","萍乡","九江","新余","鹰潭","赣州","吉安","宜春","抚州","上饶"]},{id:37,name:"山东",cities:["济南","青岛","淄博","枣庄","东营","烟台","潍坊","济宁","泰安","威海","日照","莱芜","临沂","德州","聊城","滨州","菏泽"]},{id:41,name:"河南",cities:["郑州","开封","洛阳","平顶山","安阳","鹤壁","新乡","焦作","濮阳","许昌","漯河","三门峡","南阳","商丘","信阳","周口","驻马店"]},{id:42,name:"湖北",cities:["武汉","黄石","十堰","宜昌","襄樊","鄂州","荆门","孝感","荆州","黄冈","咸宁","随州","恩施土家族苗族自治州"]},{id:43,name:"湖南",cities:["长沙","株洲","湘潭","衡阳","邵阳","岳阳","常德","张家界","益阳","郴州","永州","怀化","娄底","湘西土家族苗族自治州"]},{id:44,name:"广东",cities:["广州","韶关","深圳","珠海","汕头","佛山","江门","湛江","茂名","肇庆","惠州","梅州","汕尾","河源","阳江","清远","东莞","中山","潮州","揭阳","云浮"]},{id:45,name:"广西",cities:["南宁","柳州","桂林","梧州","北海","防城港","钦州","贵港","玉林","百色","贺州","河池","南宁","柳州"]},{id:46,name:"海南",cities:["海口","三亚","其他"]},{id:50,name:"重庆",cities:["万州区","涪陵区","渝中区","大渡口区","江北区","沙坪坝区","九龙坡区","南岸区","北碚区","万盛区","双桥区","渝北区","巴南区","黔江区","长寿区","綦江县","潼南县","铜梁县","大足县","荣昌县","璧山县","梁平县","城口县","丰都县","垫江县","武隆县","忠县","开县","云阳县","奉节县","巫山县","巫溪县","石柱土家族自治县","秀山土家族苗族自治县","酉阳土家族苗族自治县","彭水苗族土家族自治县","江津市","合川市","永川区","南川市"]},{id:51,name:"四川",cities:["成都","自贡","攀枝花","泸州","德阳","绵阳","广元","遂宁","内江","乐山","南充","眉山","宜宾","广安","达州","雅安","巴中","资阳","阿坝","甘孜","凉山"]},{id:52,name:"贵州",cities:["贵阳","六盘水","遵义","安顺","铜仁","黔西南","毕节","黔东南","黔南"]},{id:53,name:"云南",cities:["昆明","曲靖","玉溪","保山","昭通","楚雄","红河","文山","思茅","西双版纳","大理","德宏","丽江","怒江","迪庆","临沧"]},{id:54,name:"西藏",cities:["拉萨","昌都","山南","日喀则","那曲","阿里","林芝"]},{id:61,name:"陕西",cities:["西安","铜川","宝鸡","咸阳","渭南","延安","汉中","榆林","安康","商洛"]},{id:62,name:"甘肃",cities:["兰州","嘉峪关","金昌","白银","天水","武威","张掖","平凉","酒泉","庆阳","定西","陇南","临夏","甘南"]},{id:63,name:"青海",cities:["西宁","海东","海北","黄南","海南","果洛","玉树","海西"]},{id:64,name:"宁夏",cities:["银川","石嘴山","吴忠","固原"]},{id:65,name:"新疆",cities:["乌鲁木齐","克拉玛依","吐鲁番","哈密","昌吉","博尔塔拉","巴音郭楞","阿克苏","克孜勒苏","喀什","和田","伊犁","塔城","阿勒泰"]},{id:71,name:"台湾",cities:["台北","高雄","其他"]},{id:81,name:"香港",cities:["香港"]},{id:82,name:"澳门",cities:["澳门"]},{id:100,name:"其他",cities:[]},{id:400,name:"海外",cities:["美国","英国","法国","俄罗斯","加拿大","巴西","澳大利亚","印尼","泰国","马来西亚","新加坡","菲律宾","越南","印度","日本","其他"]}]},e.showDetail=function(){t()&&(this.moreDetail=!0)},e.submitForm=function(){t()&&this.$["register-form"].submit()};var t=function(){for(var i=e.$["register-form"],t=i.querySelectorAll(".required"),n=0;n<t.length;n++)if(t[n].validate(),t[n].isInvalid)return!1;return!0};e.addEventListener("template-bound",function(){this.$["form-field"].style.transform="translateY(-30px)"})}(wrap(document));