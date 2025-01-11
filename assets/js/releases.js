console.log("hehe dupa");

fetch('https://api.github.com/repos/mrcyjanek/unnamed_monero_wallet/releases')
    .then(res => res.json())
    .then(response => {
        let version = response[0].tag_name;
        let dat = new Date(response[0].created_at);
        let DiffrenceInTime = dat - new Date();
        let DiffrenceInDays = Math.round(DiffrenceInTime / (1000 * 3600 * 24));
        let finaly_time = Math.abs(DiffrenceInDays);

        document.getElementById("release").innerHTML = finaly_time + " days ago " + version ;
    });