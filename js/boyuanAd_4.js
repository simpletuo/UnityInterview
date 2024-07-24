var times_bottom_banner_ad = 0;
function appendAsenseAD(obj,_ins){obj.innerHTML=_ins;let o=document.createElement("script");o.innerHTML="(adsbygoogle = window.adsbygoogle || []).push({});";obj.appendChild(o);}
function show_banner(){let _banner=document.getElementById('game_banner');_banner.innerHTML = "";appendAsenseAD(_banner,bottom_banner_Ad);if(typeof is_fresh_bottom_banner!="undefined"&&is_fresh_bottom_banner==true){setTimeout(show_banner,time_fresh_banner);} setTimeout(check_banner,3000);}
function check_banner(){let _banner=document.getElementById('bottom_banner_Ad'); if(_banner==undefined){ show_banner(); return;}  var attribute = _banner.getAttribute("data-ad-status");if(attribute==null){times_bottom_banner_ad+=1;if(times_bottom_banner_ad >6){ show_banner(); return;} setTimeout(check_banner,1000);return;} if(attribute=="unfilled"){setTimeout(show_banner,1000); return;}  }
function Yuan_startGame(){adsenseAnchorRemove();CheckGoogleADS();show_banner();if(typeof is_show_top_banner=="undefined"||is_show_top_banner==true){setTimeout(creat_topAnr,3000);}}
function adsenseAnchorRemove(){var Yuan_adID=document.getElementsByTagName('ins');for(var i=0;i<Yuan_adID.length;i++){if(Yuan_adID[i].getAttribute("data-anchor-status")){Yuan_adID[i].remove()}}}
var time_secends_ShowAnrAd = 0; 
function ShowAnrAd(){ time_secends_ShowAnrAd += 1;let elementTopBanner= document.getElementById('top-banner-container');let elementTop_banner_Ad = document.getElementById('top_banner_Ad');if(time_secends_ShowAnrAd >= 10 || elementTopBanner==undefined || elementTop_banner_Ad==undefined){creat_topAnr();return;}var attribute = elementTop_banner_Ad.getAttribute("data-ad-status");if(attribute==null){setTimeout(ShowAnrAd,1000);return;} if(attribute=="unfilled"){topAnrRemove(); return;} elementTopBanner.style.backgroundColor="#fff";elementTopBanner.style. boxShadow="0 0 5px 0 rgb(0 0 0 / 20%)"; elementTopBanner.style.pointerEvents = 'auto'; ShowAnrAd_CloseBtn();}
function ShowAnrAd_CloseBtn(){ let btnClose = document.getElementById('top-banner-close');btnClose.style.display='block';  btnClose.pointerEvents = "auto";}
function creat_topAnr(){time_secends_ShowAnrAd = 0;adsenseAnchorRemove();if(!navigator.onLine){topAnrRemove();return;} let topBannerBox=document.getElementById('topBannerBox');if((typeof topBannerBox) == "undefined" || topBannerBox == null){topBannerBox=document.createElement('Div');topBannerBox.id="topBannerBox";document.body.appendChild(topBannerBox);} topBannerBox.innerHTML='<div id="top-banner-container" style="background-color:none;pointer-events:none; top: 0px; left: 0;  padding-top: 3px;  padding-bottom: 2px;  position: fixed;  visibility: visible; width: 100%; z-index: 19; "><div id="top-banner-close" style="display: none;bottom: 0;position: relative;text-align: right;width: 100%;box-sizing: border-box;"><button id="top-banner-close-button" onclick="topAnrRemove()" style="background-color: #fff; border-style: none; border-radius:0 0 8px 8px;box-shadow: 0 -1px 1px 0 rgb(0 0 0 / 20%); outline: 0; position: absolute;left: 0; top: 100px; width: 28px;height: 20px;">X</button></div><div id="top-banner" align="center" style="overflow: hidden;margin: 0 auto;width: 100%;height: 100px;"></div></div>';appendAsenseAD(document.getElementById('top-banner'),top_banner_Ad);setTimeout(ShowAnrAd,3000);}
function topAnrRemove(){var topBannerBox = document.getElementById('topBannerBox');if(typeof topBannerBox!="undefined"){topBannerBox.remove();}setTimeout(creat_topAnr,time_fresh_top_banner);}
function CheckGoogleADS()
{	
	if(window.adsbygoogle!=undefined && window.adsbygoogle["loaded"] == true)return;
	if(google_adScene_js!=undefined && navigator.onLine)
	{
		let script = document.createElement("script");
		script.async = true;//"async"
		script.src = google_adScene_js;
		//document.body.appendChild(script);
		document.head.appendChild(script);
	}
	setTimeout(CheckGoogleADS,5000);
}

