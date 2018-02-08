const HTMLyear = document.getElementById('year')

count = 0;
//
// $(function(){
//     $document.querySelector('.box').click(function(){
//         one = (count % 2 == 0) ? '.box';
//         other = (count % 2 == 0) ? '.box';
//         count++;
//
//         $(one).css('opacity', '1');
//         $(other).css('opacity', '0');
//     });
// });
// $('.box').on('click', function()
// {
//   var box = $('.box');
//
//   // box is not visible
//   if(box.css('opacity') === '0')
//   {
//     box.css({
//       'opacity': '0.9',
//       'height': 'auto'
//     });
//   }
//   else
//   {
//     box.css({
//       'opacity': '0',
//       'height': '0'
//     });
//   }
// });
//
// console.log(Hello)

function changeImage() {
    var image = document.getElementByClass('.box');
    image.style.display = (image.style.display == 'none') ? 'block' : 'none';
}

setInterval(changeImage, 5000);
