const cbt = {
    RPL : {
        X:[ 
          {
            mapel: "Matematika",
            url: "ms365",
          },
          {
            mapel: "bindo",
            url: "ms365",
          },
          {
            mapel: "b.inggris",
            url: "ms365",
          }
        ],
        XI: 
          {
            mtk: "ms365",
            bindo: "ms345",
            binggris: "ms375"
          },
        XII: 
          {
            mtk: "ms365",
            bindo: "ms345",
            binggris: "ms375"
          }
      },
    AK : {
        X: 
          {
            mtk: "ms365",
            bindo: "ms345",
            binggris: "ms375"
          },
        XI: 
          {
            mtk: "ms365",
            bindo: "ms345",
            binggris: "ms375"
          },
        XII: 
          {
            mtk: "ms365",
            bindo: "ms345",
            binggris: "ms375"
          }
      },
    HOTEL : {
        X: 
          {
            mtk: "ms365",
            bindo: "ms345",
            binggris: "ms375"
          },
        XI: 
          {
            mtk: "ms365",
            bindo: "ms345",
            binggris: "ms375"
          },
        XII: 
          {
            mtk: "ms365",
            bindo: "ms345",
            binggris: "ms375"
          }
      }
    }

var data = cbt.RPL
var kelas = data.X
var mapelX = kelas[0]

label = mapelX.mapel
iframe = mapelX.url
console.log(mapel);
