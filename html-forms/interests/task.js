const interests = document.querySelectorAll('.interest');

interests.forEach(element => {
  const interestCheck = element.querySelectorAll('.interest__check');

  const checkbox = (item) => {
    if (item.currentTarget.checked) {
        interestCheck.forEach(item => item.checked = true);       
    } else if (!item.currentTarget.checked) {
        interestCheck.forEach(item => item.checked = false);       
    }
  }
    
  interestCheck[0].addEventListener('change', checkbox);

});