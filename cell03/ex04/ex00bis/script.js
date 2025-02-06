$(document).ready(function () {
  $("#myButton").click(function () {
    // ฟังก์ชันสำหรับสุ่มสีในรูปแบบ RGB
    function getRandomColor() {
      var r = Math.floor(Math.random() * 256); // สุ่มค่า Red (0-255)
      var g = Math.floor(Math.random() * 256); // สุ่มค่า Green (0-255)
      var b = Math.floor(Math.random() * 256); // สุ่มค่า Blue (0-255)
      return "rgb(" + r + "," + g + "," + b + ")";
    }

    // เปลี่ยนสีพื้นหลังของ body เป็นสีที่สุ่ม
    $("body").css("background-color", getRandomColor());
    var currentWidth = parseInt($("#myButton").css("width"));
    var currentHeight = parseInt($("#myButton").css("height"));

    $("#myButton").css({
      width: currentWidth + 10 + "px",
      height: currentHeight + 10 + "px",
    });
  });
});
