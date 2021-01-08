document.getElementsByClassName("header-section")[0].innerHTML += `<!--toggle button start-->
<a class="toggle-btn  menu-collapsed"><i class="fa fa-bars"></i></a>
<!--toggle button end-->
<!--notification menu start -->
<div class="menu-right">
    <div class="profile_details">
        <div class="col-md-4 serch-part">
            <div id="sb-search" class="sb-search">
                <form action="#" method="post">

                    <input class="sb-search-input" placeholder="Search" type="search" name="search"
                        id="search">
                    <input class="sb-search-submit" type="submit" value="">
                    <span class="sb-icon-search"> </span>
                </form>
            </div>
        </div>
        <!-- search-scripts -->
        <script src="js/classie.js"></script>
        <script src="js/uisearch.js"></script>
        <script>
            new UISearch(document.getElementById('sb-search'));
        </script>
        <!-- //search-scripts -->
        <!---->
        <div class="col-md-4 player">
            <div class="audio-player">
                <audio id="audio-player" controls="controls">
                    <source id="audioSource" src="" type="audio/mpeg">
                    </source>
                </audio>
            </div>
            <!---->
            <script type="text/javascript">
                $(function () {
                    $('#audio-player').mediaelementplayer({
                        alwaysShowControls: true,
                        features: ['playpause', 'progress', 'volume'],
                        audioVolume: 'horizontal',
                        iPadUseNativeControls: true,
                        iPhoneUseNativeControls: true,
                        AndroidUseNativeControls: true
                    });
                });
            </script>
            <!--audio-->
            <link rel="stylesheet" type="text/css" media="all" href="css/audio.css">
            <script type="text/javascript" src="js/mediaelement-and-player.min.js"></script>
            <!---->


            <!--//-->
            <ul class="next-top">
                <li><a class="ar"> <img onclick="buttonPre()" src="images/arrow.png" alt="" /></a></li>

                <li><a class="ar2"> <img onclick="buttonNext()" src="images/arrow2.png"
                            alt="" /></i></a></li>
            </ul>
        </div>

        <!--Handle Login-->
        <div class="col-md-4 login-pop">
        </div>
        <script src="./js/ModalLogin.js"></script>
        <script src="./js/handleLogin.js"></script>
        <div class="clearfix"> </div>
    </div>
    <!-------->
</div>
<div class="clearfix"></div>`
