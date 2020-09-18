$(function(){
// console.log(3);
 
  $('.cat__btn').click(    //ここはホバーよりクリックの方が良いと思います。
    function() {

      $(this).next('.slide').slideToggle('fast');

    },
    function() {

      $(this).next('.slide').slideToggle('fast');

    }
  );
  $('.s_all').click(    //ここはホバーよりクリックの方が良いと思います。
    function() {
        $('.c1').show();
        $('.c2').show();
        $('.c3').show();
        $('.c4').show();
    }
  );
  $('.s_cook').click(    //ここはホバーよりクリックの方が良いと思います。
    function() {

        $('.c1').show();
        $('.c2').hide();
        $('.c3').hide();
        $('.c4').hide();
    }
  );
  $('.s_movie').click(    //ここはホバーよりクリックの方が良いと思います。
    function() {
        $('.c1').hide();
        $('.c2').show();
        $('.c3').hide();
        $('.c4').hide();
    }
  );
  $('.s_gym').click(    //ここはホバーよりクリックの方が良いと思います。
    function() {
        $('.c1').hide();
        $('.c2').hide();
        $('.c3').show();
        $('.c4').hide();
    }
  );
  $('.s_music').click(    //ここはホバーよりクリックの方が良いと思います。
    function() {
        $('.c1').hide();
        $('.c2').hide();
        $('.c3').hide();
        $('.c4').show();
    }
  );
  $('.s_cook').hover(    //ここはホバーよりクリックの方が良いと思います。
    function() {
      $(this).children('.c_cook').show();
    },function(){
      $(this).children('.c_cook').hide();
    }
  );
  $('.s_movie').hover(    //ここはホバーよりクリックの方が良いと思います。
    function() {
      $(this).children('.c_movie').show();
    },function(){
      $(this).children('.c_movie').hide();
    }
  );
  $('.s_gym').hover(    //ここはホバーよりクリックの方が良いと思います。
    function() {
      $(this).children('.c_gym').show();
    },function(){
      $(this).children('.c_gym').hide();
    }
  );
  $('.s_music').hover(    //ここはホバーよりクリックの方が良いと思います。
    function() {
      $(this).children('.c_music').show();
    },function(){
      $(this).children('.c_music').hide();
    }
  );
  $('.co_1').click(    //ここはホバーよりクリックの方が良いと思います。
    function() {
        $('.sc1').show();
        $('.sc2').hide();
        $('.sc3').hide();
        $('.sc4').hide();
    }
  );
  $('.co_2').click(    //ここはホバーよりクリックの方が良いと思います。
    function() {
        $('.sc1').hide();
        $('.sc2').show();
        $('.sc3').hide();
        $('.sc4').hide();
    }
  );

});

