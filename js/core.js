var dimmer  =    '#load_dimmer';
var block   =     '#main_block';
var avatar  =         '#avatar';
var files_m =    '#files_modal';

var video   =          '#video';
var music   =          '#music';
var music_c =             false;
var music_p = '#music_progress';

var v_prev  =     '#video-prev';
var v_p     =        '#video-p';
var v_m     =        '#video-m';
var v_next  =     '#video-next';

var coubs   = {
    0 : {
        'video': '/sGet.php?url=http://s2.storage.akamai.coub.com/get/b171/p/coub/simple/cw_file/91d25851fc3/a9b1e7760f227e4d18189/muted_mp4_big_size_1496410340_muted_big.mp4',
        'audio': '/sGet.php?url=http://s3.storage.akamai.coub.com/get/b177/p/coub/simple/cw_looped_audio/a2d34fff5f4/0552b5454f0a5ec4d1a31/high_1496410366_high.mp3'
    },
    1 : {
        'video': '/sGet.php?url=http://s2.storage.akamai.coub.com/get/b62/p/coub/simple/cw_file/416b7461ffd/b9baa51283a79e41dfb89/muted_mp4_big_size_1490359292_muted_big.mp4',
        'audio': '/sGet.php?url=http://s3.storage.akamai.coub.com/get/b48/p/coub/simple/cw_looped_audio/4c13fbc82e2/1ec78c341fe3318abec4c/high_1490359301_high.mp3'
    },
    2 : {
        'video': '/sGet.php?url=http://s3.storage.akamai.coub.com/get/b46/p/coub/simple/cw_file/d2375f9b4e4/cc2aa542dc574c773048c/muted_mp4_med_size_1444151393_muted_med.mp4',
        'audio': '/sGet.php?url=http://s2.storage.akamai.coub.com/get/b46/p/coub/simple/cw_looped_audio/331722bf6f4/5af63bd168aeffd229c35/high_1444921956_high.mp3'
    },
    3 : {
        'video': '/sGet.php?url=http://s1.storage.akamai.coub.com/get/b171/p/coub/simple/cw_file/178a4cfb40f/ffcdf9df12592099792ea/muted_mp4_big_size_1496750649_muted_big.mp4',
        'audio': '/sGet.php?url=http://s4.storage.akamai.coub.com/get/b171/p/coub/simple/cw_looped_audio/62cce754b3d/62c4dd759436c3fe1b149/high_1496750673_high.mp3'
    },
    4 : {
        'video': '/sGet.php?url=http://s2.storage.akamai.coub.com/get/b112/p/coub/simple/cw_file/46789cd311c/a55be426b839e8ce47ef3/muted_mp4_big_size_1491947670_muted_big.mp4',
        'audio': '/sGet.php?url=http://s4.storage.akamai.coub.com/get/b22/p/coub/simple/cw_looped_audio/8a1fdb18c06/4a123e1e1f7c87c038657/high_1491947689_high.mp3'
    },
    5 : {
        'video': '/sGet.php?url=http://s4.storage.akamai.coub.com/get/b185/p/coub/simple/cw_file/3c43bd737ea/e0e83a6ed76f0331c6443/muted_mp4_big_size_1496577206_muted_big.mp4',
        'audio': '/sGet.php?url=http://s.storage.akamai.coub.com/get/b185/p/coub/simple/cw_looped_audio/0587611f987/23f3619c0cf715ec50653/high_1496577221_high.mp3'
    },
    6 : {
        'video': '/sGet.php?url=http://s2.storage.akamai.coub.com/get/b17/p/coub/simple/cw_file/f0acf8014fa/8af1f4e982a05568ff237/muted_mp4_big_size_1491753623_muted_big.mp4',
        'audio': '/sGet.php?url=http://s2.storage.akamai.coub.com/get/b97/p/coub/simple/cw_looped_audio/99d44fe5fd1/0cbfbad13329e1cf096f8/high_1491753646_high.mp3'
    },
    7 : {
        'video': '/sGet.php?url=http://s3.storage.akamai.coub.com/get/b30/p/coub/simple/cw_file/116f5257093/0dcddae1c4b9990637674/muted_mp4_med_size_1490963846_muted_med.mp4',
        'audio': '/sGet.php?url=http://s.storage.akamai.coub.com/get/b65/p/coub/simple/cw_looped_audio/20cc0f78f1e/7b2ff3c2eedc40f347d95/high_1490963913_high.mp3'
    },
    8 : {
        'video': '/sGet.php?url=http://s2.storage.akamai.coub.com/get/b38/p/coub/simple/cw_file/833d8b96ea0/73a43282a4c95616a9823/muted_mp4_big_size_1491150104_muted_big.mp4',
        'audio': '/sGet.php?url=http://s1.storage.akamai.coub.com/get/b100/p/coub/simple/cw_looped_audio/f3ab5a4e59e/5dc23211498153a0e462c/high_1491150147_high.mp3'
    },
    9 : {
        'video': '/sGet.php?url=http://s4.storage.akamai.coub.com/get/b110/p/coub/simple/cw_file/24b2f4e2fa0/bcb7fec25e28d88069d6b/muted_mp4_med_size_1474920275_muted_med.mp4',
        'audio': '/sGet.php?url=http://s3.storage.akamai.coub.com/get/b110/p/coub/simple/cw_looped_audio/ee088a4adda/8a0a13c211c01ae9acdb6/high_1474920280_high.mp3'
    }
};
var coubNo  =                 0;

