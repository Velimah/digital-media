$('#hakulomake').submit(function(evt) {
  evt.preventDefault();
  $('#tulos').empty();

  const osoite = $(this).attr('action');
  const hakulause = $(this).serialize();
  const url = osoite + hakulause;

  $.getJSON(url, function(sarjat){
    console.log(sarjat);
    $.each(sarjat, function(i, sarja) {
      console.log(sarja.show.name);

      const nimi = sarja.show.name;
      const kotisivu = sarja.show.officialSite || sarja.show.url;
      const kuva = sarja.show.image?.medium || "stock.png";
      const yhteenveto = sarja.show.summary;

      $('#tulos').append(
          '<div class="row my-3 border border-dark bg-light">'+

          '<div class="col px-0">'+
          '<img src="'+kuva+'" alt="kuva">'+
          '</div>'+

          '<div class="col-10">'+
          '<h2 class="py-3">'+nimi+'</h2>'+
          yhteenveto+
          '<p><a href="'+kotisivu+'">Kotisivu</a></p>'+
          '</div>'+

          '</div>'
      );
    });
  });
});