<?php if(!defined('IN_DISCUZ')) exit('Access Denied'); 
0
|| checktplrefresh('./template/yunzhan_saiche/common/header.htm', './template/yunzhan_saiche/common/header_common.htm', 1525328893, '2', './data/template/2_2_common_header_forum_forumdisplay.tpl.php', './template/yunzhan_saiche', 'common/header_forum_forumdisplay')
;?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php if($_G['config']['output']['iecompatible']) { ?><meta http-equiv="X-UA-Compatible" content="IE=EmulateIE<?php echo $_G['config']['output']['iecompatible'];?>" /><?php } ?>
<title><?php if(!empty($navtitle)) { ?><?php echo $navtitle;?> - <?php } if(empty($nobbname)) { ?> <?php echo $_G['setting']['bbname'];?> - <?php } ?> Powered by Discuz!</title>
<?php echo $_G['setting']['seohead'];?>
<meta name="keywords" content="<?php if(!empty($metakeywords)) { echo dhtmlspecialchars($metakeywords); } ?>" />
<meta name="description" content="<?php if(!empty($metadescription)) { echo dhtmlspecialchars($metadescription); ?> <?php } if(empty($nobbname)) { ?>,<?php echo $_G['setting']['bbname'];?><?php } ?>" />
<meta name="generator" content="Discuz! <?php echo $_G['setting']['version'];?>" />
<meta name="author" content="Discuz! Team and Comsenz UI Team" />
<meta name="copyright" content="2001-2013 Comsenz Inc." />
<meta name="MSSmartTagsPreventParsing" content="True" />
<meta http-equiv="MSThemeCompatible" content="Yes" />
<base href="<?php echo $_G['siteurl'];?>" /><link rel="stylesheet" type="text/css" href="data/cache/style_2_common.css?<?php echo VERHASH;?>" /><link rel="stylesheet" type="text/css" href="data/cache/style_2_forum_forumdisplay.css?<?php echo VERHASH;?>" /><?php if($_G['uid'] && isset($_G['cookie']['extstyle']) && strpos($_G['cookie']['extstyle'], TPLDIR) !== false) { ?><link rel="stylesheet" id="css_extstyle" type="text/css" href="<?php echo $_G['cookie']['extstyle'];?>/style.css" /><?php } elseif($_G['style']['defaultextstyle']) { ?><link rel="stylesheet" id="css_extstyle" type="text/css" href="<?php echo $_G['style']['defaultextstyle'];?>/style.css" /><?php } ?><script type="text/javascript">var STYLEID = '<?php echo STYLEID;?>', STATICURL = '<?php echo STATICURL;?>', IMGDIR = '<?php echo IMGDIR;?>', VERHASH = '<?php echo VERHASH;?>', charset = '<?php echo CHARSET;?>', discuz_uid = '<?php echo $_G['uid'];?>', cookiepre = '<?php echo $_G['config']['cookie']['cookiepre'];?>', cookiedomain = '<?php echo $_G['config']['cookie']['cookiedomain'];?>', cookiepath = '<?php echo $_G['config']['cookie']['cookiepath'];?>', showusercard = '<?php echo $_G['setting']['showusercard'];?>', attackevasive = '<?php echo $_G['config']['security']['attackevasive'];?>', disallowfloat = '<?php echo $_G['setting']['disallowfloat'];?>', creditnotice = '<?php if($_G['setting']['creditnotice']) { ?><?php echo $_G['setting']['creditnames'];?><?php } ?>', defaultstyle = '<?php echo $_G['style']['defaultextstyle'];?>', REPORTURL = '<?php echo $_G['currenturl_encode'];?>', SITEURL = '<?php echo $_G['siteurl'];?>', JSPATH = '<?php echo $_G['setting']['jspath'];?>', DYNAMICURL = '<?php echo $_G['dynamicurl'];?>';</script>
<script src="<?php echo $_G['setting']['jspath'];?>common.js?<?php echo VERHASH;?>" type="text/javascript"></script>
<?php if(empty($_GET['diy'])) { $_GET['diy'] = '';?><?php } if(!isset($topic)) { $topic = array();?><?php } ?>
    <link rel="stylesheet" type="text/css" href="template/yunzhan_saiche/style/css/yunzhan.css" media="all">
    <script src="template/yunzhan_saiche/style/js/jquery-u.js" type="text/javascript"></script>
    <script src="template/yunzhan_saiche/style/js/jquery_uc.js" type="text/javascript"></script>
    
    
    
    
    



