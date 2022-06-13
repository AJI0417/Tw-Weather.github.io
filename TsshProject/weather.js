function searchOnclick() {
  let date = new Date();
  let searchInput = document.getElementById("searchValue");
  let searchValue = searchInput.value;
  searchValue = searchValue.replace("台", "臺");
  let result;
  let render;
  document.getElementById("time").innerHTML = date;
  const API = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-B940D0C9-3CF7-4EB5-8E77-500932B41675&elementName=Wx&elementName=PoP&elementName=MaxT&locationName=${searchValue}`;
  const locationName = document.getElementById("locationName"),
    Wx = document.getElementById("Wx"),
    PoP = document.getElementById("PoP"),
    MaxT = document.getElementById("MaxT");
  const location = [
    "基隆市",
    "臺北市",
    "台北市",
    "新北市",
    "桃園市",
    "新竹縣",
    "新竹市",
    "苗栗縣",
    "臺中市",
    "台中市",
    "彰化縣",
    "南投縣",
    "雲林縣",
    "嘉義縣",
    "嘉義市",
    "臺南市",
    "台南市",
    "高雄市",
    "屏東縣",
    "宜蘭縣",
    "花蓮縣",
    "臺東縣",
    "台東縣",
    "澎湖縣",
    "金門縣",
    "連江縣",
  ];
  let check = location.indexOf(searchValue);
  fetch(API)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (searchValue == "" || check == -1) {
        alert("請輸入縣市或正確的縣市名稱");
      } else {
        searchInput.value = "";
        result = data.records.location;
        render = data.records.location[0].weatherElement;
        locationName.innerHTML = result[0].locationName;
        Wx.innerHTML = render[0].time[0].parameter.parameterName;
        PoP.innerHTML = render[1].time[0].parameter.parameterName + "%";
        MaxT.innerHTML = render[2].time[0].parameter.parameterName + "°C";
      }
    });
}

$(function () {
  let city = [
    "基隆市",
    "臺北市",
    "台北市",
    "新北市",
    "桃園市",
    "新竹縣",
    "新竹市",
    "苗栗縣",
    "臺中市",
    "台中市",
    "彰化縣",
    "南投縣",
    "雲林縣",
    "嘉義縣",
    "嘉義市",
    "臺南市",
    "台南市",
    "高雄市",
    "屏東縣",
    "宜蘭縣",
    "花蓮縣",
    "臺東縣",
    "台東縣",
    "澎湖縣",
    "金門縣",
    "連江縣",
  ];
  $("#searchValue").autocomplete({
    source: city,
  });
});