window.onload = function () {
    $('.ui.dimmer').dimmer({closable: false});

    $(dimmer).dimmer('show');
    $(dimmer).dimmer('hide');

    $(block).fadeIn(300);
    $(music_p).progress({
        percent: calcPercents(coubNo)
    });

    $(avatar).dimmer('show');

    $.ajax({
        url: "https://api.vk.com/method/users.get?user_ids=480161329&fields=photo_max",
        crossOrigin: true,
        dataType: 'jsonp',

        success: function(result) {
            $(avatar).find('img').attr('src', result['response'][0]['photo_max']);
            $(avatar).dimmer('hide');
        }
    });
    
    $(v_p).on('click', function (event) {
        switch ($(video).get(0).paused) {
            case true:
                $(video).get(0).play();
                $(music).get(0).play();
                $(this).find('i').removeClass('play').addClass('pause');
                break;

            default:
            case false:
                $(video).get(0).pause();
                $(music).get(0).pause();
                $(this).find('i').removeClass('pause').addClass('play');
                break;
        }
    });
    $(v_m).on('click', function (event) {
        switch ($(music).prop('muted')) {
            case true:
                if (music_c === false) {
                    if (confirm('Музыка может быть слишком громкой!') === true) {
                        music_c = true;
                    } else {
                        break;
                    }
                }
                
                $(music).prop('muted', false).removeAttr('muted');
                $(this).find('i').removeClass('off').addClass('up');
                break;

            default:
            case false:
                $(music).prop('muted', true).attr('muted', 'muted');
                $(this).find('i').removeClass('up').addClass('off');
                break;
        }
    });
    $(v_prev).on('click', function (event) {
        if (coubNo === 0 || (coubNo - 1) >= Object.keys(coubs).length) {
            coubNo = (Object.keys(coubs).length - 1);
        } else {
            coubNo--;
        }
        console.log(coubNo);

        $(dimmer).dimmer('show');

        var pause = false;
        if ($(video).get(0).paused === true) {
            pause = true;
        }

        $(video).find('source').attr('src', coubs[coubNo]['video']);
        $(music).find('source').attr('src', coubs[coubNo]['audio']);
        $(video).get(0).load();
        $(music).get(0).load();
        if (pause === true) {
            $(video).get(0).pause();
            $(music).get(0).pause();
        }

        $(music_p).progress({
            percent: calcPercents(coubNo)
        });

        var checkInterval = setInterval(function () {
            if ($(video).get(0).readyState === 4 && $(music).get(0).readyState === 4) {
                if (pause === true) {
                    $(video).get(0).pause();
                    $(music).get(0).pause();
                }
                $(dimmer).dimmer('hide');
                clearInterval(checkInterval);
            }
        }, 100);
    });
    $(v_next).on('click', function (event) {
        if (coubNo === (Object.keys(coubs).length - 1) || (coubNo + 1) >= Object.keys(coubs).length) {
            coubNo = 0;
        } else {
            coubNo++;
        }
        console.log(coubNo);

        $(dimmer).dimmer('show');

        var pause = false;
        if ($(video).get(0).paused === true) {
            pause = true;
        }

        $(video).find('source').attr('src', coubs[coubNo]['video']);
        $(music).find('source').attr('src', coubs[coubNo]['audio']);
        $(video).get(0).load();
        $(music).get(0).load();
        if (pause === true) {
            $(video).get(0).pause();
            $(music).get(0).pause();
        }

        $(music_p).progress({
            percent: calcPercents(coubNo)
        });

        var checkInterval = setInterval(function () {
            if ($(video).get(0).readyState === 4 && $(music).get(0).readyState === 4) {
                if (pause === true) {
                    $(video).get(0).pause();
                    $(music).get(0).pause();
                }
                $(dimmer).dimmer('hide');
                clearInterval(checkInterval);
            }
        }, 100);
    });
};

function calcPercents (no) {
    var total   = Object.keys(coubs).length;
    var current = no + 1;

    return (current * 100) / total;
}

function openFilesModal() {
    $(files_m).modal('show');
}