
  
  $('#submit').on('click',function(){

  const firstnameInput = document.getElementById("firstname").value
  const lastnameInput =  document.getElementById("lastname").value
  const emailInput =  document.getElementById("email").value
  const mobileInput =  document.getElementById("mobile").value
  const messageInput =  document.getElementById("message").value
  const message = `Thank you, ${firstnameInput} for your enquiry. I will get back to you within 3 business days.`

  let values = { name: firstnameInput,
    lastname:lastnameInput,
    email:emailInput,
    tel: mobileInput,
    message:messageInput
  }
    $.ajax({
    method: 'POST',
    url: 'https://formsubmit.co/ajax/24cea2453fe9f67aeedeb5e3cc56e232',
    dataType: 'json',
    accepts: 'application/json',
    data: JSON.stringify(values)


  });
  let btnClear = document.querySelector('button');
  let inputs = document.querySelectorAll('input');
  btnClear.addEventListener('click',() => {
  inputs.forEach(input => input.value = '');
  });
  let textareas = document.querySelectorAll('textarea');
  btnClear.addEventListener('click',() => {
  textareas.forEach(input => input.value = '');
  });
    
});

// function clearForm() {
//   document.getElementById("firstname").value = '';
//   document.getElementById("lastname").value = '';
//   document.getElementById("email").value = '';
//   document.getElementById("mobile").value = '';
//   document.getElementById("message").value = '';
// }
 
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname){
      for(tablink of tablinks){
        tablink.classList.remove("active-link");
      }
      for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
      }
      event.currentTarget.classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab");
    }


    var sidemenu = document.getElementById("sidemenu");

    function openmenu(){

      sidemenu.style.right = "0";

    }

    function closemenu(){

      sidemenu.style.right = "-200px";

    }
    const cursor = document.querySelector('.cursor'); 
    document.addEventListener('mousemove', e => { 
      cursor.setAttribute("style","top: " + (e.pageY - 1000) + "px; left: " + (e.pageX - 1000) + "px;")
      // console.log(e)
    } )
