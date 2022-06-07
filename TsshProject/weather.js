function searchOnclick() {
  let searchInput = document.getElementById("searchValue");
  let searchValue = searchInput.value;
  searchValue = searchValue.replace("台", "臺");
  const API = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-B940D0C9-3CF7-4EB5-8E77-500932B41675&elementName=Wx&elementName=PoP&elementName=MaxT&locationName=${searchValue}`;
  const locationName = document.getElementById("locationName"),
    Wx = document.getElementById("Wx"),
    PoP = document.getElementById("PoP"),
    MaxT = document.getElementById("MaxT"),
    time = document.getElementById("time");
  const location = [
    "基隆市",
    "臺北縣",
    "新北縣",
    "桃園縣",
    "苗栗市",
    "臺中縣",
    "南投市",
    "雲林市",
    "彰化市",
    "南投市",
    "臺南縣",
    "高雄縣",
    "屏東市",
    "宜蘭市",
    "花蓮市",
    "台東市",
    "馬祖縣",
    "馬祖市",
  ];
  let check = location.includes(searchValue);
  let result;
  let render;
  fetch(API)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (searchValue == "" || check) {
        alert("請輸入縣市或正確的縣市名稱");
      } else {
        searchInput.value = "";
        result = data.records.location;
        render = data.records.location[0].weatherElement;
        locationName.innerHTML = result[0].locationName;
        Wx.innerHTML = render[0].time[0].parameter.parameterName;
        PoP.innerHTML = render[1].time[0].parameter.parameterName + "%";
        MaxT.innerHTML = render[2].time[0].parameter.parameterName + "°C";
        time.innerHTML = render[0].time[0].startTime;
      }
    });
}
