function editSection(sectionId) {
    const section = document.getElementById(sectionId);
    const elements = section.querySelectorAll('.editable');
    elements.forEach(element => {
      const input = document.createElement('input');
      input.type = 'text';
      input.value = element.innerText;
      input.className = 'edit-input';
      element.innerText = '';
      element.appendChild(input);

      input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
          element.innerText = input.value;
        }
      });
    });
  }
