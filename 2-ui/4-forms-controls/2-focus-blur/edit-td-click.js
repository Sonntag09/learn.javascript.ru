let table = document.getElementById('bagua-table');

let editOn = false;

table.addEventListener('click', editCell);

function editCell(event) {
  let td = event.target.closest('td');
  if (!td || !table.contains(td) || editOn) return;

  let h = td.offsetHeight;
  let w = td.offsetWidth;  

  editOn = true;
  let area = document.createElement('textarea');
  td.replaceWith(area);
  area.style.width = w + 'px';
  area.style.height = h + 'px';
  area.value = td.innerHTML;  
  area.focus();
  addButtons(area);

  function addButtons(elem) {
    let form = document.createElement('form');
    let ok = document.createElement('button');
    let cancel = document.createElement('button');
    ok.textContent = 'OK';
    cancel.textContent = 'CANCEL';
    form.append(ok);
    form.append(cancel);
    table.after(form);
    let elemCoords = elem.getBoundingClientRect();
    
    form.style.left = elemCoords.left + 'px';
    form.style.top = elemCoords.bottom + 'px';
    
    form.onclick = function(event) {
      let target = event.target;
      if (target != ok && target != cancel) return;
      if (target === ok) td.innerHTML = area.value;

      area.replaceWith(td);
      editOn = false;
      form.remove();
    };    
  }  
}