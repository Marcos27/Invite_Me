 console.log("Hello World")

$().ready(function(event) {
  $(".heart").hide()
   $(document).ready(function(){
      $(".slider").click(function() {
        $(".heart-holder").hide()
        $(".heart").show()
        // $(".heart-holder").animate({"width": "250px", "height": "250px"});
      });
  });
});
