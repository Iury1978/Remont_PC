ymaps.ready(function () {
  var myMap = new ymaps.Map(
      "map",
      {
        center: [47.050130435066805, 28.8644740413191],
        zoom: 17,
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemark = new ymaps.Placemark(
      myMap.getCenter(),
      {
        hintContent: "Ремонт компьютеров",
        balloonContent: "+(373)79-111111",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "/src/marker.svg",
        // Размеры метки.
        iconImageSize: [60, 60],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38],
      }
    );

  myMap.geoObjects.add(myPlacemark);
});
