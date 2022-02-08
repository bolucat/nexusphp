<?php

use App\Models\BonusLogs;
use App\Models\HitAndRun;
use App\Models\User;

return array (
  'basic' =>
  array (
    'SITENAME' => 'NexusPHP',
    'BASEURL' => '',
    'announce_url' => '',
  ),
  'main' =>
  array (
    'site_online' => 'yes',
    'max_torrent_size' => '1048576',
    'announce_interval' => '1800',
    'annintertwoage' => '7',
    'annintertwo' => '2700',
    'anninterthreeage' => '30',
    'anninterthree' => '3600',
    'signup_timeout' => '259200',
    'minoffervotes' => '15',
    'offervotetimeout' => '259200',
    'offeruptimeout' => '86400',
    'maxsubsize' => '3145728',
    'postsperpage' => '10',
    'topicsperpage' => '20',
    'torrentsperpage' => '50',
    'maxnewsnum' => '3',
    'max_dead_torrent_time' => '21600',
    'maxusers' => '50000',
    'torrent_dir' => 'torrents',
    'iniupload' => '0',
    'SITEEMAIL' => 'nobody@gmail.com',
    'ACCOUNTANTID' => '1',
    'ALIPAYACCOUNT' => '',
    'PAYPALACCOUNT' => '',
    'SLOGAN' => 'The Ultimate File Sharing Experience',
    'icplicense' => '',
    'autoclean_interval_one' => '900',
    'autoclean_interval_two' => '1800',
    'autoclean_interval_three' => '3600',
    'autoclean_interval_four' => '43200',
    'autoclean_interval_five' => '648000',
    'reportemail' => 'nobody@gmail.com',
    'invitesystem' => 'no',
    'registration' => 'yes',
    'showhotmovies' => 'no',
    'showclassicmovies' => 'no',
    'showimdbinfo' => 'no',
    'enablenfo' => 'yes',
    'enableschool' => 'no',
    'restrictemail' => 'no',
    'showpolls' => 'yes',
    'showstats' => 'yes',
    'showlastxtorrents' => 'no',
    'showtrackerload' => 'yes',
    'showshoutbox' => 'yes',
    'showfunbox' => 'no',
    'showoffer' => 'yes',
    'sptime' => 'no',
    'showhelpbox' => 'no',
    'enablebitbucket' => 'yes',
    'smalldescription' => 'yes',
    'altname' => 'no',
    'extforum' => 'no',
    'extforumurl' => 'http://www.cc98.org',
    'defaultlang' => 'en',
    'defstylesheet' => '3',
    'donation' => 'yes',
    'spsct' => 'no',
    'browsecat' => '4',
    'specialcat' => '4',
    'waitsystem' => 'no',
    'maxdlsystem' => 'no',
    'bitbucket' => 'bitbucket',
    'torrentnameprefix' => '[Nexus]',
    'showforumstats' => 'yes',
    'verification' => 'automatic',
    'invite_count' => '0',
    'invite_timeout' => '7',
    'seeding_leeching_time_calc_start' => '',
    'startsubid' => NULL,
    'logo' => '',
    'showlastxforumposts' => 'no',
    'pt_gen_api_point' => '',
    'enable_pt_gen_system' => 'no',
    'enable_technical_info' => 'no',
  ),
  'smtp' =>
  array (
    'smtptype' => 'advanced',
    'emailnotify' => 'no',
    'smtp_host' => 'localhost',
    'smtp_port' => '233',
    'smtp_from' => NULL,
    'smtpaddress' => 'smtp.qq.com',
    'smtpport' => '25',
    'accountname' => '',
    'accountpassword' => '',
  ),
  'security' =>
  array (
    'securelogin' => 'no',
    'securetracker' => 'no',
    'https_announce_url' => '',
    'iv' => 'yes',
    'maxip' => '2',
    'maxloginattempts' => '10',
    'changeemail' => 'no',
    'cheaterdet' => '1',
    'nodetect' => '11',
    'guest_visit_type' => 'normal',
    'guest_visit_value_static_page' => 'beian-aliyun.html',
    'guest_visit_value_custom_content' => ' [em24] ',
    'guest_visit_value_redirect' => 'https://nexusphp.org/',
    'login_type' => 'normal',
    'login_secret_lifetime' => '10',
    'login_secret_deadline' => '2021-02-03 18:55:46',
    'login_secret' => '8e19c6a796602bda113fb2f5bc9da2b0',
  ),
  'authority' =>
  array (
    'defaultclass' => '1',
    'staffmem' => '13',
    'newsmanage' => '14',
    'newfunitem' => '1',
    'funmanage' => '13',
    'sbmanage' => '13',
    'pollmanage' => '14',
    'applylink' => '1',
    'linkmanage' => '14',
    'postmanage' => '13',
    'commanage' => '13',
    'forummanage' => '14',
    'viewuserlist' => '2',
    'torrentmanage' => '13',
    'torrentsticky' => '14',
    'torrentonpromotion' => '0',
    'askreseed' => '2',
    'viewnfo' => '2',
    'torrentstructure' => '8',
    'sendinvite' => '2',
    'viewhistory' => '6',
    'topten' => '2',
    'log' => '5',
    'confilog' => '13',
    'userprofile' => '14',
    'torrenthistory' => '2',
    'prfmanage' => '13',
    'cruprfmanage' => '14',
    'uploadsub' => '1',
    'delownsub' => '2',
    'submanage' => '13',
    'updateextinfo' => '7',
    'viewanonymous' => '12',
    'beanonymous' => '4',
    'addoffer' => '0',
    'offermanage' => '13',
    'upload' => '2',
    'uploadspecial' => '12',
    'movetorrent' => '13',
    'chrmanage' => '13',
    'viewinvite' => '13',
    'buyinvite' => '5',
    'seebanned' => '12',
    'againstoffer' => '1',
    'userbar' => '2',
    'view_special_torrent' => '4',
      'torrent_hr' => User::CLASS_ADMINISTRATOR,
  ),
  'tweak' =>
  array (
    'where' => 'no',
    'iplog1' => 'yes',
    'bonus' => 'enable',
    'datefounded' => '2010-08-19',
    'enablelocation' => 'yes',
    'titlekeywords' => '',
    'metakeywords' => '',
    'metadescription' => '',
    'enablesqldebug' => 'no',
    'sqldebug' => '13',
    'cssdate' => '',
    'enabletooltip' => 'yes',
    'prolinkimg' => 'pic/prolink.png',
    'analyticscode' => '',
  ),
  'bonus' =>
  array (
    'donortimes' => '2',
    'perseeding' => '1',
    'maxseeding' => '7',
    'tzero' => '4',
    'nzero' => '7',
    'bzero' => '100',
    'l' => '300',
    'uploadtorrent' => '15',
    'uploadsubtitle' => '5',
    'starttopic' => '2',
    'makepost' => '1',
    'addcomment' => '1',
    'pollvote' => '1',
    'offervote' => '1',
    'funboxvote' => '1',
    'saythanks' => '0.5',
    'receivethanks' => '0',
    'funboxreward' => '5',
    'onegbupload' => '300',
    'fivegbupload' => '800',
    'tengbupload' => '1300',
    'ratiolimit' => '6',
    'dlamountlimit' => '50',
    'oneinvite' => '1000',
    'customtitle' => '5000',
    'vipstatus' => '8000',
    'bonusgift' => 'yes',
    'basictax' => '4',
    'taxpercentage' => '10',
    'prolinkpoint' => '1',
    'prolinktime' => '600',
      'cancel_hr' => BonusLogs::DEFAULT_BONUS_CANCEL_ONE_HIT_AND_RUN,
  ),
  'account' =>
  array (
    'neverdelete' => '6',
    'neverdeletepacked' => '3',
    'deletepacked' => '400',
    'deleteunpacked' => '150',
    'deletenotransfer' => '60',
    'deletenotransfertwo' => '0',
    'deletepeasant' => '30',
    'psdlone' => '50',
    'psratioone' => '0.4',
    'psdltwo' => '100',
    'psratiotwo' => '0.5',
    'psdlthree' => '200',
    'psratiothree' => '0.6',
    'psdlfour' => '400',
    'psratiofour' => '0.7',
    'psdlfive' => '800',
    'psratiofive' => '0.8',
    'putime' => '4',
    'pudl' => '50',
    'puprratio' => '1.05',
    'puderatio' => '0.95',
    'eutime' => '8',
    'eudl' => '120',
    'euprratio' => '1.55',
    'euderatio' => '1.45',
    'cutime' => '15',
    'cudl' => '300',
    'cuprratio' => '2.05',
    'cuderatio' => '1.95',
    'iutime' => '25',
    'iudl' => '500',
    'iuprratio' => '2.55',
    'iuderatio' => '2.45',
    'vutime' => '40',
    'vudl' => '750',
    'vuprratio' => '3.05',
    'vuderatio' => '2.95',
    'exutime' => '60',
    'exudl' => '1024',
    'exuprratio' => '3.55',
    'exuderatio' => '3.45',
    'uutime' => '80',
    'uudl' => '1536',
    'uuprratio' => '4.05',
    'uuderatio' => '3.95',
    'nmtime' => '100',
    'nmdl' => '3072',
    'nmprratio' => '4.55',
    'nmderatio' => '4.45',
    'getInvitesByPromotion' =>
    array (
      2 => '1',
      3 => '0',
      4 => '2',
      5 => '0',
      6 => '3',
      7 => '0',
      8 => '5',
      9 => '10',
    ),
  ),
  'torrent' =>
  array (
    'prorules' => 'no',
    'randomhalfleech' => '5',
    'randomfree' => '2',
    'randomtwoup' => '2',
    'randomtwoupfree' => '1',
    'randomtwouphalfdown' => '0',
    'largesize' => '20',
    'largepro' => '2',
    'expirehalfleech' => '150',
    'expirefree' => '60',
    'expiretwoup' => '60',
    'expiretwoupfree' => '30',
    'expiretwouphalfleech' => '30',
    'expirenormal' => '0',
    'hotdays' => '7',
    'hotseeder' => '10',
    'halfleechbecome' => '1',
    'freebecome' => '1',
    'twoupbecome' => '1',
    'twoupfreebecome' => '1',
    'twouphalfleechbecome' => '1',
    'normalbecome' => '1',
    'uploaderdouble' => '1',
    'deldeadtorrent' => '0',
    'randomthirtypercentdown' => '0',
    'thirtypercentleechbecome' => '1',
    'expirethirtypercentleech' => '0',
    'minvotes' => '10',
    'sticky_first_level_background_color' => '#89c9e6',
    'sticky_second_level_background_color' => '#aadbf3',
  ),
  'attachment' =>
  array (
    'enableattach' => 'yes',
    'classone' => '1',
    'countone' => '5',
    'sizeone' => '256',
    'extone' => 'jpg, jpeg, png, gif',
    'classtwo' => '2',
    'counttwo' => '10',
    'sizetwo' => '512',
    'exttwo' => 'torrent, zip, rar, 7z, gzip, gz',
    'classthree' => '5',
    'countthree' => '20',
    'sizethree' => '1024',
    'extthree' => 'mp3, ogg, oga, flv',
    'classfour' => '13',
    'countfour' => '500',
    'sizefour' => '2048',
    'extfour' => 'doc, xls',
    'savedirectory' => './attachments',
    'httpdirectory' => 'attachments',
    'savedirectorytype' => 'monthdir',
    'thumbnailtype' => 'createthumb',
    'thumbquality' => '80',
    'thumbwidth' => '500',
    'thumbheight' => '500',
    'watermarkpos' => '9',
    'watermarkwidth' => '300',
    'watermarkheight' => '300',
    'watermarkquality' => '85',
    'altthumbwidth' => '180',
    'altthumbheight' => '135',
  ),
  'advertisement' =>
  array (
    'enablead' => 'yes',
    'enablenoad' => 'yes',
    'noad' => '12',
    'enablebonusnoad' => 'yes',
    'bonusnoad' => '2',
    'bonusnoadpoint' => '10000',
    'bonusnoadtime' => '15',
    'adclickbonus' => '0',
  ),
  'code' =>
  array (
    'mainversion' => 'NexusPHP',
    'subversion' => 'v1.6.0-beta6',
    'releasedate' => '2021-05-08',
    'website' => '<a href="https://nexusphp.org" target="_blank">https://nexusphp.org</a>',
  ),
  'backup' =>
  array (
    'enabled' => 'no',
    'frequency' => 'daily',
    'hour' => '0',
    'minute' => '0',
    'google_drive_client_id' => '',
    'google_drive_client_secret' => '',
    'google_drive_refresh_token' => '',
    'google_drive_folder_id' => '',
  ),
     'hr' => [
         'mode' => HitAndRun::MODE_DISABLED,
         'inspect_time' => '',
         'seed_time_minimum' => '',
         'ignore_when_ratio_reach' => '',
         'ban_user_when_counts_reach' => '',
     ],
);