<meta name="application-name" content="<?php echo $_G['setting']['bbname'];?>" />
<meta name="msapplication-tooltip" content="<?php echo $_G['setting']['bbname'];?>" />
<?php if($_G['setting']['portalstatus']) { ?>
<meta name="msapplication-task" content="name=<?php echo $_G['setting']['navs']['1']['navname'];?>;action-uri=<?php echo !empty($_G['setting']['domain']['app']['portal']) ? 'http://'.$_G['setting']['domain']['app']['portal'] : $_G['siteurl'].'portal.php'; ?>;icon-uri=<?php echo $_G['siteurl'];?><?php echo IMGDIR;?>/portal.ico" />
<?php } ?>
<meta name="msapplication-task" content="name=<?php echo $_G['setting']['navs']['2']['navname'];?>;action-uri=<?php echo !empty($_G['setting']['domain']['app']['forum']) ? 'http://'.$_G['setting']['domain']['app']['forum'] : $_G['siteurl'].'forum.php'; ?>;icon-uri=<?php echo $_G['siteurl'];?><?php echo IMGDIR;?>/bbs.ico" />
<?php if($_G['setting']['groupstatus']) { ?>
<meta name="msapplication-task" content="name=<?php echo $_G['setting']['navs']['3']['navname'];?>;action-uri=<?php echo !empty($_G['setting']['domain']['app']['group']) ? 'http://'.$_G['setting']['domain']['app']['group'] : $_G['siteurl'].'group.php'; ?>;icon-uri=<?php echo $_G['siteurl'];?><?php echo IMGDIR;?>/group.ico" />
<?php } if(helper_access::check_module('feed')) { ?>
<meta name="msapplication-task" content="name=<?php echo $_G['setting']['navs']['4']['navname'];?>;action-uri=<?php echo !empty($_G['setting']['domain']['app']['home']) ? 'http://'.$_G['setting']['domain']['app']['home'] : $_G['siteurl'].'home.php'; ?>;icon-uri=<?php echo $_G['siteurl'];?><?php echo IMGDIR;?>/home.ico" />
<?php } if($_G['basescript'] == 'forum' && $_G['setting']['archiver']) { ?>
<link rel="archives" title="<?php echo $_G['setting']['bbname'];?>" href="<?php echo $_G['siteurl'];?>archiver/" />
<?php } if(!empty($rsshead)) { ?>
<?php echo $rsshead;?>
<?php } if(widthauto()) { ?>
<link rel="stylesheet" id="css_widthauto" type="text/css" href="data/cache/style_<?php echo STYLEID;?>_widthauto.css?<?php echo VERHASH;?>" />
<script type="text/javascript">HTMLNODE.className += ' widthauto'</script>
<?php } if($_G['basescript'] == 'forum' || $_G['basescript'] == 'group') { ?>
<script src="<?php echo $_G['setting']['jspath'];?>forum.js?<?php echo VERHASH;?>" type="text/javascript"></script>
<?php } elseif($_G['basescript'] == 'home' || $_G['basescript'] == 'userapp') { ?>
<script src="<?php echo $_G['setting']['jspath'];?>home.js?<?php echo VERHASH;?>" type="text/javascript"></script>
<?php } elseif($_G['basescript'] == 'portal') { ?>
<script src="<?php echo $_G['setting']['jspath'];?>portal.js?<?php echo VERHASH;?>" type="text/javascript"></script>
<?php } if($_G['basescript'] != 'portal' && $_GET['diy'] == 'yes' && check_diy_perm($topic)) { ?>
<script src="<?php echo $_G['setting']['jspath'];?>portal.js?<?php echo VERHASH;?>" type="text/javascript"></script>
<?php } if($_GET['diy'] == 'yes' && check_diy_perm($topic)) { ?>
<link rel="stylesheet" type="text/css" id="diy_common" href="data/cache/style_<?php echo STYLEID;?>_css_diy.css?<?php echo VERHASH;?>" />
<?php } ?>
</head><body id="nv_<?php echo $_G['basescript'];?>" class="pg_<?php echo CURMODULE;?><?php if($_G['basescript'] === 'portal' && CURMODULE === 'list' && !empty($cat)) { ?> <?php echo $cat['bodycss'];?><?php } ?>" onkeydown="if(event.keyCode==27) return false;">
<div id="append_parent"></div>
<div id="ajaxwaitid"></div>
<?php if($_GET['diy'] == 'yes' && check_diy_perm($topic)) { include template('common/header_diy'); } if(check_diy_perm($topic)) { ?><?php
$diynav = <<<EOF

<a href="javascript:saveUserdata('diy_advance_mode', '');openDiy();">DIY</a>

EOF;
?>
<?php } if(CURMODULE == 'topic' && $topic && empty($topic['useheader']) && check_diy_perm($topic)) { ?>
<?php echo $diynav;?>
<?php } if(empty($topic) || $topic['useheader']) { if($_G['setting']['mobile']['allowmobile'] && (!$_G['setting']['cacheindexlife'] && !$_G['setting']['cachethreadon'] || $_G['uid']) && ($_GET['diy'] != 'yes' || !$_GET['inajax']) && ($_G['mobile'] != '' && $_G['cookie']['mobile'] == '' && $_GET['mobile'] != 'no')) { ?>
<div class="xi1 bm bm_c"> 请选择 <a href="<?php echo $_G['siteurl'];?>forum.php?mobile=yes">进入手机版</a> <span class="xg1">|</span> <a href="<?php echo $_G['setting']['mobile']['nomobileurl'];?>">继续访问电脑版</a> </div>
<?php } ?>

<div class="wp"><?php echo adshow("headerbanner/wp a_h");?><?php if(!empty($_G['setting']['pluginhooks']['global_cpnav_top'])) echo $_G['setting']['pluginhooks']['global_cpnav_top'];?>
<?php if(!empty($_G['setting']['pluginhooks']['global_cpnav_extra1'])) echo $_G['setting']['pluginhooks']['global_cpnav_extra1'];?>
<?php if(!empty($_G['setting']['pluginhooks']['global_cpnav_extra2'])) echo $_G['setting']['pluginhooks']['global_cpnav_extra2'];?>
</div>
<div class="cl"></div>
</div>
<div id="yunzhan_topnav" class="nav_bar_box">
  <div class="nav_content wp cl">
    <div class="logo">
      <span>
      <?php $mnid = getcurrentnav();?>        <?php if(!isset($_G['setting']['navlogos'][$mnid])) { ?>
        <a href="./" title="<?php echo $_G['setting']['bbname'];?>"><?php echo $_G['style']['boardlogo'];?></a>
        <?php } else { ?>
        <?php echo $_G['setting']['navlogos'][$mnid];?>
        <?php } ?>
      </span>
    </div>

    <div class="newnav_box">
        <!--Start Navigation-->
        <?php $mnid = getcurrentnav();?>        <div id="yunzhan_menu_nav" class="yunzhan_m_n">
          <?php if(is_array($_G['setting']['navs'])) foreach($_G['setting']['navs'] as $nav) { ?>          <?php if($nav['available'] && (!$nav['level'] || ($nav['level'] == 1 && $_G['uid']) || ($nav['level'] == 2 && $_G['adminid'] > 0) || ($nav['level'] == 3 && $_G['adminid'] == 1))) { ?>
          <li <?php echo $mnid;?> $$<?php echo $nav['navid'];?>$$ <?php if($mnid == $nav['navid']) { ?>class="active" <?php } ?><?php echo $nav['nav'];?>></li>
          <?php } ?>
          <?php } ?>
          <?php if(!empty($_G['setting']['pluginhooks']['global_nav_extra'])) echo $_G['setting']['pluginhooks']['global_nav_extra'];?>
        </div>
    </div>

    <div class="newnav_right">
         <ul id="umnav_menu" class="p_pop nav_pop" style="display: none;">
      <li><a class="infos" href="home.php?mod=space&amp;uid=<?php echo $_G['uid'];?>" target="_blank" title="访问我的空间"><?php echo $_G['member']['username'];?></a></li>
      <li><a href="home.php?mod=spacecp&amp;ac=credit&amp;showcredit=1" id="extcreditmenu">积分: <?php echo $_G['member']['credits'];?></a></li>
      <li><a href="home.php?mod=spacecp">设置</a></li>
      <?php if(is_array($_G['setting']['mynavs'])) foreach($_G['setting']['mynavs'] as $nav) { ?>      <?php if($nav['available'] && (!$nav['level'] || ($nav['level'] == 1 && $_G['uid']) || ($nav['level'] == 2 && $_G['adminid'] > 0) || ($nav['level'] == 3 && $_G['adminid'] == 1))) { ?>
      <?php $nav[code] = str_replace('style="', '_style="', $nav[code]);?>      <li><?php echo $nav['code'];?></li>
      <?php } ?>
      <?php } ?>
      <?php if(!empty($_G['setting']['pluginhooks']['global_usernav_extra3'])) echo $_G['setting']['pluginhooks']['global_usernav_extra3'];?>
      <?php if(($_G['group']['allowmanagearticle'] || $_G['group']['allowpostarticle'] || $_G['group']['allowdiy'] || getstatus($_G['member']['allowadmincp'], 4) || getstatus($_G['member']['allowadmincp'], 6) || getstatus($_G['member']['allowadmincp'], 2) || getstatus($_G['member']['allowadmincp'], 3))) { ?>
      <li><a href="portal.php?mod=portalcp">
        <?php if($_G['setting']['portalstatus'] ) { ?>
        门户管理
        <?php } else { ?>
        模块管理
        <?php } ?>
        </a></li>
      <?php } ?>
      <?php if($_G['uid'] && $_G['group']['radminid'] > 1) { ?>
      <li><a href="forum.php?mod=modcp&amp;fid=<?php echo $_G['fid'];?>" target="_blank"><?php echo $_G['setting']['navs']['2']['navname'];?>管理</a></li>
      <?php } ?>
      <?php if($_G['uid'] && $_G['adminid'] == 1 && $_G['setting']['cloud_status']) { ?>
      <li><a href="admin.php?frames=yes&amp;action=cloud&amp;operation=applist" target="_blank">云平台</a></li>
      <?php } ?>
      <?php if($_G['uid'] && getstatus($_G['member']['allowadmincp'], 1)) { ?>
      <li><a href="admin.php" target="_blank">管理中心</a></li>
      <?php } ?>
  <?php if(check_diy_perm($topic)) { ?>
      <li><?php echo $diynav;?></li>
      <?php } ?>
      <?php if(!empty($_G['setting']['pluginhooks']['global_usernav_extra4'])) echo $_G['setting']['pluginhooks']['global_usernav_extra4'];?>
      <li><a href="member.php?mod=logging&amp;action=logout&amp;formhash=<?php echo FORMHASH;?>">退出</a></li>
      <?php if(!empty($_G['setting']['pluginhooks']['global_usernav_extra1'])) echo $_G['setting']['pluginhooks']['global_usernav_extra1'];?>
      <?php if(!empty($_G['setting']['pluginhooks']['global_myitem_extra'])) echo $_G['setting']['pluginhooks']['global_myitem_extra'];?>
    </ul>

 <?php if($_G['uid']) { ?>
    <div id="yunzhan_user">
      <ul id="yunzhan_nav">
        <li id="user_box"> <span><a href="home.php?mod=space&amp;do=pm" id="pm_ntc"<?php if($_g['member']['newpm']) { ?> class="new"<?php } ?>>消息
          <?php if($_G['member']['newpm']) { ?>
          (<?php echo $_G['member']['newpm'];?>)
          <?php } ?>
          </a></span> <span><a href="home.php?mod=space&amp;do=notice" id="myprompt"<?php if($_g['member']['newprompt']) { ?> class="new"<?php } ?>>提醒
          <?php if($_G['member']['newprompt']) { ?>
          (<?php echo $_G['member']['newprompt'];?>)
          <?php } ?>
          </a></span>
          <?php if($_G['setting']['taskon'] && !empty($_G['cookie']['taskdoing_'.$_G['uid']])) { ?>
          <span><a href="home.php?mod=task&amp;item=doing" id="task_ntc" class="new">进行中的任务</a></span>
          <?php } ?>
          <a href="home.php?mod=space&amp;uid=<?php echo $_G['uid'];?>" target="_blank" title="访问我的空间" id="umnav" class="username" onMouseOver="showMenu({'ctrlid':this.id,'ctrlclass':'a'})">
          <?php echo avatar($_G[uid],small);?>          </a> </li>
      </ul>
    </div>

    <?php } elseif(!empty($_G['cookie']['loginuser'])) { ?>
    <div id="yunzhan_user">
      <ul id="yunzhan_nav">
        <li id="login_u_box"> <span><a id="loginuser" class="username">
          <?php echo dhtmlspecialchars($_G['cookie']['loginuser']); ?>          </a></span> <span><a href="member.php?mod=logging&amp;action=login" onClick="showWindow('login', this.href)">激活</a></span> <span><a href="member.php?mod=logging&amp;action=logout&amp;formhash=<?php echo FORMHASH;?>">退出</a></span> </li>
      </ul>
    </div>
    <?php } elseif(!$_G['connectguest']) { ?>
    <div class="yunzhan_login">
    <a href="plugin.php?id=wechat:login"><em class="i_wei"></em></a>
    <a href="connect.php?mod=login&amp;op=init&amp;referer=forum.php&amp;statfrom=login"><em class="i_qq"></em></a>
    </div>
    <div id="yunzhan_user">
      <ul id="yunzhan_nav">
        <li id="login_u_box"> <span><a href="javascript:;" onClick="javascript:lsSubmit();" class="nousername">登录</a></span> <span><a href="member.php?mod=register" class="btn-register">注册</a></span> </li>
      </ul>
    </div>
    <div style="display:none">
      <?php include template('member/login_simple'); ?>    </div>
    <?php } else { ?>
    <div id="yunzhan_user">
      <ul id="yunzhan_nav">
        <li id="login_u_box"> <span><a href="home.php?mod=spacecp&amp;ac=usergroup" class="nousername"><?php echo $_G['member']['username'];?></a></span> <span><a href="member.php?mod=logging&amp;action=logout&amp;formhash=<?php echo FORMHASH;?>">退出</a></span> </li>
      </ul>
    </div>
    <?php } ?>
    </div>



    <div class="cl"></div>
  </div>
  <!--End Navigation-->
  <?php if(!empty($_G['setting']['plugins']['jsmenu'])) { ?>
  <ul class="p_pop h_pop er_nav" id="plugin_menu" style="display: none">
    <?php if(is_array($_G['setting']['plugins']['jsmenu'])) foreach($_G['setting']['plugins']['jsmenu'] as $module) { ?>    <?php if(!$module['adminid'] || ($module['adminid'] && $_G['adminid'] > 0 && $module['adminid'] >= $_G['adminid'])) { ?>
    <li><?php echo $module['url'];?></li>
    <?php } ?>
    <?php } ?>
  </ul>
  <?php } ?>
  <?php echo $_G['setting']['menunavs'];?>
  <div class="cl"></div>
  <div id="mu" class="cl wp">
    <?php if($_G['setting']['subnavs']) { ?>
    <?php if(is_array($_G['setting']['subnavs'])) foreach($_G['setting']['subnavs'] as $navid => $subnav) { ?>    <?php if($_G['setting']['navsubhover'] || $mnid == $navid) { ?>
    <ul class="cl <?php if($mnid == $navid) { ?>current<?php } ?>" id="snav_<?php echo $navid;?>" style="display:<?php if($mnid != $navid) { ?>none<?php } ?>">
      <div class="wp">
      <?php echo $subnav;?>
      </div>
    </ul>
    <?php } ?>
    <?php } ?>
    <?php } ?>
  </div>
</div>
<?php } ?>
<div class="wp"><?php echo adshow("subnavbanner/a_mu");?><?php if(!empty($_G['setting']['pluginhooks']['global_header'])) echo $_G['setting']['pluginhooks']['global_header'];?>
</div>

<div id="wp" class="wp">