var htmlUrlModeAfc1 = './ShowAD.html';
var timeIntModeAfc1 = 5;
var timeRwModeAfc1 = 10;
let isAD_Award = false;
var ad_callbackName = null;
function callAfcIntMode1() {
    if ($('#ad_position_box')) {
        $('#ad_position_box').remove()
    }
    var ad_position_box = document.createElement("DIV");
    ad_position_box.id = "ad_position_box";
    ad_position_box.style.width = "100%",
    ad_position_box.style.height = "135%",
    ad_position_box.style.position = "absolute",
    ad_position_box.style.top = "0",
    ad_position_box.style.zIndex = 1500,
    ad_position_box.style.left = "0";
    document.getElementsByTagName("body")[0].appendChild(ad_position_box);
    $("#ad_position_box").load(htmlUrlModeAfc1, function(responseTxt, statusTxt, xhr) {
        $("#adsense_position_box").css({
            "background": "rgba(52, 58, 65, 0.6)",
            "backdrop-filter": "blur(5px)"
        });
        loadingadsafcIntMode1(timeIntModeAfc1);
        appendAsenseAD(document.getElementById('creative'), insert_Ad_1);
		 appendAsenseAD(document.getElementById('creative2'), insert_Ad_2);
    });
}
function callAfcRwMode1() {
    if ($('#ad_position_box')) {
        $('#ad_position_box').remove()
    }
    var ad_position_box = document.createElement("DIV");
    ad_position_box.id = "ad_position_box";
    ad_position_box.style.width = "100%",
    ad_position_box.style.height = "135%",
    ad_position_box.style.position = "absolute",
    ad_position_box.style.top = "0",
    ad_position_box.style.zIndex = 1500,
    ad_position_box.style.left = "0";
    document.getElementsByTagName("body")[0].appendChild(ad_position_box);
    $("#ad_position_box").load(htmlUrlModeAfc1, function(responseTxt, statusTxt, xhr) {
        $('#adsense_position_box').css({
            "background": "rgba(52, 58, 65, 0.6)",
            "backdrop-filter": "blur(5px)"
        });
        adsafcloadingRwMode1(timeRwModeAfc1);
        appendAsenseAD(document.getElementById('creative'), award_AD_1);
		//appendAsenseAD(document.getElementById('creative2'), award_AD_2);
		appendAsenseAD(document.getElementById('creative2'), insert_Ad_2);//底部统一用一个广告位显示
    });
}
function loadingadsafcIntMode1(_i) {
    _i = _i - 1;
    if (_i > 0) {
        $('#count-down-text').html("Loading in " + _i + " seconds");
        setTimeout('loadingadsafcIntMode1(' + _i + ')', 1000);
    } else {
        $('#count-down-container').hide(),
        $('#button_play_rew').css("opacity", "1");
        document.getElementById('button_play_rew').innerText = "PLAY";
        document.getElementById('button_play_rew').onclick = moveAdsAfcRwMode1;
    }
}

function adsafcloadingRwMode1(_i) {
    _i = _i - 1;
    if (_i > 0) {
        $('#count-down-text').html("Reward in " + _i + " seconds");
        setTimeout('adsafcloadingRwMode1(' + _i + ')', 1000);
    } else {
        $('#count-down-container').hide(),
        $('#button_play_rew').css("opacity", "1");
        document.getElementById('button_play_rew').innerText = "Get Rewards";
        document.getElementById('button_play_rew').onclick = moveAdsAfcRwMode1;
    }
}
function moveAdsAfcRwMode1() {
    $('#ad_position_box').remove();
	ResumeGame();
	if(ad_callbackName!=null&&MyUnityInstance!=null)
	{
		MyUnityInstance.SendMessage("GameManager",ad_callbackName);
	}
}

function ShowAD(isReward,callbackName)
{		
	isAD_Award = isReward;
	ad_callbackName = callbackName;
	if(isReward)
	{	
		
		callAfcRwMode1();
	}else
	{
		callAfcIntMode1();
	}
	
}
//Yuan_startGame(); 