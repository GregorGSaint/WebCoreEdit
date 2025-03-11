export function prices () {

if (window.innerWidth>767) { 

  var head = document.querySelector('.prices__head');
  
  var listHead = document.createElement('div');
  listHead.classList.add('prices__list-head');
  var tableHead = document.createElement('table');
  var rowH = tableHead.insertRow();
  var cellH1 = rowH.insertCell(); 
  var cellH2 = rowH.insertCell();
  var cellH3 = rowH.insertCell();
  var cellH4 = rowH.insertCell();
  cellH1.innerHTML = 'Ремонтные услуги'; 
  cellH2.innerHTML = 'Цена';
  cellH3.innerHTML = 'Срок';
  listHead.appendChild(tableHead);
  head.after(listHead);

  var listContent = document.createElement('div');
  listContent.classList.add('prices__list-content');
  var tableContent = document.createElement('table');

  var rowС1 = tableContent.insertRow();
  var cellС1 = rowС1.insertCell();
  var cellС2 = rowС1.insertCell();
  var cellС3 = rowС1.insertCell();
  var cellС4 = rowС1.insertCell();
  cellС1.innerHTML = 'Диагностика'; 
  cellС2.innerHTML = 'Бесплатно';
  cellС3.innerHTML = '30 мин';
  var button1 = document.createElement('a');
  button1.textContent = 'ЗАКАЗАТЬ';
  button1.href = '#';
  button1.classList.add('list-content__button');
  cellС4.appendChild(button1);
  listContent.appendChild(tableContent);
  listHead.after(listContent);

  var rowС2 = tableContent.insertRow();
  var cellС5 = rowС2.insertCell();
  var cellС6 = rowС2.insertCell();
  var cellС7 = rowС2.insertCell();
  var cellС8 = rowС2.insertCell();
  cellС5.innerHTML = 'Замена дисплея'; 
  cellС6.innerHTML = '1 000 ₽';
  cellС7.innerHTML = '30-120 мин';
  var button2 = button1.cloneNode(true);  
  cellС8.appendChild(button2);
  listContent.appendChild(tableContent);
  listHead.after(listContent);

  var rowС3 = tableContent.insertRow();
  var cellС9 = rowС3.insertCell();
  var cellС10 = rowС3.insertCell();
  var cellС11 = rowС3.insertCell();
  var cellС12 = rowС3.insertCell();
  cellС9.innerHTML = 'Замена полифонического динамика'; 
  cellС10.innerHTML = '1 000 ₽';
  cellС11.innerHTML = '30-120 мин';
  var button3 = button1.cloneNode(true);  
  cellС12.appendChild(button3);
  listContent.appendChild(tableContent);
  listHead.after(listContent);

  var rowС4 = tableContent.insertRow();
  var cellС13 = rowС4.insertCell();
  var cellС14 = rowС4.insertCell();
  var cellС15 = rowС4.insertCell();
  var cellС16 = rowС4.insertCell();
  cellС13.innerHTML = 'Тестирование с выдачей технического заключения'; 
  cellС14.innerHTML = '1 000 ₽';
  cellС15.innerHTML = '30-120 мин';
  var button4 = button1.cloneNode(true);  
  cellС16.appendChild(button4);
  listContent.appendChild(tableContent);
  listHead.after(listContent);

  var rowС5 = tableContent.insertRow();
  var cellС17 = rowС5.insertCell();
  var cellС18 = rowС5.insertCell();
  var cellС19 = rowС5.insertCell();
  var cellС20 = rowС5.insertCell();
  cellС17.innerHTML = 'Замена программного обеспечения'; 
  cellС18.innerHTML = '1 000 ₽';
  cellС19.innerHTML = '30-120 мин';
  var button5 = button1.cloneNode(true);  
  cellС20.appendChild(button5);
  listContent.appendChild(tableContent);
  listHead.after(listContent);

}  
}
