$(document).ready(function(){
  if(window.location.pathname.includes('subscription')) {
    let table = new DataTable('#myTable', {
      dom: '<"top"<"toolbar">f>rt<"bottom"<"bottom-left"l><"bottom-right"p>>',
      language: {
        search: '',
        sInfoEmpty: '',
        sInfoFiltered: '',
        sSearchPlaceholder: 'Search Address',
        // sInfo: "Page _PAGE_ of _PAGES_",
        sInfo: '',
        // sLengthMenu: "Show rows: _MENU_",
        lengthMenu: 'Show rows: <select>'+
          '<option value="5">5</option>'+
          '<option value="10">10</option>'+
          '<option value="20">20</option>'+
          '<option value="30">30</option>'+
          '<option value="40">40</option>'+
          '<option value="50">50</option>'+
          '</select>',
        paginate: {
          "next": "<img src='/images/table-arrow.png'></img>",
          "sPrevious": "<img src='/images/table-arrow.png'></img>"
        }  
      },
      sPaginationType: "simple_numbers",
      bSort: false,
    });
    document.querySelector('div.toolbar').innerHTML = window.translations[91000] ? window.translations[91000] : 91000
  }
})