const badgeForm = document.getElementById('badgeForm');
const downloadBadge = document.getElementById('dwnBadge');
const createAnother = document.getElementById('createAnother');


badgeForm.addEventListener('submit', function(event){

    event.preventDefault();

    const formContainer = document.getElementById('formContainer');
    formContainer.style.display = 'none';

    const nickname = document.getElementById('nickname').value;
    const city = document.getElementById('city').value;
    const age = document.getElementById('age').value;
    const bias = document.getElementById('bias').value;
    const erafav = document.getElementById('erafav').value;
    const unitfav = document.getElementById('unitfav').value;

    const id = 'ID ' + Math.floor(Math.random() * 100).toString().padStart(4, '0');

    $('#badgeNickname').text(nickname);
    $('#badgeCity').text(city);
    $('#badgeAge').text(age);
    $('#badgeBias').text(bias);
    $('#badgeEra').text(erafav);
    $('#badgeUnit').text(unitfav);

    $('#badgeFront').css('display', 'block');
    $('#badgeBack').css('display', 'block');
    $('#dwnBadge').css('display', 'block');
    $('#createAnother').css('display', 'block');
});


createAnother.addEventListener('click', function(){
    
    $('#badgeFront').css('display', 'none');
    $('#badgeBack').css('display', 'none');
    $('#dwnBadge').css('display', 'none');
    $('#createAnother').css('display', 'none');

    document.getElementById('formContainer').style.display='block';
    document.getElementById('badgeForm').reset();
})

downloadBadge.addEventListener('click', function(e){
    
    e.preventDefault();
    
    const badgeElement = document.getElementById('badgeFull');
    htmlToImage.toPng(badgeElement)
    .then(function (dataUrl) {
      const link = document.createElement('a');
      link.download = document.getElementById('nickname').value+'.png';
      link.href =dataUrl;
      link.click();
    })
    .catch(function (error){
      console.error('Error converting HTML to image:'. error)
    })
  
  })